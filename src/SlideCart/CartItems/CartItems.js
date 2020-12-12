import React, {Component} from "react"
import "./CartItems.css"
import {RiDeleteBinFill} from 'react-icons/ri'
class CartItems extends React.Component{
    render(){
        var{item} = this.props;
        return(
            <div class="shelf-item">
                <div class="shelf-item__del"></div>
                <div class="shelf-item__thumb">
                    <img src={item.product.link_Anh}/>
                </div>
                <div class="shelf-item__details">
                    <p class="title">{item.product.name}</p>
                    <p class="desc">{item.product.moTa}</p><p class="qtt">Số lượng: {item.quantity}</p>
                </div>
                <div class="shelf-item__price">
                    <p>{this.showSubTotal(item.product.giaGoc, item.quantity)}.000 VNĐ</p>
                <div>
                    <button disabled="" class="change-product-button" onClick={ () => this.onDecToCart(item.product,item.quantity) }>-</button>
                    <button class="change-product-button" onClick={ () => this.onIncToCart(item.product,item.quantity) }>+</button>
                </div>
                </div>
                <RiDeleteBinFill className = "del_button" onClick={ () => this.onDelete(item.product)}/>
            </div>
            )
    };

    onDelete(product){
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
    }
    showSubTotal = (price, quantity) =>{
        return price * quantity;    
    }
    onIncToCart = (quantity) =>{
        this.props.onIncToCart(quantity);
    }                    
    onDecToCart = (quantity) =>{
        this.props.onDecToCart(quantity);
    }                    
}
export default CartItems;