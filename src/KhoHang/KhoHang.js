import React from "react"
import Header from "../HomeAdmin/Header/HeaderAdmin.js"
import Footer from "../HomeAdmin/Footer/Footer.js"
import "./KhoHang.css"
import axios from 'axios'
import callApi from "../apiCaller.js"
import NhapKho from "./NhapKho/NhapKho.js"
import XuatKho from "./XuatKho/XuatKho.js"

class KhoHang extends React.Component{

    
    constructor(props) {
        super(props)
        this.state = {
            kho : [],
            id : "",
            name : "",
            quantity : "",
            file: null,
            role: false
        }

    }

    componentDidMount() {
        callApi("khohang", "GET", null).then((res) => {
            this.setState({
                kho: res.data,
            }); 
        });
        var id = JSON.parse(localStorage.getItem('USER'));
        if(id !==null){
            callApi(`user/${id}`,"GET",null).then((res)=>{
                this.setState({
                    role: res.data.role
                })
            });
            }
            if(id===null){
              this.setState({
                role: false
              })
            }
    }
    render(){
       
        return(
            ( this.state.role ?
            (<div>
                <Header/>
                <div class="container">
                    <ListHang show={this.showkhohang(this.state.kho)}/>
                    <div class="flex">
                        <NhapKho/>
                        <XuatKho/>
                    </div>
                </div>
                <Footer/>
            </div>
            ) : ( <p>ERROR 404: NOT FOUND</p>)
            )
        )
        
        
    }

    

    showkhohang(kho){
        var result = null;
        if (kho.length > 0) {
            result = kho.map((product, index) => {
            return (
                <Sanphamkho key={index} product={product}/>
            );
            });
        }
        return result;
    }
}




function ListHang(props){
    return(
        <div>
            <h1 className ="title_khohang">Kho hàng</h1>
                <table class="tb_khohang">
                        <tr>
                            <th class="th_admin1">Mã sản phẩm</th>
                            <th class="th_admin1">Tên</th>
                            <th class="th_admin1">Số lượng</th>
                        </tr>
                        {props.show}
                    </table>
        </div>
    )
}

function Sanphamkho(props){
    return(
        <tr>
            <td>{props.product.iD_ThucPham}</td>
            <td>{props.product.tenThucPham}</td>
            <td>{props.product.soLuong}</td>
        </tr>
    )
}

export default KhoHang;