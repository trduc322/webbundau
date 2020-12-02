import React from "react"
import MatHang from "../MatHang/MatHang.js"
import {FaPlusCircle} from 'react-icons/fa'
import './NhapKho.css';
class NhapKho extends React.Component{
  state = {
    mathangs:[]
  }
  addMatHang = () =>{
    this.setState({
      mathangs :[...this.state.mathangs, <MatHang/>]
    })
  }
    
    render(){
        return(
            <div className="NhapKho">
              <h1 className ="title_nhapkho">Nhập kho</h1>
              <MatHang/>
              {this.state.mathangs} 
              <div className="nhapKho_chucnang">
                <button class="plus_btn" onClick={this.addMatHang}>+</button>
                <button className="button_submit_kho" type="submit">Xác nhận</button>   
              </div>          
            </div>

        )
    }
}
export default NhapKho