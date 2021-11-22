import React, {useState, useEffect} from "react";
import About from './About';
import Welcome from "./Welcome";
import Work from "./Work";

function Body(props){
    const [doc, setDoc] = useState('')

    useEffect(() => {
        setDoc('welcome');
    }, [])

    return(
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default Body;