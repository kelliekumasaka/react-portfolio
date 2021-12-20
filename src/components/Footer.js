import React from "react";
import "./Footer.css"

function Footer(){
    const style = {
        display:'flex',
        justifyContent:'center',
        paddingBottom:'30px'
    };

    return(
        <div id='contact' style={style}>
            <a href="mailto:kelliek3@gmail.com" className="uk-icon-button uk-margin-medium-right my-icons" target="_blank" uk-icon="mail"></a>
            <a href="tel:206-697-9792" className="uk-icon-button  uk-margin-medium-right my-icons" uk-icon="receiver"></a>
            <a href="https://github.com/kelliekumasaka" target="_blank" className="uk-icon-button my-icons uk-margin-medium-right" uk-icon="github-alt"></a>
            <a href="https://www.linkedin.com/in/kellie-kumasaka/" target="_blank" className="uk-icon-button my-icons uk-margin-medium-right" uk-icon="linkedin"></a>
        </div>
    )
}

export default Footer;