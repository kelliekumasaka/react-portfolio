import React from "react";
import Pic from "./new.png"
import "./Welcome.css"

function Welcome(){
    return(
        <div id='welcomeContainer'>
            <img id="myPic" src={Pic} display="inline"/>
            <h1 id="hi" style={{fontFamily:'Poppins'}} className="uk-animation-fade">Hi there, welcome to my portfolio!</h1>
        </div>
    )
}

export default Welcome;