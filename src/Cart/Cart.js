import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import CartSession from "./Component/CartSession.js"
import "./Cart.css"


class Cart extends React.Component{
    
    render(){
        return(
            <div>
            <Header/>

                <div class ="cart-container"> 
                    <div class ="cart-section">
                        <CartSession/>
                    </div>
                </div>
            <Footer/>
            </div>
        )
    }
}


export default Cart;