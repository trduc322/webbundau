import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import './DangNhap.css';
import { FaFacebookF} from 'react-icons/fa';
import { FaGoogle} from 'react-icons/fa';
import Callapi from '../apiCaller.js'

class DangNhap extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            password: ''
            }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        var userdata = {
            username: this.state.userName,
            password: this.state.password
        }
        Callapi("user/check", "POST", userdata).then((res) => {
            if(res.data === "") 
            {
                alert("Sai tên đăng nhập hoặc mật khẩu")
            }
            else
            {
                localStorage.setItem('USER', JSON.stringify(res.data.iD_User));
                if(res.data.role===false){
                    window.location= "http://localhost:3000/";}
                if(res.data.role===true){
                    window.location= "http://localhost:3000/admin";
                }
            }
            //console.log(res.data);
            //var user = JSON.parse(localStorage.getItem('USER'));
            
          });
        e.preventDefault();
        
    }


    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        e.preventDefault();
    }
    

    
    render(){
        return(
            <div>
            <Header/>
                <div className="Log_in">
                    <form className="form_log_in" onSubmit={this.handleSubmit}>
                        <div className = "input_username">
                            <label for ="userName">Tên đăng nhập</label>
                            <input type="text" placeholder="Tên đăng nhập" name="userName" value ={this.state.userName} onChange = {this.handleChange} required/>
                        </div>
                        <div className="input_pass">
                            <label for="psw"><b>Mật khẩu</b></label>
                            <input type="password" placeholder="Nhập mật khẩu" name="password" value ={this.state.password} onChange = {this.handleChange} required/>
                        </div>
                        <div className="sign_in_form"> 
                            <span className="sign_in_label">Chưa có tài khoản?</span>
                            <a className="text_sign_in" href="/signup">Đăng kí</a>
                            <br>
                            </br>
                            <a className="text_sign_in1" href="/QuenMatKhau">Quên mật khẩu?</a>
                            <br>
                            </br>
                            <button className = "submit_button" type="submit">ĐĂNG NHẬP</button>
                        </div>
                        <div className="submit_with">
                            <div className="sign_in_fb">
                            
                                <a href="https://facebook.com" class="facebook">
                                <FaFacebookF className ="fb_icon"/> Login with Facebook
                                </a>
                            </div>
                            <br>
                            </br>
                            <div className="sign_in_gg">
                                
                                <a href="https://accounts.google.com/ServiceLogin/identifier?elo=1&flowName=GlifWebSignIn&flowEntry=AddSession" class="google">
                                <FaGoogle className = "gg_icon"/>   Login with Google
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            <Footer/>
            </div>
        )
    }
}


export default DangNhap;