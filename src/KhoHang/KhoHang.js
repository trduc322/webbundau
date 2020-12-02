import React from "react"
import Header from "../HomeAdmin/Header/HeaderAdmin.js"
import Footer from "../HomeAdmin/Footer/Footer.js"
import "./KhoHang.css"
import NhapKho from "./NhapKho/NhapKho.js"
import XuatKho from "./XuatKho/XuatKho.js"

class KhoHang extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div class="container">
                    <ListHang/>
                    <div class="flex">
                        <NhapKho/>
                        <XuatKho/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

function ListHang(){
    return(
        <div>
            <h1 className ="title_khohang">Kho hàng</h1>
                <table class="tb_khohang">
                        <tr>
                            <th class="th_admin1">Mã sản phẩm</th>
                            <th class="th_admin1">Tên</th>
                            <th class="th_admin1">Số lượng</th>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>99</td>
                        </tr>
                    </table>
        </div>
    )
}

export default KhoHang;