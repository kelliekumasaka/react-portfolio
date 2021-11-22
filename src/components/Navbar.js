import React, {useEffect, useState} from "react";
import Pdf from '../documents/resume.pdf';
import Logo from '../documents/round.png'
import Project from './Project'

function Navbar(){
    const [doc, setDoc] = useState('');

    useEffect(() => {
        setDoc('welcome');
    }, []);

    const clickMe = (e) => setDoc(e.target.id)
    
    return (
        <div>
            <nav className="uk-navbar-container" uk-navbar='true'>
                <div className="uk-navbar-left">
                    <span className="uk-icon-button uk-margin-small-left"><img src={Logo} alt='custom logo'></img></span>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a id='intro'
                        onClick={clickMe}
                        >Intro</a></li>
                        <li><a id='work' onClick={clickMe}>Work</a></li>
                        <li><a id='resume' href={Pdf} onClick={clickMe}>Resume</a></li>
                    </ul>
                </div>
            </nav>
            <Project doc={doc}/>
        </div>
    )
}

export default Navbar;