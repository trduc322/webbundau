import React from "react"
import Header from "./Header/HeaderAdmin.js"
import Footer from "./Footer/Footer.js"
import "./HomeAdmin.css"
import $ from 'jquery';
import DayPicker from "./Calendar/DayPicker.js"

class HomeAdmin extends React.Component{
    
    render(){
        return(
            <div>
                <Header/>
                <div className="container">
                <DonHangAdmin/>
                <ChiTietDonHangAdmin/>
                <TongDoanhThu/>
                </div>
                <Footer/>
            </div>
        )
    }
}
function DonHangAdmin(props){
   
    return(
        <div>
            <div class="DonHangAdmin">
                <h1 className ="Donhang_title">Đơn Hàng</h1>
                <form className ="form_donhang_admin">
                    <DayPicker/>
                    <table class="tb_donhang">
                        <tr>
                            <th class="th_admin1">Tên đơn hàng</th>
                            <th class="th_admin1">Tên khách hàng</th>
                            <th class="th_admin1">Tổng tiền</th>
                        </tr>
                        <tr>
                            <td>DH01</td>
                            <td>User01</td>
                            <td>100 000 vnd</td>
                        </tr>
                        <tr>
                            <td>DH01</td>
                            <td>User01</td>
                            <td>100 000 vnd</td>
                        </tr>
                        <tr>
                            <td>DH01</td>
                            <td>User01</td>
                            <td>100 000 vnd</td>
                        </tr>
                        <tr>
                            <td>DH01</td>
                            <td>User01</td>
                            <td>100 000 vnd</td>
                        </tr>
                    </table>
                </form>
            </div>  
            
        </div>
        
    )
}

function ChiTietDonHangAdmin(){
    return(
    <div class="Chitiet_dh">
                <h1 className ="Donhang_title">Chi tiết đơn hàng</h1>
                <h2 className ="Ten_dh">Đơn hàng DH01</h2>
                <table class="tb_chitietdonhang">
                        <tr>
                            <th class="th_admin1">Tên sản phẩm</th>
                            <th class="th_admin1">Số lượng</th>
                            <th class="th_admin1">Đơn giá</th>
                            <th class="th_admin1">Thành tiền</th>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>02</td>
                            <td>100 000 vnd</td>
                            <td>200 000 vnd</td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>02</td>
                            <td>100 000 vnd</td>
                            <td>200 000 vnd</td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>02</td>
                            <td>100 000 vnd</td>
                            <td>200 000 vnd</td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>02</td>
                            <td>100 000 vnd</td>
                            <td>200 000 vnd</td>
                        </tr>
                    </table>
                <h1 class="TongTien">Tổng tiền: 500 000 vnđ</h1>
            </div>
    )
}

function TongDoanhThu(){
    return(
        <div>
    <h1 className ="Donhang_title">Tổng doanh thu</h1>
    <table class="tb_tongdth">
                        <tr>
                            <th class="th_admin1">Thời gian</th>
                            <th class="th_admin1">Tổng Doanh Thu</th>
                        </tr>
                        <tr>
                            <td>Ngày 06/9/2020</td>
                            <td>2 000 000 vnd</td>
                        </tr>
                        <tr>
                            <td>Tháng 06/2020</td>
                            <td>120 000 000 vnd</td>
                        </tr>
                        
                        
                    </table>
        </div>
    )
}

export default HomeAdmin;