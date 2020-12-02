import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import {FaSmileBeam} from 'react-icons/fa';
import "./CamOn.css"


class CamOn extends React.Component{
    
    render(){
        return(
            <div>
                <Header/>
                <div class="camon">
                    <div class = "camon-title">
                        <FaSmileBeam class="smile"/>
                        <h1 >Cảm ơn bạn đã mua hàng!</h1>
                    </div>
                    <a class="return-home" href ="http://localhost:3000/"  >Quay trở lại trang chủ</a>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default CamOn;