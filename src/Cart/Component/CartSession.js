import React, {useState} from "react"
import './CartSession.css';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
 



class CartSession extends React.Component{
    
    render(){
        return(
         <div>
             <div className="cart-section__title">
                 <h1>Giỏ hàng</h1>
            </div>
            
            <CartBody/>
           
         </div>   
        )
    }
}

function CartBody(props) {
    return(
        <div class ="cart-section__body">
            <table class = "cart__list" >
                <CartList/>
            </table>
        <CartSum sum="300.000 VNĐ" shipfee="15.000 VNĐ" total="1.000.000 VNĐ"/>
        </div>
    )

}


function CartList(props){
    return(
        
            <tbody>
               <tr>
                    <th class="cart-product__name">SẢN PHẨM</th>
                    <th class="cart-product__price">GIÁ</th>
                    <th class="cart-product__quanlity">SỐ LƯỢNG</th>
                    <th class="cart-product__total">THÀNH TIỀN</th>
                    <th class="cart-product__delete"></th>
               </tr>   
                <CartList_Items hinh = "/Images/bundau.jpg" name="Combo Ga Ran" gia = "10.000 VND" soluong ="2"/> 
                <CartList_Items hinh = "/Images/bundau.jpg" name="Combo Ga Ran" gia = "10.000 VND" soluong ="2"/> 
                <CartList_Items hinh = "/Images/bundau.jpg" name="Combo Ga Ran" gia = "10.000 VND" soluong ="2"/> 
                <CartList_Items hinh = "/Images/bundau.jpg" name="Combo Ga Ran" gia = "10.000 VND" soluong ="2"/> 
               
            </tbody>
   
    )
}
function  CartList_Items(props) {

    const[soluong, setSoluong] = useState(1)

    return(
    
        <tr class="cart-table">
            <td class="uncentered">
                <img src={props.hinh} alt="hinhanh"/>
                <p>{props.name}</p>
            </td>
            <td>{props.gia}</td>
            <td>
                <div class="cart-quantity">
                  <FaMinus onClick ={()=>{(soluong>1) ? setSoluong(soluong-1) : setSoluong(soluong)}} aria-hidden="true"/>
                    {soluong}
                  <FaPlus onClick={()=>setSoluong(soluong+1)} aria-hidden="true"/>
                </div>
            </td>
            <td>{props.gia}</td>
            <td><FaTrashAlt aria-hidden="true"/></td>
        </tr>
    
    )
}
    

function CartSum(props){
    return(
        <div class ="cart-summary">
        <div class="summary__container">
              <h3>Đơn hàng</h3>
              <div>
                <p class="summary__title">Tạm tính</p>
                <span class="price">{props.sum}</span>
              </div>
              <div>
                <p class="summary__title">Phí ship</p>
                <span class="shipping__price">{props.shipfee}</span>
              </div>
              <form id="form__coupon">
                <label for="coupon">Mã khuyến mãi (nếu có)</label>
                <div>
                  <input type="text" id="coupon" name="coupon"/>
                  <button type="submit" id="submit">NHẬP</button>
                </div>
              </form>
              <div class="line"></div>
              <div class="total">
                <h3>Tổng</h3>
                <h3 class="total__price">{props.total}</h3>
              </div>
              
              
        </div>
            <a href="#" class="checkout">XÁC NHẬN ĐƠN HÀNG</a>
        </div>

        
    )
}

export default CartSession;