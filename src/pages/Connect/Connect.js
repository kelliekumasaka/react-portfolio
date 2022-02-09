import React from "react";
import "./Connect.css"

function Connect(){
    function clickMe() {
        window.open('mailto:kelliek3@gmail.com','_blank')
    }

    return(
        <div id='connect'>
            <div id="connect-container">
                <div id="connect-title-container">
                    <h1 className="project-title">Let's </h1>
                    <h1 id="connect">Connect</h1>
                    <h1 className="project-title">!</h1>
                </div>
                <div id="connect-with-me">
                    <p className="about-paragraph" id="connect-paragraph">
                        I’m always open to new opportunities, so feel free to reach out. Whether you’re looking for a chance to work together or simply connect, my inbox is always open.
                    </p>
                </div>
                <button onClick={clickMe} id="hello-button">Say Hello</button>
            </div>
        </div>
    )
}

export default Connect;