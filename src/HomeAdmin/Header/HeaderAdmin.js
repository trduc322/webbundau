import React from "react"

import './HeaderAdmin.css';
import { FaUser } from 'react-icons/fa';
class HeaderAdmin extends React.Component{
    render(){
        return(
            <div className = "header">
              <div class = "container">
                <HeaderTopAdmin/>
              </div> 
                <HeaderBotAdmin/>
                
            </div>
            
        )
    }
    
}
function HeaderTopAdmin(){
    return(      
        <div className="header__top">
            <a href="/admin" className="header__logo">
              <span className="logo">Bún Đậu Tràng An</span>
            </a>
            <h1 id = "header_admin_text">QUẢN LÝ</h1>
            <div className="header__user">
              <div href="/admin" className="admin-icon">
                <FaUser className="far fa-user admin"></FaUser>
                <span className = "Admin_name">Admin</span>
              </div>
            </div>
          </div>

    )
}
function HeaderBotAdmin(){
    return(
        <div class="menu">
          <div className="container">
            <nav className="header__menu">
              <ul className="menu__list">
                <li className="menu__item">
                    <a href="/admin" className="menu__link btn">Đơn hàng</a>
                </li>
                <li className="menu__item">
                    <a href="/kho" className="menu__link btn">Kho hàng</a>
                </li>
                <li className="menu__item">
                    <a href="/sanpham" className="menu__link btn">Sản phẩm</a>
                </li>
                <li className="menu_item">
                    <a href="/khachhang" className="menu__link btn">Khách hàng</a>
                </li>
                <li className="menu_item">
                    <a href="/login" onClick={()=>{localStorage.clear()}} className="menu__link btn">Đăng xuất</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    )
}



export default HeaderAdmin;