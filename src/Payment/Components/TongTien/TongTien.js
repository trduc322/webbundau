import React from "react"
import './TongTien.css';

class TongTien extends React.Component{
    render()  {
        var { cart } = this.props;
        return (
        
          
            <div class="summary__container">
                <div>
                <p class="summary__title">Tạm tính</p>
                <span class="price">{this.showTotalAmountDH(cart)}.000 VND</span>
                </div>
            <div>
              <p class="summary__title">Phí ship</p>
              <span class="shipping__price">15.000 VNĐ</span>
            </div>
            <form id="form__coupon">
              <label for="coupon">Mã khuyến mãi (nếu có)</label>
              <div>
                <input type="text" id="coupon" name="coupon" />
                <button type="submit" id="submit">NHẬP</button>
              </div>
            </form>
            <div class="line"></div>
            <div class="total">
              <h3>Tổng</h3>
              <h3 class="total__price">{this.showTotalAmountDHship(cart)}.000 VNĐ</h3>
            </div>
            <a href="#" class="checkouttt">THANH TOÁN</a>
          </div>
           
          
        )
    }

    showTotalAmountDH = (cart) => {
      var total = 0;
      if (cart.length > 0){
          for(var i = 0; i < cart.length ; i++){
              total += cart[i].product.price * cart[i].quantity;
          }
      }
      return total;
  }
  showTotalAmountDHship =(cart) => {
    return this.showTotalAmountDH(cart) + 15;
  }
}

export default TongTien;