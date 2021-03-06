import React from "react";
import './Footer.css';
import GitHub from '../../images/white-github.png';
import LinkedIn from '../../images/white-linkedin.png';
import Insta from '../../images/white-insta.png';

export default function Footer(){
    return(
        <div id="footer">
            <div id="icon-footer">
                <a href="https://www.linkedin.com/in/kellie-kumasaka/" target='_blank' rel="noreferrer">
                    <img alt="linkedin" id="white-linkedin" src={LinkedIn} className="footer-icons"></img>
                </a>
                <a href="https://github.com/kelliekumasaka" target='_blank' rel="noreferrer">
                    <img className="footer-icons" alt="github" id="white-github" src={GitHub}></img>
                </a>
                <a href="https://www.instagram.com/kumayama.journals/"target='_blank' rel="noreferrer">
                    <img className="footer-icons" alt="instagram" id="white-insta" src={Insta}></img>
                </a>
            </div>
        </div>
    )
};
