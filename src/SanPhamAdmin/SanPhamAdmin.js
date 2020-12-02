import React from "react"
import Header from "../HomeAdmin/Header/HeaderAdmin.js"
import Footer from "../HomeAdmin/Footer/Footer.js"
import "./SanPhamAdmin.css"
import {FaEdit} from 'react-icons/fa'


class SanPhamAdmin extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }
    
    uploadSingleFile(e) {
        if (e.target.files.length)
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
    render(){
        return(
            <div>
                <Header/>
                <div class="container">
                    <ListSanPham/>
                    <AddEdit click={this.uploadSingleFile} upload={this.upload} file={this.state.file}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

function ListSanPham(){
    return(
        <div>
            <h1 className ="title_sp">Khách hàng</h1>
                <table class="tb_sanpham">
                        <tr>
                            <th class="th_admin1">Mã sản phẩm</th>
                            <th class="th_admin1">Tên</th>
                            <th class="th_admin1">Giá</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>50 000 vnđ</td>
                            <td><FaEdit class="fa_edit">Chi tiết</FaEdit></td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>50 000 vnđ</td>
                            <td><FaEdit class="fa_edit">Chi tiết</FaEdit></td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>50 000 vnđ</td>
                            <td><FaEdit class="fa_edit">Chi tiết</FaEdit></td>
                        </tr>
                        <tr>
                            <td>SP01</td>
                            <td>Sản phẩm 1</td>
                            <td>50 000 vnđ</td>
                            <td><FaEdit class="fa_edit">Chi tiết</FaEdit></td>
                        </tr>
                    </table>
        </div>
    )
}

function AddEdit(props){
    let imgPreview;
    let imgPreviewSmall;
        if (props.file) {
            imgPreview = <img class="imgPr"src={props.file} alt='' />;
            imgPreviewSmall = <img class="imgPrSmall" src={props.file} alt='' />;
        }
    return(
        <div>
            <h1 className ="title_sp">Thêm/Sửa sản phẩm</h1>
            <div class="edit">
                <div class="edit_input_form">
                    <label>
                        Hình ảnh
                    </label>
                
                    <div className="form-group preview">
                        {imgPreview}
                        {imgPreviewSmall}
                    </div>


                        <input type="file" id="file-input" className="form-control" onChange={props.click} />
          
          
                </div>
                <div class="edit_input_form">
                <label>
                    Mã sản phẩm
                </label>

                <input type="text" id="info--masanpham" />
            </div>
            <div class="edit_input_form">
                <label>
                    Tên
                </label>
                <input type="text" id="info--name" />
            </div>
            <div class="edit_input_form">
                <label>
                    Giá
                </label>
                <input type="text" id="info--price" />
            </div>
            <div class="edit_input_form">
                <label>
                    Mô tả
                </label>
                <textarea type="text" id="info--des"></textarea>
            </div>
                <button class="add_edit_btn">Thêm/Sửa</button>
        </div>
        </div>
    )
}

export default SanPhamAdmin;