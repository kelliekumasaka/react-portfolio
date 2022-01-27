import React from "react";
import "./Footer.css"

function Footer(){
    function clickMe(e) {
        e.preventDefault();
    }

    return(
        <div id='footer'>
            <div id="footer-container">
                <div id="footer-title-container">
                    <h1 className="project-title">Let's </h1>
                    <h1 id="connect">Connect</h1>
                    <h1 className="project-title">!</h1>
                </div>
                <br></br>
                <div id="connect-with-me">
                    <p className="about-paragraph">
                        I’m always open to new opportunities, so feel free to reach out. Whether you’re looking for a chance to work together or simply connect, my inbox is always open.
                    </p>
                </div>
                <br></br>
                <br></br>                
                <br></br>
                <button onClick={{clickMe}} id="hello-button">Say Hello</button>
            </div>
        </div>
    )
}

export default Footer;