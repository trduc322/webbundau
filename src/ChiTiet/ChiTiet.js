import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import MainChiTiet from "./Component/MainChiTiet.js"
import GoiY from "./Component/GoiY.js"


class ChiTiet extends React.Component{
   
    render(){
        return(
            <div>
            <Header/>
            <MainChiTiet/>
            <Footer/>
            </div>
        )
    }
}


export default ChiTiet;