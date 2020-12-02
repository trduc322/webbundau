import React from "react"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import DonDH from '../Payment/Components/DonDH/DonDH.js'
import DonDHItem from  '../Payment/Components/DonDH/DonDHItem/DonDHItem.js'
import TongTien from '../Payment/Components/TongTien/TongTien.js'

class CartContainer extends React.Component{
    render(){
        var { cart } = this.props;
        return(
            <div>
            <DonDH>
                <div className="slidecart-containter">  
                { this.showCartItem(cart) }
                </div>
            </DonDH>
                { this.showTotalAmount(cart) }
                </div>
        );
        
    }

    showCartItem = (cart) =>{
        var result = (<p className="empty-slidecart">
        Add some products in the cart <br/>
        </p>);
        if(cart.length > 0){
            result = cart.map((item, index) =>{
                return(
                    <DonDHItem
                        key = {index}
                        itemDH = {item}
                        index = {index}
                    />
                )
            });
        }
        return result;
    }

    showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = <TongTien cart = {cart}/>
        }
        return result;
    }

}

    // CartContainer.propTypes = {
    //     cart : PropTypes.arrayOf(
    //         PropTypes.shape({
    //             product: PropTypes.shape({
    //             id : PropTypes.number.isRequired,
    //             name : PropTypes.string.isRequired,
    //             price : PropTypes.number.isRequired,
    //             image : PropTypes.string.isRequired,
    //             description : PropTypes.string.isRequired
    //             })
    //         })
    //     ).isRequired
    // }

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}


export default connect (mapStateToProps, null) (CartContainer);