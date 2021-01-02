import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import './QuenMatKhau.css';
import Callapi from '../apiCaller.js'

class QuenMatKhau extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            unamereset: ""
        }
        
    }
    handleChange = (e) =>{
        this.setState({

            unamereset : e.target.value
            
        })
        e.preventDefault();
    }
     handleSubmit= (e)=>{
         
        var data = {
            username: this.state.unamereset
        }
        console.log(this.state.unamereset)
         Callapi("user/passforgot","POST",data).then((res)=>{
            if(res.data === true){
                alert("Mật khẩu của bạn đã được gửi về email");
            }
            else{
                alert("Username không tồn tại")
            }
         })
        e.preventDefault();
    }
    render(){
        return(
            <div>
            <Header/>
                <div className = "forget_psw">
                    <form className = "forget_form" onSubmit={this.handleSubmit}>
                            <div className = "forget_user_input">
                                <label for ="userName">Tên đăng nhập</label>
                                <input type="text" placeholder="Nhập username của bạn ..." name="unamereset" value={this.state.unamereset} onChange={this.handleChange} required/>
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