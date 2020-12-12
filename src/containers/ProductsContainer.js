import React from "react";
import { connect } from "react-redux";
import ShopBody from "../Homepage/Components/ShopBody/ShopBody.js";
import Items from "../Homepage/Components/Item/Item.js";
import PropTypes from "prop-types";
import { actAddToCart } from "../actions/index";
import axios from "axios";
import callApi from "./../apiCaller.js";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    callApi("food", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      }); 
    });
  }
  render() {
    var { products } = this.state;
    return (
      <ShopBody>
        {(this.props.category === "all")?
        (this.showProducts(products)) : (this.showProductscate(products, this.props.category))}
  
      </ShopBody>
    );
  }
  showProducts(products) {
    var result = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Items key={index} product={product} onAddToCart={onAddToCart} />
        );
      });
    }
    return result;
  }
  showProductscate(products, loaiThucPham) {
    var result = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        if (product.loaiThucPham === loaiThucPham)
          return (
            <Items key={index} product={product} onAddToCart={onAddToCart} />
          );
      });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      iD_ThucPham: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      giaGoc: PropTypes.number.isRequired,
      link_Anh: PropTypes.string.isRequired,
      moTa: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
