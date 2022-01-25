import React from "react";
import Pic from "./new.png"
import "./Welcome.css"
import About from "./About";

function Welcome(){
    return(
        <>
            <div id="welcome-main">
                <div id='welcomeContainer'>
                    <div id="info-container">
                        <div id="title-container">
                            <h1 id="hi" className="uk-animation-fade my-title">Kellie Kumasaka.</h1>
                            <h1 className="uk-animation-fade my-title">Full-Stack Developer.</h1>
                        </div>
                        <About/>
                    </div>
                    <img alt="profile pic" id="myPic" src={Pic}/>
                </div>
            </div>
        </>
    )
}

export default Welcome;