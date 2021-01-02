import React from "react";
import "./Item.css"



class Item extends React.Component{

  
  // sendID = () =>{
  //   this.props.get(this.props.id)
  // }

    // render()  {
    //     return(
    //         <li onClick = {this.sendID}  class="food__item">
    //             <div class="food__item-header">
    //               <span class="coupon">FREESHIP</span>
    //               <img src={this.props.hinh} alt="Bun dau"/>
                  
    //             </div>
    //             <div class="food__itemd-body">
    //               <h3 class="food__item--title">{this.props.name}</h3>
    //               <p class="food__item--desc">Lorem ipsum dolor sit amet.</p>
    //               <div class="food__item--price">
    //                 <span class="price">{this.props.gia} VNĐ</span>
    //                 <a  class="btn" href="/#" value={this.props.id}>Đặt ngay</a>
    //               </div>
    //             </div>
    //           </li>
    //     )
    // }
    render()  {
      var { product } = this.props;
        return(
            <li class="food__item"  onClick={()=>this.toChiTiet(product)} >
                <div class="food__item-header">
                  <span class="coupon">FREESHIP</span>
                  <img src={product.link_Anh} alt={product.name}/>
                  
                </div>
                <div class="food__itemd-body">
                  <h3 class="food__item--title">{product.name}</h3>
                  <p class="food__item--desc">{product.moTa}</p>
                  <div class="food__item--price">
                    <span class="price">{product.giaGoc}.000 VND</span>
                    <a  class="btn" onClick={ (e) =>{e.stopPropagation(); this.onAddToCart(product) }}>Đặt ngay</a>
                  </div>
                </div>
              </li>
        )
    }

    onAddToCart = (product) =>{
      this.props.onAddToCart(product);
    }
    toChiTiet = (product) =>{
      localStorage.setItem('CHITIET', JSON.stringify(product.iD_ThucPham));
      window.location= "http://localhost:3000/chitiet";
    }
}

export default Item