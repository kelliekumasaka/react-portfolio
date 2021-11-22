import React from "react";
import About from './About';
import Welcome from "./Welcome";
import Work from "./Work";

function Project(props){
    const docState = props.doc;
    if (docState==='welcome' || docState==='') {
        return(
            <Welcome/>
        )
    };
    if(docState==='intro'){
        return(
            <About/>
        )
    };
    if(docState==='work'){
        return(
            <Work/>
        )
    }
}

export default Project;