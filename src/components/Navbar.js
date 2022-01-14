import React from "react";
import Pdf from '../documents/resume.pdf';
import Logo from '../documents/round.png'
import "./Navbar.css"

function Navbar(){
    return (
        <div id="main">
            <nav className="uk-navbar-container" uk-navbar='true' id="navBar">
                <div className="uk-navbar-left">
                    <a className="uk-icon-button uk-margin-small-left" id='welcome'><img src={Logo} alt='custom logo'></img></a>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a id='intro'
                        
                        >Intro</a></li>
                        <li className="uk-active"><a id='work' >Work</a></li>
                        <li className="uk-active"><a id='resume' href={Pdf}>Resume</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;