import React from "react"
import {FaEdit} from 'react-icons/fa'
import "./SanPhamAdmin.css"

class Item extends React.Component{

      render()  {
        var { product } = this.props;
          return(
        <tr>
            <td>SP{product.iD_ThucPham}</td>
            <td>{product.name}</td>
            <td>{product.giaGoc}.000 VNĐ</td>
            <td><FaEdit class="fa_edit" onClick={ () =>{
                
            }}>Chi tiết</FaEdit></td>
        </tr>
          )
        
      }

  }
  
  export default Item