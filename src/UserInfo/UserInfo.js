import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"

import MainInfo from "./Component/MainInfo.js"

class UserInfo extends React.Component{
    
    render(){
        return(
            <div>
                <Header/>
                <MainInfo/>
                <Footer/>
            </div>
        )
    }
}

export default UserInfo;