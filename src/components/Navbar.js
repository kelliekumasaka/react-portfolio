import React from "react";
import Pdf from '../documents/resume.pdf';
import "./Navbar.css"

function Navbar(){
    return (
        <div id="my-nav" className="uk-position-relative">
            <div className="uk-position-top">
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar='true' id="navBar" uk-sticky='true' >
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><a id='intro' href="#welcome-main">Intro</a></li>
                            <li className="uk-active"><a id='work' href="#work-container">Work</a></li>
                            <li className="uk-active"><a id='contact' href="#connect">Contact</a></li>
                            <li className="uk-active"><a id='resume' href={Pdf}>Resume</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;