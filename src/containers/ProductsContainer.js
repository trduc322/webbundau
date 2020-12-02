import React from "react"
import {connect} from 'react-redux'
import ShopBody from '../Homepage/Components/ShopBody/ShopBody.js'
import Items from '../Homepage/Components/Item/Item.js'
import PropTypes from 'prop-types'
import {actAddToCart} from '../actions/index'


class ProductsContainer extends React.Component{

    render(){
      var { products } = this.props;
        return(
            <ShopBody>
                { this.showProducts(products) }
            </ShopBody>
        );
        
    }
    showProducts(products){
        var result = null;
        var { onAddToCart } = this.props;
        if(products.length > 0){
          result = products.map((product, index) =>{
                return <Items 
                    key={index}
                    product = {product}
                    onAddToCart = {onAddToCart}
                    />
          });
        }
        return result;
      }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired
        })
    ).isRequired
}

const mapStateToProps = state =>{
    return{
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ProductsContainer);