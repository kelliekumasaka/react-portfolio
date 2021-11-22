import React from "react";

function Welcome(){
    const style = {
        display:'flex',
        justifyContent:'center',
        margin:'200px'
    }

    return(
        <div style={style}>
                <h1 className="uk-animation-fade">Hi there, welcome to my portfolio!</h1>
        </div>
    )
}

export default Welcome;