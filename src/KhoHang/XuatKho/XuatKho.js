import React from "react"
import {FaPlusCircle} from 'react-icons/fa'
import './XuatKho.css'
import {Combobox} from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';
import callApi from "./../../apiCaller.js"


class XuatKho extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      kho:[],
      id : "",
      quantity : "" 
    }
  }
  handleSubmit = (e) => {
    var data = {
      iD_ThucPham : parseInt(this.state.id),
      soLuong: parseInt(this.state.quantity)
    }
    var idTP = {
      iD_ThucPham : parseInt(this.state.id)
    }
    console.log(idTP)
    callApi("khohang/check", "POST", idTP).then((res) => {
        if(res.data){
              callApi("khohang/checksoluong", "POST", data).then((qtt) =>{
                  if(qtt.data){
                    callApi("khohang","PUT",data)
                  }
                  else{
                    alert("KHÔNG ĐỦ SỐ LƯỢNG TRONG KHO")
                  }
              })
        }
        
            else{
              alert("SẢN PHẨM KHÔNG CÓ TRONG KHO HÀNG")
              }
          }
    );
        e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
  })
}
  handleChangeqtt = (e) => {
    this.setState({
      [e.target.name]: -e.target.value
  })
  e.preventDefault();
  console.log(this.state.quantity)
  }
  
    
    render(){
        return(
            <div className="XuatKho">
              <h1 className ="title_xuatkho">Xuất kho</h1>
              <MatHang handleChange = {this.handleChange} handleChangeqtt = {this.handleChangeqtt}/>
              {this.state.mathangs} 
              <div className="nhapKho_chucnang">
                <button className="button_submit_kho" type="submit" onClick={this.handleSubmit}>Xác nhận</button>   
              </div>             
            </div>
        )
    }
}


function MatHang(props){
        return(
        <div className = "mat_hang">
            <form className = "form_mat_hang">
                <div className="form-group__mathang">
                    <label for="ma_mat_hang">Mã sản phẩm</label>
                    <input id ="idsp" type ="text" name = "id" onChange={props.handleChange}/>
                </div>
                <div className="form-group__mathang">
                    <label for="so_luong"><b>Số lượng</b></label>
                    <input id="so_luong" type="number" name="quantity" onChange={props.handleChangeqtt} required/>
                </div>
            </form>
        </div>
        )
    
    
    
}

export default XuatKho