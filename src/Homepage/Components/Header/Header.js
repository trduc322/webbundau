import React from "react"
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingBasket} from 'react-icons/fa';
class Header extends React.Component{

    render(){
      
        return(
            <div className = "header">
              <div class = "container">
                <HeaderTop/>
              </div> 
                <HeaderBot/>
                
            </div>
            
        )
    }
    
}
function HeaderTop(){
  var user = JSON.parse(localStorage.getItem('USER'));
  var link;
  
  if(user !== null){
    link = "/info";
  }if(user==null){
    link = "/login";
  }
    return(      
        <div className="header__top">
            <a href="./" className="header__logo">
              <span className="logo">Bún Đậu Tràng An</span>
            </a>
            <form id="search">
              <div className="form-group">
              <FaSearch className="fas fa-search"/>
                {/* <i className="fas fa-search"></i> */}
                <input type="text" placeholder="Search products..."/>
                <button type="submit" value="search">Search</button>
              </div>
            </form>
            <div className="header__contact">
              <FaPhone className="fas fa-phone"/>
              <div className="contact--inner">
                <span>Gọi đặt hàng</span>
                <span>0905 69 69 69</span>
              </div>
            </div>
            <div className="header__user">
              <div className="user-icon">
                <a href = {link} ><FaUser className="far fa-user"></FaUser></a>
              </div>
              {/* <div className="cart-icon">
                <FaShoppingBasket className="fas fa-shopping-basket"/>
              </div> */}
              {/* <span className="total">Total: 0 VND</span> */}
            </div>
          </div>

    )
}
function HeaderBot(){
  var user = JSON.parse(localStorage.getItem('USER'));
  var link;
  
  if(user !== null){
    return(
      <div class="menu">
        <div className="container">
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/menu" className="menu__link btn">Thực đơn</a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link btn">Giảm giá</a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link btn">Tuyển dụng</a>
              </li>   
              <li className="menu__item">
                <a href="./" onClick={()=>{localStorage.clear()}} className="menu__link btn">Đăng xuất</a>
              </li>       
            </ul>
          </nav>
        </div>
      </div>
  )
  }
  else{
    return(
      <div class="menu">
        <div className="container">
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/menu" className="menu__link btn">Thực đơn</a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link btn">Giảm giá</a>
              </li>
              <li className="menu__item">
                <a href="#"  className="menu__link btn">Tuyển dụng</a>
              </li>          
            </ul>
          </nav>
        </div>
      </div>
    )
  }
    
}

// function Slogan(){
//     return(
//         <div class="header__content">
//         <h1 class="header__content-title">BÚN ĐẬU CHO NHỮNG NGƯỜI TRONG HANG</h1>
//         <p class="header__content-description">
//           Thưởng thức những món ăn đặc sản và ăn vặt tại Bún Đậu Tràng An
//         </p>
//         <div class="header__content-cta">
//           <a href="#" class="btn btn--primary"> Đặt hàng ngay </a>
//         </div>
//       </div>
//     )
// }

export default Header;
