 import React, { Component } from 'react';
import './ThongTinKhachHang.css';

export class ThongTinKhachHang extends Component {
    render() {
        return (
            <div class="thongtin__container">
                <div className="user__information">
                    <img src="Images/user.png" alt="user image" className="user__img"/>
                    <div className="user">
                        <span className="user__title">
                            Tên tài khoản
                        </span>
                        <span className="username">

                        </span>
                    </div>
                </div>
                <div className="user__edit">

                </div>
            </div>
        )
    }
}

export default ThongTinKhachHang;
