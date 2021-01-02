import React from "react"
import './TongTien.css';
import Callapi from '../../../apiCaller.js'
import {PayPalButton} from "react-paypal-button-v2"

class TongTien extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
       discount: 0,
       coupon: "",
       PTTT: "",
       TT : "2"
    }
  }

  
 
    render()  {
      var { cart } = this.props;
      const pttt = JSON.parse(localStorage.getItem('PTTT'))
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
                <input type="text" id="coupon" name="coupon" value = {this.state.coupon} onChange = {this.handleChange}/>
                <button  type="submit" id="submit" onClick={this.khuyenMai}>NHẬP</button>
                <p class="km">{this.state.discount}%</p>
              </div>
            </form>
            <div class="line"></div>
            <div class="total">
              <h3>Tổng</h3>
              <h3 class="total__price">{this.showTotalAmountDHship(cart)}.000 VNĐ</h3>
            </div>
            {(pttt==="cash") ? 
            <a onClick={this.thanhToan} class="checkouttt">THANH TOÁN</a>
            :
            <PayPalButton
            onClick={this.thanhToan}
            // onClick={this.TinhTongTien}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: "CAD",
                    value: this.formatVNDtoCAD(this.showTotalAmountDHship(cart)) + ""
                  }
                }]
              });
            }}
            onApprove={(data, actions) => {
              console.log(this.formatVNDtoCAD(this.showTotalAmountDHship(this.props.cart)) + "")
              // Capture the funds from the transaction
              return actions.order.capture().then(function(details) {
                // Show a success message to your buyer
                alert("Transaction completed by " + details.payer.name.given_name);
                window.location= "http://localhost:3000/camon"
                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                });
              });
            }}
            />}
          </div>
           
          
        )
    }

    changePTTT = () => {
      this.setState({
        PTTT : JSON.parse(localStorage.getItem('PTTT'))
      })
    }

    TinhTongTien(){
      this.setState({
          TT : this.formatVNDtoCAD(this.showTotalAmountDHship(this.props.cart)) + ""
      })
    }

    handleChange = (e) => {
     this.setState({
           [e.target.name]: e.target.value
      })
      console.log(this.state.coupon)
      e.preventDefault();
  }

    khuyenMai = (e) =>{
      var code = {
        name: this.state.coupon
      }
      Callapi("khuyenmai/khuyenmai", "POST", code).then((res) => {
        this.setState({
            discount: res.data,
        }); 
        console.log(this.state.discount)
    });
    e.preventDefault();
    }

    formatVNDtoCAD(VND){
        return (VND/18.028).toFixed(2);
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
        tongTien: this.showTotalAmountDHship(this.props.cart)
      }
      
    }
    if(user===null){
      data ={
        iD_User: 1,
        pTThanhToan: pttt,
        ngayThang: date,
        tongTien: this.showTotalAmountDHship(this.props.cart)
      }
    }
    if(pttt==="paypal"){
      
      // <PayPal cad = {this.formatVNDtoCAD(this.showTotalAmountDHship(this.props.cart))}/>
      
      console.log("69")
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
      if(pttt === "cash")
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
      return Math.ceil(total - (total*this.state.discount/100));
  }
  showTotalAmountDHship =(cart) => {
    return this.showTotalAmountDH(cart) + 15;
  }
}

export default TongTien;