import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";


import "./Slogan.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 }
];

class Slogan extends React.Component{
  render(){
  return(
      <div>
        <Sloganfunc/>
      </div>
  )
  }
}
function Sloganfunc(){
  return(
    <>
  <div className = "sloganfunc">
    <Carousel class="style" breakPoints={breakPoints}>
        <div>
          <img className="item1" src = "./Images/background.jpg"/>
        </div>
        <div>
          <img className="item1" src ="./Images/background6.jpg"/>
        </div>
        <div>
          <img className ="item1" src ="./Images/background7.jpg"/>
        </div>
        <div>
          <img className ="item1" src ="./Images/nemchuaran.jpg"/>
        </div>
      </Carousel>
    </div>
    </>
  );
}

export default Slogan;


