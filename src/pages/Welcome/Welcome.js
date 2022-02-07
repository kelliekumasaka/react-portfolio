import React from "react";
import Pic from "../../images/new.png"
import "./Welcome.css"
import About from "./About";
import LinkedIn from "../../images/black-linkedin.png";
import GitHub from "../../images/github-logo.png";

function Welcome(){
    return(
        <div id="welcome-main">
            <div id='welcomeContainer'>
                <div id="info-container">
                    <div id="title-container">
                        <h1 id="name" className="uk-animation-fade my-title">Kellie Kumasaka.</h1>
                        <h1 className="uk-animation-fade my-title">Full-Stack Developer.</h1>
                    </div>
                    <About/>
                </div>
                <div id="my-pics">
                    <img alt="profile pic" id="hero-pic" src={Pic}/>
                    <a href="https://github.com/kelliekumasaka" target='_blank' rel="noreferrer"><img className="contact-icons" alt="github" id="github" src={GitHub}></img></a>
                    <a href="https://www.linkedin.com/in/kellie-kumasaka/" target='_blank' rel="noreferrer"><img alt="linkedin" id="linkedin" src={LinkedIn} className="contact-icons"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Welcome;