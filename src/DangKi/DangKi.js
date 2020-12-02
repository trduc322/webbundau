import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import './DangKi.css';
import { FaFacebookF} from 'react-icons/fa';
import { FaGoogle} from 'react-icons/fa';


class DangKi extends React.Component{
    render()  {
        return(
            <div>
            <Header/>
                <div className="Sign_up">
                    <form className="form_sign_up">
                        <div className="Sign_up_with">
                        <div className="sign_up_fb">
                               
                            <a href="https://facebook.com" class="facebooksi">
                            <FaFacebookF className ="fb_icon_si"/> Login with Facebook
                            </a>
                        </div>
                        <br>
                        </br>
                        <div className="sign_up_gg">
                                
                        <a href="https://accounts.google.com/ServiceLogin/identifier?elo=1&flowName=GlifWebSignIn&flowEntry=AddSession" class="googlesi">
                            <FaGoogle className = "gg_icon_si"/>   Login with Google
                        </a>
                        </div>
                        </div>
                        <div className = "sign_up_input_username">
                            <label for ="userName">Tên đăng nhập</label>
                            <input type="text" placeholder="Nhập tên đăng nhập..." name="uname" required/>
                        </div>
                        <div className="sign_up_input_pass">
                            <label for="psw"><b>Mật khẩu</b></label>
                            <input type="password" placeholder="Mật khẩu..." name="psw" required/>
                        </div>
                        <div className="sign_up_input_pass">
                            <label for="psw"><b>Xác nhân lại mật khẩu</b></label>
                            <input type="password" placeholder="Nhập lại mật khẩu..." name="psw" required/>
                        </div>
                        <div className = "sign_up_input_username">
                            <label for ="userName">Tên đăng nhập</label>
                            <input type="text" placeholder="Vd: abc@gmail.com..." name="email" required/>
                        </div>
                        <button className = "submit_button_si" type="submit" href="Homepage">ĐĂNG KÍ</button>
                    </form>
                    
                </div>
            <Footer/>
            </div>
        )
    }
}

export default DangKi;