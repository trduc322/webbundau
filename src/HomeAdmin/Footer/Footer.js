import React from "react";

import '../Footer/Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

class Footer extends React.Component{
    
    render(){
        return(
        <div class = "footer"> 
            <FooterTop/>
            <FooterBot/>
        </div>
        )
    }
}
function FooterTop(){
    return(
        <div class="footer__top">
          <div class="container">
            <div class="line-text">
              <span class="logo">Bún đậu tràng an</span>
            </div>
            <ul class="social__list">
              <a href="https://facebook.com">
                <li class="social__item"><FaFacebookF class="fab fa-facebook-f"></FaFacebookF></li>
              </a>
              <a href="https://instagram.com">
                <li class="social__item">
                  <FaInstagram class="fab fa-instagram"></FaInstagram>
                </li>
              </a>
            </ul>
            <div class="footer__body">
              <ul class="footer__list">
                <li class="footer__item">
                  <h4 class="footer__item--title">Địa chỉ</h4>
                  <p class="footer__item--desc">140 Khúc Hạo, Q. Sơn Trà, Đà Nẵng</p>
                </li>
                <li class="footer__item">
                  <h4 class="footer__item--title">Đặt hàng</h4>
                  <p class="footer__item--desc">
                    Đặt hàng nhanh qua điện thoại
                  </p>
                  <p class="order__number">0905 69 69 69</p>
                </li>
                <li class="footer__item">
                  <h4 class="footer__item--title">Giờ hoạt động</h4>
                  <p class="footer__item--desc">
                    Thứ hai - Chủ nhật: <span>9:00 - 22:00</span>
                  </p>
                </li>
                <li class="footer__item">
                  <h4 class="footer__item--title">Nhận mã khuyến mãi</h4>
                  <p class="footer__item--desc">
                    Theo dõi chúng tôi để nhận được mã khuyến mãi qua Email
                  </p>
                  <form class="subscribe">
                    <div class="form-group">
                      <input type="email" id="email" class="email-form" placeholder="abc@gmail.com"/>
                      <button type="submit" class="btn btn--submit">
                        Theo dõi
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          </div>
        
    )
}

function FooterBot(){
    return(
        <div class="footer__bottom">
          <div class="container">
            <div class="copyright">
              <span>Copyright © 2020. Bún Đậu Tràng An</span>
              <img src="/Images/payment.png" alt="thanh toan"></img>
            </div>
          </div>
        </div>
    )
}
export default Footer;





