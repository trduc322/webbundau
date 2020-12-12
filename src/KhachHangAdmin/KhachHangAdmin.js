import React from "react"
import Header from "../HomeAdmin/Header/HeaderAdmin.js"
import Footer from "../HomeAdmin/Footer/Footer.js"
import "./KhachHangAdmin.css"
import callApi from "./../apiCaller.js"




class KhachHangAdmin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            users : [],
        }
    }
    componentDidMount() {
        callApi("user", "GET", null).then((res) => {
            this.setState({
                users: res.data,
            }); 
        })
    }

    showKH(users){
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
            return (
                <KhachHang key={index} user={user}/>
            );
            });
        }
        return result;
    }
    

    render(){
        return(
            <div>
                <Header/>
                <div class="container">
                    <ListKhachHang show={this.showKH}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

function ListKhachHang(props){
    return(
        <div>
            <h1 className ="title_kh">Khách hàng</h1>
                <table class="tb_khachhang">
                        <tr>
                            <th class="th_admin1">Tên đăng nhập</th>
                            <th class="th_admin1">Tên khách hàng</th>
                            <th class="th_admin1">Số điện thoại</th>
                            <th></th>
                            {props.show}
                        </tr>
                        
                    </table>
        </div>
    )
}

function KhachHang(props){
    return(
        <tr>
            <td>{props.user.iD_User}</td>
            <td>{props.user.name}</td>
            <td>{props.user.sdt}</td>
        </tr> 
    )
}

export default KhachHangAdmin;