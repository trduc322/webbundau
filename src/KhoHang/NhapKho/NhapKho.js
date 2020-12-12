import React from "react"
import {FaPlusCircle} from 'react-icons/fa'
import './NhapKho.css';
import {Combobox} from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';
import callApi from "./../../apiCaller.js"

class NhapKho extends React.Component{
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
        if(res.data === true){
              callApi("khohang", "PUT", data)
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
  e.preventDefault();
  console.log(this.state.id)
  console.log(this.state.quantity)
  }
  

    render(){
        return(
            <div className="NhapKho">
              <h1 className ="title_nhapkho">Nhập kho</h1>
              <MatHang handleChange = {this.handleChange} state = {this.state} list={this.listid}/>
              <div className="nhapKho_chucnang">
                <button className="button_submit_kho" onClick={this.handleSubmit}>Xác nhận</button>   
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
                    <input id="so_luong" type="number" name="quantity" onChange={props.handleChange}/>
                </div>
            </form>
        </div>
        )
}

export default NhapKho;