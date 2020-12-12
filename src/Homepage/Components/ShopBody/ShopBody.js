import React from "react"
import './ShopBody.css';

//import { map } from "jquery";



// var sp1 = new SanPham(1, "abc", "20.000", "/Images/bundau.jpg")
// var sp2 = new SanPham(2, "abc", "20.000", "/Images/ochut.jpg")
// var sp3 = new SanPham(3, "abc", "20.000", "/Images/nemchuaran.jpg" )
// var sp4 = new SanPham(4, "abc", "20.000", "/Images/trasua.jpeg")

// var listsanpham = [sp1, sp2, sp3, sp4] 

class ShopBody extends React.Component{
  
// constructor(props){D
//   super(props);
//   var sp1 = new SanPham(1, "abc", "20.000", "/Images/bundau.jpg")
//   var sp2 = new SanPham(2, "abc", "20.000", "/Images/ochut.jpg")
//   var sp3 = new SanPham(3, "abc", "20.000", "/Images/nemchuaran.jpg" )
//   this.listsanpham=[sp1, sp2, sp3]
  
// }

// cart = [];
// total = 0;


// getItem=(id)=> {
//   console.log(id)
// }

    render(){
      // const list = this.listsanpham.map((item, index)=>{
      //   return (
        
      //   <Items get = {this.getItem} key={index}  hinh = {item.image} name = {item.name} gia = {item.price} id={item.id}/>
      //   )
      // })
        return(

            <div class="shop__body">
            <ul class="food__list">
              { this.props.children }
              {/* {list} */}
            </ul>
          </div>
        
        )
        
    }
    
   
}


export default ShopBody;