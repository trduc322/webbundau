import React, {Component} from "react"

import "./SlideCart.css"
import { FaShoppingBasket} from 'react-icons/fa';
import { FaChevronRight} from 'react-icons/fa';


class SlideCart extends React.Component{
  

    
    state = { 
        isOpen: false
    };

    openCart = () =>{
        this.setState({ isOpen: true});
    };
    closeCart = () =>{
        this.setState({ isOpen: false});
    };
    
    
    render(){
    
        var {children} = this.props;

        let classes = ["slidecart"];
        if(!!this.state.isOpen){
            classes.push("slidecart-open");
        }
        return(
            <div class="main-slidecart">
                <div className={classes.join(" ")}>
                    {this.state.isOpen &&(
                    <FaChevronRight onClick ={() => this.closeCart()}
                        className="slidecart-close-btn">
                        
                    </FaChevronRight>
                )}
                {!this.state.isOpen && (
                    <FaShoppingBasket onClick={() => this.openCart()}
                    className="slidecart-closed">
                  
                    </FaShoppingBasket>
                )}
                <div className="slidecart-content">
                    <div className="slidecart-header">
                        <span className="slidecart-header-title">Cart</span>
                    </div>
                            
                        { children }
                    

                    
                </div>
                </div>

            </div>
        )

    };
}



export default SlideCart;