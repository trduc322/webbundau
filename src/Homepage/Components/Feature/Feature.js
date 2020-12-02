import React from "react";
import './Feature.css';


class Feature extends React.Component{
    
    render(){
        return(
            <section class="feature">
            <div class="container">
              <ul class="feature__list">
                <li class="feature__item">
                  <img src = "/Images/certificate.png" alt="Chung nhan ve sinh an toan thuc pham"/>
                  <h3 class="title">Vệ sinh an toàn thực phẩm</h3>
                  <p class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit fuga eligendi eius minus enim.
                  </p>
                </li>
                <li class="feature__item">
                  <img src = "/Images/cooking.png" alt="Thoi gian nhanh"/>
                  <h3 class="title">Thời gian ngắn</h3>
                  <div class="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt cupiditate neque accusamus laudantium numquam.
                  </div>
                </li>
                <li class="feature__item">
                  <img src = "/Images/delivery.png" alt="giao hang nhanh"/>
                  <h3 class="title">Giao hàng nhanh</h3>
                  <p class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                    modi magnam vel quis quas.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        )
    }
}


export default Feature;