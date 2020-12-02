import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import { FaPlus, FaMinus, FaClock, FaCarrot, FaSeedling} from 'react-icons/fa';
import "./KhuyenMai.css"


class KhuyenMai extends React.Component{
    
    render(){
        return(
            <div >
                <Header/>
                <div class="km-container">
                    <h1 class="km-title">Chương trình giảm giá</h1>
                </div>
                <KhuyenMaiItem hinh="/Images/ochut.jpg"/>
                <KhuyenMaiItem hinh="/Images/ochut.jpg"/>
                <KhuyenMaiItem hinh="/Images/ochut.jpg"/>
                <KhuyenMaiItem hinh="/Images/ochut.jpg"/>
                <Footer/>
            </div>
        )
    }
}
function KhuyenMaiItem(props){
    return(
        <section class ="km-section">
        <div class="km-container">
          <div class="km-item">
            <div class="km-item__img">
              <img src={props.hinh} alt="oc hut"/>
              <span class="km-shop__coupon">FREESHIP</span>
              <span class="km-shop__discount">Giảm giá 10%</span>
            </div>
            <div class="km-item__detail">
              <h2 class="km-item__detail--title">Ốc hút</h2>
              
              <p class="km-item__detail--desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt dolor illo assumenda, sed repellat non?
              </p>
              <span class="km-price">45.000 VNĐ</span>
              <span class="km-price--old">50.000 VNĐ</span>
              <div class="km-item__body">
                <div class="km-quantity">
                  <FaPlus class="km-fas fa-plus cong"></FaPlus>
                  <span>1</span>
                  <FaMinus class="km-fas fa-minus tru"></FaMinus>
                </div>
                <button type="submit" class="km-btn btn--rounded btn--atc">
                  Đặt ngay
                </button>
              </div>
              <ul class="km-feature__list_ct">
                <li class="km-feature__item_ct">
                  <FaClock class="km-far fa-clock"></FaClock><span class="km-time">Thời gian chuẩn bị: <strong>10 phút</strong></span>
                </li>
                <li class="km-feature__item_ct">
                  <FaCarrot class="km-fas fa-carrot"></FaCarrot><span class="km-ingredient">Thành phần: ốc hút, sả, lá chanh, gừng, ớt,...
                  </span>
                </li>
                <li class="km-feature__item_ct">
                  <FaSeedling class="km-fas fa-seedling"></FaSeedling><span class="km-guaranteed">Sản phẩm sạch tự nhiên</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </section>
    )
}

export default KhuyenMai;