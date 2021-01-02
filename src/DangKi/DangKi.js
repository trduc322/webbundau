import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import './DangKi.css';
import { FaFacebookF} from 'react-icons/fa';
import { FaGoogle} from 'react-icons/fa';
import {useState} from 'react';
import axios from "axios"
import Callapi from '../apiCaller.js'


class DangKi extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userName: "",
            password: "",
            password_comfirmation: "",
            email: ""
            }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    

    
    handleSubmit(e){
        var data = {
            username : this.state.userName,
            password : this.state.password,
            email: this.state.email
        }
        var status = ""
        Callapi("user","POST", data).then((res)=>{
            status = res.data
            console.log(status)
            if(status === ""){
                alert("Đăng kí thất bại");
            }
            if(status === false){
                alert("Tên đăng nhập đã được sử dụng");
            }
            if(status === true){
            alert("Đăng kí thành công");
            window.location="http://localhost:3000/login";
            }
        }) 
        
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
                <div className="Sign_up">
                    <form className="form_sign_up" onSubmit ={this.handleSubmit} >
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
                            <input type="text" placeholder="Nhập tên đăng nhập..." name="userName" value ={this.state.userName} onChange = {this.handleChange} required/>
                        </div>
                        <div className="sign_up_input_pass">
                            <label for="psw"><b>Mật khẩu</b></label>
                            <input type="password" placeholder="Mật khẩu..." name="password" value ={this.state.password} onChange = {this.handleChange} required/>
                        </div>
                        <div className="sign_up_input_pass">
                            <label for="psw"><b>Xác nhân lại mật khẩu</b></label>
                            <input type="password" placeholder="Nhập lại mật khẩu..." name="password_comfirmation" value ={this.state.password_comfirmation} onChange = {this.handleChange} required/>
                        </div>
                        <div className = "sign_up_input_username">
                            <label for ="userName">Email</label>
                            <input type="text" placeholder="Vd: abc@gmail.com..." name="email" value = {this.state.email} onChange = {this.handleChange} required/>
                        </div>
                        <button className = "submit_button_si" type="submit" href="/login">ĐĂNG KÍ</button>
                    </form>
                    
                </div>
            <Footer/>
            </div>
        )
    }
}

export default DangKi;


