import React from "react"
import './GoiY.css';
import Items from '../../Homepage/Components/Item/Item.js'
import ProductsContainer from '../../containers/ProductsContainer.js'

class MainChiTiet extends React.Component{
    
    render(){
        return(
            <div class="container">
        <h2 class="section__title_details">Gợi ý sản phẩm</h2>
        <div class="shop__body">
          <ProductsContainer category="all"/>
          {/* <ul class="food__list">
            <Items hinh="/Images/bundau.jpg"name= " Bún đậu" gia = "10.000.000"/>
            <Items hinh="/Images/ochut.jpg" name = "Ốc hút" gia = "169.000"/>
            <Items hinh="/Images/nemchuaran.jpg" name = "Nem chua rán" gia = "100.000"/>
            <Items hinh="/Images/ochut.jpg" name = "Ốc hút" gia = "169.000"/>
            <Items hinh="/Images/nemchuaran.jpg" name = "Nem chua rán" gia = "100.000"/>
          </ul> */}
        </div>
      </div>
        )
    }
}


export default MainChiTiet;