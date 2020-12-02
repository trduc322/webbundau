import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import './QuenMatKhau.css';

class QuenMatKhau extends React.Component{
    
    render(){
        return(
            <div>
            <Header/>
                <div className = "forget_psw">
                    <form className = "forget_form">
                            <div className = "forget_user_input">
                                <label for ="userName">Tên đăng nhập</label>
                                <input type="text" placeholder="Nhập tên tài khoản bạn đã đăng kí..." name="uname" required/>
                            </div>
                            <div className = "forget_send">
                                <label className ="text-send">Mật khẩu mới sẽ được gửi về tài khoản email mà bạn đã đăng kí</label>
                                <button className = "forget_send_button" type="submit">GỬI</button>
                            </div>
                    </form>
                </div>
            <Footer/>
            </div>
        )
    }
}


export default QuenMatKhau;