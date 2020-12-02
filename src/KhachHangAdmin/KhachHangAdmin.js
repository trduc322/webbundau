import React from "react"
import Header from "../HomeAdmin/Header/HeaderAdmin.js"
import Footer from "../HomeAdmin/Footer/Footer.js"
import "./KhachHangAdmin.css"



class KhachHangAdmin extends React.Component{
    
    render(){
        return(
            <div>
                <Header/>
                <div class="container">
                    <ListKhachHang/>
                </div>
                <Footer/>
            </div>
        )
    }
}

function ListKhachHang(){
    return(
        <div>
            <h1 className ="title_kh">Khách hàng</h1>
                <table class="tb_khachhang">
                        <tr>
                            <th class="th_admin1">Tên đăng nhập</th>
                            <th class="th_admin1">Tên khách hàng</th>
                            <th class="th_admin1">Số điện thoại</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Khachhang1</td>
                            <td>Nguyễn Văn A</td>
                            <td>0969696969</td>
                            <td><button>Chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>Khachhang1</td>
                            <td>Nguyễn Văn A</td>
                            <td>0969696969</td>
                            <td><button>Chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>Khachhang1</td>
                            <td>Nguyễn Văn A</td>
                            <td>0969696969</td>
                            <td><button>Chi tiết</button></td>
                        </tr>
                        <tr>
                            <td>Khachhang1</td>
                            <td>Nguyễn Văn A</td>
                            <td>0969696969</td>
                            <td><button>Chi tiết</button></td>
                        </tr>
                    </table>
        </div>
    )
}

export default KhachHangAdmin;