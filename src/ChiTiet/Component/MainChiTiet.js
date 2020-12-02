import React from "react"
import './MainChiTiet.css';
import { FaPlus, FaMinus, FaClock, FaCarrot, FaSeedling} from 'react-icons/fa';



class MainChiTiet extends React.Component{
  constructor(props){
    super(props)
    this.state = {soluong: 1}
  }

  Cong=()=>{
    const sl = this.state.soluong+1
    this.setState({soluong: sl})
  }
  
  Tru=()=>{
    if(this.state.soluong > 1){
    var sl = this.state.soluong-1
    }
    else{
      var sl = this.state.soluong
    }
    this.setState({soluong: sl})
  }

    render(){

        return(
            <section>
        <div class="container">
        <h1 class="section__title_details">Chi tiết sản phẩm</h1>
          <div class="item">
            <div class="item__img">
              <img src={this.props.hinh} alt="oc hut"/>
              <span class="shop__coupon">FREESHIP</span>
              <span class="shop__discount">Giảm giá 10%</span>
            </div>
            <div class="item__detail">
              <h2 class="item__detail--title">Ốc hút</h2>
              
              <p class="item__detail--desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt dolor illo assumenda, sed repellat non?
              </p>
              <span class="price">45.000 VNĐ</span>
              <span class="price--old">50.000 VNĐ</span>
              <div class="item__body">
                <div class="quantity">
                  <FaPlus onClick={this.Cong} class="fas fa-plus cong"></FaPlus>
                  <span>{this.state.soluong}</span>
                  <FaMinus onClick = {this.Tru} class="fas fa-minus tru"></FaMinus>
                </div>
                <button type="submit" class="btn btn--rounded btn--atc">
                  Đặt ngay
                </button>
              </div>
              <ul class="feature__list_ct">
                <li class="feature__item_ct">
                  <FaClock class="far fa-clock"></FaClock><span class="time">Thời gian chuẩn bị dự kiến: <strong>10 phút</strong></span>
                </li>
                <li class="feature__item_ct">
                  <FaCarrot class="fas fa-carrot"></FaCarrot><span class="ingredient">Hương vị thơm ngon, giá cả hợp lý, ...
                  </span>
                </li>
                <li class="feature__item_ct">
                  <FaSeedling class="fas fa-seedling"></FaSeedling><span class="guaranteed">Sản phẩm sạch tự nhiên</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        )
    }
}


export default MainChiTiet;