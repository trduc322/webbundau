import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import './DangNhap.css';
import { FaFacebookF} from 'react-icons/fa';
import { FaGoogle} from 'react-icons/fa';

class DangNhap extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         userStatus : "NOT LOGGED IN"
    //     };
    //     this.setStatus = this.setStatus.bind(this);
    // }

    // setStatus(userName, password){
    //     const newUsers = users;
    //     newUsers.map(user => {
    //         if (user.username == username && user.password === password) {
    //             this.setState({
    //                 userStatus: "LOGGED IN"
    //             })
    //         }
    //     });
    // }
    
    render(){
        return(
            <div>
            <Header/>
                <div className="Log_in">
                    <form className="form_log_in">
                        <div className = "input_username">
                            <label for ="userName">Tên đăng nhập</label>
                            <input type="text" placeholder="abc@gmail.com" name="uname" required/>
                        </div>
                        <div className="input_pass">
                            <label for="psw"><b>Mật khẩu</b></label>
                            <input type="password" placeholder="Nhập mật khẩu" name="psw" required/>
                        </div>
                        <div className="sign_in_form"> 
                            <span className="sign_in_label">Chưa có tài khoản?</span>
                            <a className="text_sign_in" href="https://localhost:3000/signup">Đăng kí</a>
                            <br>
                            </br>
                            <a className="text_sign_in1" href="https://localhost:3000/QuenMatKhau">Quên mật khẩu?</a>
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