import React from "react";
import Pic from "./new.png"
import "./Welcome.css"

function Welcome(){
    return(
        <>
            <h4 style={{fontFamily:'Poppins', textAlign:"right"}} >Contact me @ <a href="mailto:kelliek3@gmail.com">kelliek3@gmail.com</a></h4>
        <div id="welcome-main">
            <div id='welcomeContainer'>
                <img id="myPic" src={Pic} display="inline"/>
                <h1 id="hi" style={{fontFamily:'Poppins'}} className="uk-animation-fade">Hi there, welcome to my portfolio!</h1>
            </div>
        </div>
        </>
    )
}

export default Welcome;