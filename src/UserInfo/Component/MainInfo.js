import React, { Component } from 'react';
import './MainInfo.css';
import { FaUserCircle } from 'react-icons/fa';
import $ from 'jquery';
import Callapi from '../../apiCaller.js';

export class MainInfo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id : "",
            name: "",
            username: "",
            point: "",
            phone: "",
            email: "",
            address: "",
            password: "",
            oldPass: "",
            newPass: "",
            passConfirm: "",
            listdh: []
        }

        
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
        
        e.preventDefault();
    }

    handleSubmit = (e) =>{
        var data = {
            name : this.state.name,
            email: this.state.email,
            diaChi: this.state.address,
            sdt: this.state.phone,
            coin: this.state.point,
            password: this.state.password, 
            username: this.state.username
        }
        Callapi(`user/${this.state.id}`,"PUT", data)
        
        
        e.preventDefault();
        
    }
    
    ChangePass = (e) =>{
        

        if((this.state.oldPass === this.state.password)&&(this.state.newPass === this.state.passConfirm)){
            var data = {
                name : this.state.name,
                email: this.state.email,
                diaChi: this.state.address,
                sdt: this.state.phone,
                coin: this.state.point,
                password: this.state.newPass, 
                username: this.state.username
            }
            Callapi(`user/${this.state.id}`,"PUT", data)
            alert("Đổi mật khẩu thành công!")
        }
        else alert("Vui lòng nhập đúng thông tin")
        
        
        //console.log(this.state.newPass)
        
        e.preventDefault();
        
    }
    
        
    componentDidMount() {
        var id = JSON.parse(localStorage.getItem('USER'));
        Callapi(`user/${id}`,"GET",null).then((res)=>{
            this.setState({
                id : res.data.iD_User,
                name: res.data.name,
                username: res.data.username,
                point: res.data.coin,
                phone: res.data.sdt,
                email: res.data.email,
                address: res.data.diaChi,
                password: res.data.password
            })
        });
        
        
        Callapi(`donhang/${id}`,"GET", null).then((res)=>{
            this.setState({
                listdh : res.data
            })
        })



        $('.btn1').click(function() {
            $('#user--info, #order--history, #user--address, #user--password').removeClass('active');
            $('.tabs__item').removeClass('active-btn'); 
            $('#user--info').addClass('active');
            $('.tab-1').addClass('active-btn');
          });
        $('.btn2').click(function() {
            $('#user--info, #order--history, #user--address, #user--password').removeClass('active');
            $('.tabs__item').removeClass('active-btn'); 
            $('#order--history').addClass('active'); 
            $('.tab-2').addClass('active-btn');
          });
        $('.btn3').click(function() {
            $('#user--info, #order--history, #user--address, #user--password').removeClass('active');
            $('.tabs__item').removeClass('active-btn'); 
            $('#user--address').addClass('active');
            $('.tab-3').addClass('active-btn');
          });
        $('.btn4').click(function() {  
            $('#user--info, #order--history, #user--address, #user--password').removeClass('active');        
            $('.tabs__item').removeClass('active-btn'); 
            $('#user--password').addClass('active');
            $('.tab-4').addClass('active-btn');
          });
        
    }
    
    
    render() {
        
        return (
            <div class="thongtin__container">
                <UserInformation username={this.state.username} point={this.state.point} name={this.state.name}/>
                <div className="user__edit">
                    <div className="edit__tabs">
                        <ul className="tabs__menu">
                            <a href="#" class="btn1"><li className="tabs__item tab-1">Thông tin tài khoản</li></a> 
                            <a href="#" class="btn2"><li className="tabs__item tab-2">Quản lý đơn hàng</li></a> 
                            <a href="#" class="btn3"><li className="tabs__item tab-3">Địa chỉ</li></a> 
                            <a href="#" class="btn4"><li className="tabs__item tab-4">Đổi mật khẩu</li></a> 
                        </ul>
                    </div>
                    <div className="edit__input">
                        <UserInfoForm tenkh={this.state.name} sdt={this.state.phone} email={this.state.email}  
                            handleChange = {this.handleChange}
                            handleSubmit = {this.handleSubmit}
                        />
                        <OrderHistory listdh = {this.state.listdh}/>
                        <UserAddress diachi={this.state.address} handleChange={this.handleChange} handleSubmit = {this.handleSubmit} />
                        <UserPassword handleSubmit = {this.ChangePass} handleChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

function UserInfoForm(props){
    return(
        <form id="user--info" className="useredit active" onSubmit={props.handleSubmit}>
            <div className="form--group">
                <label htmlFor="info--name">
                    Họ và tên
                </label>
                <input type="text" id="info--name" name = "name" value= {props.tenkh} onChange ={props.handleChange}/>
            </div>
            <div className="form--group">
                <label htmlFor="info--phone">
                    Số điện thoại
                </label>
                <input type="number" id="info--phone" name = "phone" value={props.sdt} onChange={props.handleChange} />
            </div>
            <div className="form--group">
                <label htmlFor="info--email">Email</label>
                <input type="email" id="info--email" name = "email" value={props.email} onChange ={props.handleChange}/>
            </div>
            <button type="submit" class="btn-submit" >Cập nhật</button>  
            
        </form>
    );
}

function UserInformation(props){
    return(  
                <div className="user__information">
                    <FaUserCircle className="user__img"/>
                    <div className="user">
                        <span className="user__title">
                            {props.username}
                        </span>
                        <span className="username">
                            {props.name}
                        </span>
                        <span className="point">
                            COINS: {props.point}
                        </span>
                    </div>
                </div>
    );
}

function OrderHistory(props){ 
    const showDH = (listdh) => {
        var result =null;
        
        result =listdh.map((donhang, index) => {
            var date = new Date(donhang.ngayThang)
            var time = date.getDate()+"/"+(date.getMonth()+1)+"/"+(date.getFullYear())
            return(
                <OrderHistoryItems key = {index} tendh={"Đơn hàng " + donhang.iD_DonHang} tgiandat={time}/>
            );
        })
        return result;
    }
    //console.log(props.listdh);
    return(
        <div id="order--history" className="useredit">
            <table>
                <tr>
                    <th class="th1">Tên sản phẩm</th>
                    <th>Ngày giao dịch</th>
                </tr>
                {showDH(props.listdh)}
                {/* <OrderHistoryItems tendh="Đơn hàng 1" tgiandat="6:09 6/9/2069"/>
                <OrderHistoryItems tendh="Đơn hàng 2" tgiandat="6:09 6/9/2069"/>
                <OrderHistoryItems tendh="Đơn hàng 3" tgiandat="6:09 6/9/2069"/> */}
            </table>
        </div>
    )
    
}

function OrderHistoryItems(props){ 
    return(
        <tr>
            <td class="td1">{props.tendh}</td>
            <td class="td2">{props.tgiandat}</td>
        </tr>
    )
}

function UserPassword(props){
    return(
        <form id="user--password" className="useredit" onSubmit = {props.handleSubmit
        
    }>
            <div className="form--group">
                <label htmlFor="password--old">Mật khẩu cũ</label>
                <input type="password" id="password--old" name="oldPass" required onChange = {props.handleChange}/>
            </div>
        <div className="form--group">
                <label htmlFor="password--new">Mật khẩu mới</label>
                <input type="password" id="password--new" name="newPass" required onChange = {props.handleChange}/>
        </div>
            <div className="form--group">
                <label htmlFor="password--confirm">Xác nhận mật khẩu mới</label>
                <input type="password" id="password--confirm" name="passConfirm" required onChange = {props.handleChange}/>
            </div>
            <button type="submit" className="btn-submit">Cập nhật</button>
        </form>
    );
}

function UserAddress(props){
    return(
        <form id="user--address" className="useredit" onSubmit={props.handleSubmit}>
            <div className="form--group">
                <label htmlFor="info--address" >Địa chỉ</label>
                <input type="text" id="info--address" name ="address" value={props.diachi} onChange = {props.handleChange}/>
            </div>
            <button type="submit"  className="btn-submit">Cập nhật</button>
        </form>
    );
}

export default MainInfo;
