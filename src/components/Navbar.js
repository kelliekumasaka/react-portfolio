import React, { useEffect, useState } from "react";
import Pdf from '../documents/resume.pdf';
import "./Navbar.css"

function Navbar(){
    const [active, setActive] = useState(false);

    useEffect(() => {
      setActive(false)
    },[]);
    
    function mobileMenu(){
        setActive(true)
    };

    function closeMenu(){
        setActive(false)
    };

    return (
        <>
            <div id="my-nav" className="uk-position-relative">
                <div className="uk-position-top">
                    <nav className="uk-navbar-container" uk-navbar='true' id="navBar" uk-sticky='true' >
                        <div className="uk-navbar-center">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><a 
                                id='intro' href="#welcome-main" uk-scroll='true'>Intro</a></li>
                                <li className="uk-active"><a id='work' href="#projects" 
                                uk-scroll='true'>Work</a></li>
                                <li className="uk-active"><a id='contact' 
                                href="#connect" uk-scroll='true'>Contact</a></li>
                                <li className="uk-active"><a id='resume' href={Pdf}>Resume</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <nav id="mobile-nav" style={ active ? {top:'0px'} : {top: "-100%", boxShadow:'none' }}>
                <ul id="nav-menu">
                    <li className="nav-item ">
                        <a id='intro' href="#welcome-main" uk-scroll='true' onClick={closeMenu}>Intro</a>
                    </li>
                    <li className="nav-item ">
                        <a id='work' href="#projects" uk-scroll='true' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a id='contact' href="#connect" uk-scroll='true' onClick={closeMenu}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a id='resume' target='_blank' onClick={closeMenu} href={Pdf} rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </nav>
            <div id="burger" onClick={ active ? closeMenu : mobileMenu} className={ active ? 'active' : null }>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </>
    )
}

export default Navbar;