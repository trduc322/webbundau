import React from "react";
import './Payment.css';
import Footer from '../Homepage/Components/Footer/Footer.js';
import Header from '../Homepage/Components/Header/Header.js';
import ThongTinKhachHang from './Components/ThongTinKhachHang/ThongTinKhachHang.js';
import ThanhToan from './Components/ThanhToan/ThanhToan.js';
import DHContainer from '../containers/DHContainer.js'
import TongTien from './Components/TongTien/TongTien.js';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Payment extends React.Component{
    render()  {
        return(
            <div>
                <Header/>
                <div className="container-subpm">
                <div className="section_containerpm">
                    <div className="user_informationpm">
                        <ThongTinKhachHang/>
                        <ThanhToan/>
                    </div>
                    <div className="order_listpm">
                    <DHContainer/>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
                
        )
    }
}

export default Payment;