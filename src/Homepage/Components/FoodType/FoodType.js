import React from "react";

import './FoodType.css';

class FoodType extends React.Component{
    
    render(){
        return(

        <div class="heading">
            <h2 class="heading__title">Món ăn nổi bật</h2>
            <ul class="category">
              <li class="category__item">
                <img src="/Images/drink.jpg" alt="Food"/>
                <span class="category__title">Đồ uống</span>
              </li>
              <li class="category__item">
                <img src="/Images/food.jpg" alt="Thuc an"/>
                <span class="category__title">Đồ ăn</span>
              </li>
            </ul>
        </div>
       
        )
    }
}


export default FoodType;