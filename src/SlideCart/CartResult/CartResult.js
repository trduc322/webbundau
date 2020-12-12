import React, {Component} from "react"
import "../SlideCart.css"
class CartResult extends React.Component{
    render(){
        var { cart } = this.props;
        return(
            <div class="float-cart__footer">
                        <div class="sub">TỔNG CỘNG</div>
                        <div class="sub-price">
                            <p class="sub-price__val">{this.showTotalAmount(cart)}.000 VND</p>
                            <small class="sub-price__installment ">
                                </small>
                                </div>
                                <a class="buy-btn" href ="/payment">Checkout</a>
                        </div>
            )
    };

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0){
            for(var i = 0; i < cart.length ; i++){
                total += cart[i].product.giaGoc * cart[i].quantity;
            }
        }
        return total;
    }
}
export default CartResult;