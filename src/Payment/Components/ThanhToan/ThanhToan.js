import React, { Component } from 'react'
import './ThanhToan.css';
// import visa from '../Images/visa.svg'
// import mastercard from '../Images/mastercard.svg'
// import paypal from '../Images/paypal.svg'
import { FaMoneyBill } from 'react-icons/fa'

export class ThanhToan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       cash: false,
       paypal: false,
       credit: false,
    }
  }
  componentDidMount() {
    const pttt = JSON.parse(localStorage.getItem('PTTT'))
    if(pttt === "cash"){
      this.setState({
        cash : true
      })
    }
    if(pttt === "paypal"){
      this.setState({
        paypal : true
      })
    }
    if(pttt === "credit"){
      this.setState({
        credit : true
      })
    }

  }

    render() {
        return (
          <div class="section__payment">
            <h2 class="section__title">THANH TOÁN</h2>
            <div class="payment__box credit">
              <div>
                <input type="radio" checked = {this.state.credit} name="payment" id="credit" value="credit" onClick={this.addLocal} />
                <label for="credit">Thẻ tín dụng</label>
              </div>
              <div>
                <img src='./Images/visa.svg' class="visa" />
                <img src='./Images/mastercard.svg' />
              </div>
            </div>
            <div class="payment__box paypal">
              <div>
                <input type="radio" checked = {this.state.paypal} name="payment" id="paypal" value="paypal" onClick={this.addLocal} />
                <label for="paypal">Ví Paypal</label>
              </div>
              <img src='./Images/paypal.svg' />
            </div>
            <div class="payment__box cash">
              <div>
                <input type="radio" checked = {this.state.cash} name="payment" id="cash" value="cash" onClick={this.addLocal} />
                <label for="cash">Tiền mặt</label>
              </div>
             <FaMoneyBill className="fa-money-bill" />
            </div>
          </div>
        )
    }
    addLocal =(e)=>{
      
      localStorage.setItem("PTTT",JSON.stringify(e.target.id))
      window.location="http://localhost:3000/payment"
      //console.log(e.target.id)
    }
  }




export default ThanhToan;
