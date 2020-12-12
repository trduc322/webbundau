import React from "react"
import './TongTien.css';
import Callapi from '../../../apiCaller.js'

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
            <a onClick={this.thanhToan} class="checkouttt">THANH TOÁN</a>
          </div>
           
          
        )
    }

    thanhToan = (e) =>{
      var user = JSON.parse(localStorage.getItem('USER'));
      var pttt = JSON.parse(localStorage.getItem('PTTT'));
       
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate();
      var data;
    if(user!== null)
      {data ={
        iD_User: user,
        pTThanhToan: pttt,
        ngayThang: date,
        tongTien: this.showTotalAmountDH(this.props.cart)
      }
      
    }
    if(user===null){
      data ={
        iD_User: 1,
        pTThanhToan: pttt,
        ngayThang: date,
        tongTien: this.showTotalAmountDH(this.props.cart)
      }
    }
    var ctdh = [];
    Callapi("donhang","POST", data).then((res)=>{
      console.log(1)
      for(var i=0; i<this.props.cart.length; i++){
        var result = {
          iD_DonHang: res.data.iD_DonHang,
          iD_ThucPham: this.props.cart[i].product.iD_ThucPham,

          so_Luong: this.props.cart[i].quantity,
          donGia: (this.props.cart[i].product.giaGoc*this.props.cart[i].quantity)
        }
        ctdh.push(result);
        console.log(result);
        Callapi("chitietdonhang","POST",ctdh[i])
    }
    })
    
    setTimeout(function(){
      window.location= "http://localhost:3000/camon"
    },2000)
    
  }

    showTotalAmountDH = (cart) => {
      var total = 0;
      if (cart.length > 0){
          for(var i = 0; i < cart.length ; i++){
              total += cart[i].product.giaGoc * cart[i].quantity;
          }
      }
      return total;
  }
  showTotalAmountDHship =(cart) => {
    return this.showTotalAmountDH(cart) + 15;
  }
}

export default TongTien;