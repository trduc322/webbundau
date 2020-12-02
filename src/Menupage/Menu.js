import React from "react"
import Header from "../Homepage/Components/Header/Header.js"
import Footer from "../Homepage/Components/Footer/Footer.js"
import MenuContent from "./Component/MenuContent.js"
import "./Menu.css"


class Menu extends React.Component{
    
    render(){
        return(
            <div>
 

               <Header/>
                <MenuContent/>
                <Footer/>
            </div>
        )
    }
}


export default Menu;