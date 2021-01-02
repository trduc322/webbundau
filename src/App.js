import logo from './logo.svg';
import './App.css';
import Footer from './Homepage/Components/Footer/Footer.js';
import Feature from './Homepage/Components/Feature/Feature.js';
import Header from './Homepage/Components/Header/Header.js';
import FoodType from './Homepage/Components/FoodType/FoodType.js';
import ProductsContainer from './containers/ProductsContainer.js'
import Slogan from './Homepage/Components/Slogan/Slogan.js';
import ChiTiet from './ChiTiet/ChiTiet.js';
import Cart from './Cart/Cart.js';
import Payment from './Payment/Payment.js';
import Menu from './Menupage/Menu.js';
import UserInfo from './UserInfo/UserInfo.js';
import DangNhap from './DangNhap/DangNhap.js';
import KhuyenMai from './KhuyenMai/KhuyenMai.js';
import CamOn from './CamOn/CamOn.js';
import SignUp from './DangKi/DangKi.js';
import QuenMatKhau from './QuenMatKhau/QuenMatKhau.js';
import HomeAdmin from './HomeAdmin/HomeAdmin.js'
import KhoHang from './KhoHang/KhoHang.js'
import KhachHangAdmin from './KhachHangAdmin/KhachHangAdmin.js'
import SanPhamAdmin from './SanPhamAdmin/SanPhamAdmin.js'
import CartContainer from './containers/CartContainer.js'
import { createStore } from "redux";
import { LocalizeProvider, localizeReducer } from "react-localize-redux";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {



  return (
    <div className="App">
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
                rel="stylesheet"/>
            <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <Router>
      <Switch>
          <Route exact path="/">
          
        <Header/>
        <Slogan/>
                
        <Feature hinh/>
          <div class = "container">
            <FoodType/>
            <ProductsContainer category="all"/>
            <CartContainer/>
          </div>
          
        <Footer/>
    
          </Route>
          <Route path="/chitiet">
            <ChiTiet />
          </Route>

          <Route path="/quenmatkhau">
            <QuenMatKhau />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/info">
            <UserInfo />
          </Route>

          <Route path="/login">
            <DangNhap />
          </Route>
          
          <Route path="/khuyenmai">
            <KhuyenMai />
          </Route>

          <Route path="/camon">
            <CamOn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/resetpass">
            <QuenMatKhau />
          </Route>

          <Route path="/admin">
            <HomeAdmin />
          </Route>

          <Route path="/kho">
            <KhoHang />
          </Route>

          <Route path="/khachhang">
            <KhachHangAdmin />
          </Route>

          <Route path="/sanpham">
            <SanPhamAdmin />
          </Route>

        </Switch>
    
    
    </Router>
    </div>
  );
}

export default App;
