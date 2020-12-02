import React, { Component } from 'react';
import './MainInfo.css';
import { FaUserCircle } from 'react-icons/fa';
import $ from 'jquery'
export class MainInfo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "Nguyen Van Nigga",
            phone: "0969696969", 
            email: "nigga@gmail.com",
            address: "69, Ngo Quyen"
        }
        
    }
    setName = (o) => {
        this.setState({
        name: o.target.value
        })
    }

    setPhone = (o) =>{
        this.setState({
            phone: o.target.value
        })
    }
    
    setEmail = (o) => {
        this.setState({
            email: o.target.value
        })
    }

    setDiaChi = (o) => {
        this.setState({
            address: o.target.value
        })
    }
    
        
    componentDidMount() {
        
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
                <UserInformation username="NGUYỄN NIGGA 1 ĂN 3" point="69"/>
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
                            setname ={this.setName}
                            setphone={this.setPhone}
                            setemail={this.setEmail}
                        />
                        <OrderHistory/>
                        <UserAddress diachi={this.state.address} setdiachi = {this.setDiaChi}/>
                        <UserPassword/>
                    </div>
                </div>
            </div>
        )
    }
}

function UserInfoForm(props){
    return(
        <form id="user--info" className="useredit active">
            <div className="form--group">
                <label htmlFor="info--name">
                    Họ và tên
                </label>
                <input type="text" id="info--name" value= {props.tenkh} onChange ={props.setname}/>
            </div>
            <div className="form--group">
                <label htmlFor="info--phone">
                    Số điện thoại
                </label>
                <input type="number" id="info--phone" value={props.sdt} onChange={props.setphone} />
            </div>
            <div className="form--group">
                <label htmlFor="info--email">Email</label>
                <input type="email" id="info--email" value={props.email} onChange ={props.setemail}/>
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
                            Tên tài khoản
                        </span>
                        <span className="username">
                            {props.username}
                        </span>
                        <span className="point">
                            COINS: {props.point}
                        </span>
                    </div>
                </div>
    );
}

function OrderHistory(props){ 
    return(
        <div id="order--history" className="useredit">
            <table>
                <tr>
                    <th class="th1">Tên sản phẩm</th>
                    <th>Ngày giao dịch</th>
                </tr>
                <OrderHistoryItems tendh="Đơn hàng 1" tgiandat="6:09 6/9/2069"/>
                <OrderHistoryItems tendh="Đơn hàng 2" tgiandat="6:09 6/9/2069"/>
                <OrderHistoryItems tendh="Đơn hàng 3" tgiandat="6:09 6/9/2069"/>
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

function UserPassword(){
    return(
        <form id="user--password" className="useredit">
            <div className="form--group">
                <label htmlFor="password--old">Mật khẩu cũ</label>
                <input type="password" id="password--old" required/>
            </div>
        <div className="form--group">
                <label htmlFor="password--new">Mật khẩu mới</label>
                <input type="password" id="password--new" required/>
        </div>
            <div className="form--group">
                <label htmlFor="password--confirm">Xác nhận mật khẩu mới</label>
                <input type="password" id="password--confirm" required/>
            </div>
            <button type="submit" className="btn-submit">Cập nhật</button>
        </form>
    );
}

function UserAddress(props){
    return(
        <form id="user--address" className="useredit">
            <div className="form--group">
                <label htmlFor="info--address" >Địa chỉ</label>
                <input type="text" id="info--address" value={props.diachi} onChange = {props.setdiachi}/>
            </div>
            <button type="submit" className="btn-submit">Cập nhật</button>
        </form>
    );
}

export default MainInfo;
