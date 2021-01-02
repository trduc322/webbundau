import React from "react"
import './MainChiTiet.css';
import {FaClock, FaCarrot, FaSeedling} from 'react-icons/fa';
import Callapi from '../../apiCaller.js'


class MainChiTiet extends React.Component{
  constructor(props){
    
    super(props)
    this.state = {
      tenSp: "",
      moTa: "",
      giaGoc: "",
      img: ""
    }

  }

  // Cong=()=>{
  //   const sl = this.state.soluong+1
  //   this.setState({soluong: sl})
  // }
  
  // Tru=()=>{
  //   if(this.state.soluong > 1){
  //   var sl = this.state.soluong-1
  //   }
  //   else{
  //     var sl = this.state.soluong
  //   }
  //   this.setState({soluong: sl})
  // }

  componentDidMount() {
    var id = JSON.parse(localStorage.getItem('CHITIET'));
    var data ={
      iD_ThucPham: id
    }
    Callapi("food/chitiet","POST",data).then((res)=>{
      this.setState({
        tenSp: res.data.name,
        moTa: res.data.moTa,
        giaGoc: res.data.giaGoc,
        img: res.data.link_Anh
      })
    });
  }
    render(){

        return(
            <section>
        <div class="container">
        <h1 class="section__title_details">Chi tiết sản phẩm</h1>
          <div class="item">
            <div class="item__img">
              <img src={this.state.img} alt="oc hut"/>
              <span class="shop__coupon">FREESHIP</span>
              <span class="shop__discount">Giảm giá 10%</span>
            </div>
            <div class="item__detail">
        <h2 class="item__detail--title">{this.state.tenSp}</h2>
              
              <p class="item__detail--desc">
                {this.state.moTa}
              </p>
              <span class="price">{this.state.giaGoc}.000 VNĐ</span>
        {/* <span class="price--old">{this.state.giaGoc}</span> */}
              {/* <div class="item__body">
                <div class="quantity">
                  <FaPlus onClick={this.Cong} class="fas fa-plus cong"></FaPlus>
                  <span>{this.state.soluong}</span>
                  <FaMinus onClick = {this.Tru} class="fas fa-minus tru"></FaMinus>
                </div>
                <button type="submit" class="btn btn--rounded btn--atc">
                  Đặt ngay
                </button>
              </div> */}
              <ul class="feature__list_ct">
                
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