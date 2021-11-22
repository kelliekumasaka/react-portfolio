import React from "react";
import Pdf from '../documents/resume.pdf'

function Navbar(){
    return (
        <nav className="uk-navbar-container" uk-navbar='true'>
            <div className="uk-navbar-left">
                <a className="uk-icon-button" href="#">KK</a>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="#">Intro</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href={Pdf}>Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;