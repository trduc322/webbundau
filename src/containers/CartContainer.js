import React from "react"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import SlideCart from '../SlideCart/SlideCart.js'
import CartItem from '../SlideCart/CartItems/CartItems.js'
import CartResult from '../SlideCart/CartResult/CartResult.js'
import {actIncToCart} from '../actions/index'
import {actDecToCart} from '../actions/index'
import {actDeleteProductInCart} from '../actions/index'

class CartContainer extends React.Component{
    render(){
        var { cart } = this.props;
        return(
            <SlideCart>
                <div className="slidecart-containter">  
                { this.showCartItem(cart) }
                </div>
                { this.showTotalAmount(cart) }
            </SlideCart>
        );
        
    }

    showCartItem = (cart) =>{
        var { onDeleteProductInCart } = this.props;
        var { onIncToCart } = this.props;
        var { onDecToCart } = this.props;
        var result = (<p className="empty-slidecart">
        Add some products in the cart <br/>
        </p>);
        if(cart.length > 0){
            result = cart.map((item, index) =>{
                return(
                    <CartItem
                        key = {index}
                        item = {item}
                        index = {index}
                        onIncToCart = {onIncToCart}
                        onDecToCart = {onDecToCart}
                        onDeleteProductInCart = {onDeleteProductInCart}
                    />
                )
            });
        }
        return result;
    }

    showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = {cart}/>
        }
        return result;
    }

}

    CartContainer.propTypes = {
        cart : PropTypes.arrayOf(
            PropTypes.shape({
                product: PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                image : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired
                })
            })
        ).isRequired
    }

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onIncToCart: (product, quantity) => {
            dispatch(actIncToCart(product,quantity));
        },
        onDecToCart: (product, quantity) => {
            dispatch(actDecToCart(product,quantity));
        },
        onDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (CartContainer);