import React, {Component} from 'react';
import {Combobox} from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';
import './MatHang.css'


let masp = ['sp01', 'sp02', 'sp03', 'sp04'];

class MatHang extends Component{

    render(){
        return(
        <div className = "mat_hang">
            <form className = "form_mat_hang">
                <div className="form-group__mathang">
                    <label for="ma_mat_hang">Mã sản phẩm</label>
                    <Combobox
                    className ="ma_san_pham_select"
                    data={masp}
                    defaultValue={'sp01'}
                    />
                </div>
                <div className="form-group__mathang">
                    <label for="so_luong"><b>Số lượng</b></label>
                    <input id="so_luong" type="number" name="so_luong" required/>
                </div>
            </form>
        </div>
        )
    }
    
    
}
export default MatHang