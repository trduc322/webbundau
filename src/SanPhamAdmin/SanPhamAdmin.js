import React from "react"
import Header from "../HomeAdmin/Header/HeaderAdmin.js"
import Footer from "../HomeAdmin/Footer/Footer.js"
import "./SanPhamAdmin.css"
import axios from 'axios'
import callApi from "../apiCaller.js"
import {FaEdit} from 'react-icons/fa'


let loaisp = ['Thuc An', 'Do Uong', 'Combo'];



class SanPhamAdmin extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            products : [],
            id : "",
            name : "",
            price : "",
            description : "",
            category : "",
            link_Anh : "",
            file: null,
            role: false
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        e.preventDefault();
        console.log(this.state.description)
    }
    handleChangeCategory = (e) =>{
        const {name, value} = e.target;
        
        this.setState({
            [name] : value
        })
        
        e.preventDefault();
      }
    
    handleEdit=(Id, Name, Price, Description, File, Category, link_Anh)=>{
        this.setState({
            id: Id,
            name: Name,
            price: Price,
            description: Description,
            file : File,
            category : Category,
            link_Anh : "./Images/bundau.jpg"
        })
        // console.log("ok")
       
    }
    handleClear=()=>{
        this.setState({
            id: "",
            name: "",
            price: "",
            description: "",
            file : "",
            category : ""
        })
        console.log("ok")
       
    }

    handleAdd = () => {
        var data = {
            name : this.state.name,
            loaiThucPham : this.state.category,
            giaGoc : parseInt(this.state.price),
            moTa : this.state.description,
            link_Anh : "./Images/bundau.jpg"
        }
        if(this.state.id === "")
        {   console.log(data)
            callApi("food","POST", data)
            
        }
        else
        {
            console.log(data)
            console.log(this.state.category)
            callApi(`food/${this.state.id}`,"PUT", data)
        }
        
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
    componentDidMount() {
        callApi("food", "GET", null).then((res) => {
            this.setState({
                products: res.data,
            }); 
            //console.log(this.state.products)
        });
        var id = JSON.parse(localStorage.getItem('USER'));
        if(id !==null){
            callApi(`user/${id}`,"GET",null).then((res)=>{
                this.setState({
                    role: res.data.role
                })
            });
            }
            if(id===null){
              this.setState({
                role: false
              })
            }
    }
    
    render(){
        var { products } = this.state;
        if(this.state.role===true){
        return(
            <div>
                <Header/>
                <div class="container">
                    <ListSanPham show={this.showsanpham(products)}/>
                    <AddEdit click={this.uploadSingleFile} upload={this.upload} file={this.state.file} state={this.state} change={this.handleChange} handleClear = {this.handleClear} handleAdd={this.handleAdd} handleChangeCategory ={this.handleChangeCategory}/>
                </div>
                <Footer/>
            </div>
        )}
        return (
            <p>ERROR 404: NOT FOUND</p>
        )
    }
    showsanpham(products){
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
            return (
                <Sanpham key={index} product={product} handleEdit = {this.handleEdit}/>
            );
            });
        }
        return result;
    }
}


function Sanpham(props){
    return(
        <tr>
            <td>SP{props.product.iD_ThucPham}</td>
            <td>{props.product.name}</td>
            <td>{props.product.giaGoc}.000 VNĐ</td>
            <td><FaEdit class="fa_edit" onClick={() => props.handleEdit(props.product.iD_ThucPham, props.product.name, props.product.giaGoc, props.product.moTa, props.product.link_Anh, props.product.loaiThucPham)}>Chi tiết</FaEdit></td>
        </tr>
    )
}

function ListSanPham(props){
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
                            {props.show}
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

                <input type="text" id="info--masanpham" name="id" value ={props.state.id} onChange = {props.change} disabled />
            </div>
            <div class="edit_input_form">
                <label>
                    Tên
                </label>
                <input type="text" id="info--name" name="name" value ={props.state.name} onChange = {props.change} />
            </div>
            <div class="edit_input_form">
                <label>
                    Loại sản phẩm
                </label>
                {/* <select onChange={props.handleChangeCategory} value={props.state.category} name="category">
          <option  value="value">Phân loại</option>
          <option  value="Thuc An">Thuc An</option>
          <option  value="Do Uong">Do Uong</option>
          <option  value="Combo">Combo</option>
        </select> */}
        <div>
            <input  type="radio" name = "category" value = "Thuc An" checked={props.state.category === "Thuc An"} onChange={props.handleChangeCategory} />
            <label>Thức ăn</label>
            <input type="radio" name = "category" value = "Do Uong" checked={props.state.category === "Do Uong"} onChange={props.handleChangeCategory} />
            <label>Đồ uống</label>
            <input  type="radio" name = "category" value = "Combo" checked={props.state.category === "Combo"} onChange={props.handleChangeCategory} />
            <label>Combo</label>
            </div>
            </div>
            <div class="edit_input_form">
                <label>
                    Giá
                </label>
                <input type="number" id="info--price" name="price" value ={props.state.price} onChange = {props.change}/>
            </div>
            <div class="edit_input_form">
                <label>
                    Mô tả
                </label>
                <textarea type="text" id="info--des" name="description" value ={props.state.description} onChange = {props.change}></textarea>
            </div>
            <div>
                <button class="clear_btn" onClick={props.handleClear}>Clear</button>
            </div>
                <button class="add_edit_btn" onClick={props.handleAdd}>Thêm/Sửa</button>
        </div>
        </div>
    )
}

export default SanPhamAdmin;