import React from "react";
import Pic from "../../images/new.jpg"
import "./Welcome.css"
import LinkedIn from "../../images/black-linkedin.png";
import GitHub from "../../images/github-logo.png";

function Welcome(){
    return(
        <div id="welcome-main">
            <div id='welcomeContainer'>
                <div id="info-container">
                    <div id="title-container">
                        <h1 id="name" className="uk-animation-fade my-title">Kellie Kumasaka.</h1>
                        <h1 className="uk-animation-fade my-title">Full-Stack Developer.</h1>
                    </div>
                    <div key="about" id="about">
                        <div id="paragraph-container" className="uk-animation-fade">
                        <p className="about-paragraph">
                            Hi there and thanks for checking out my portfolio! My name is Kellie and I am a former teacher turned web developer with a particular interest in UX design and front-end development. Currently, I am fluent in <code className="my-code">HTML, CSS, JavaScript, ReactJS</code> as well as <code className="my-code">MySql, Sequelize, Handlebars, ExpressJS, MongoDB, Mongoose and node.js</code>.
                        </p>
                        <br/>
                        <p id="second" className="about-paragraph">
                            I was born and raised in Seattle and, after attending the University of Washington, moved to Tokyo for about 3 years to teach English to middle and high school students. Afterwards, I returned to Seattle and worked in sales before attending the UW full stack bootcamp. My hobbies include playing guitar and singing, watching anime, and playing volleyball.
                        </p>
                        </div>
                    </div>
                </div>
                <div id="my-pics">
                    <img alt="profile pic" id="hero-pic" src={Pic}/>
                    <div id="icon-tags">
                        <a href="https://www.linkedin.com/in/kellie-kumasaka/" target='_blank' rel="noreferrer">
                            <img alt="linkedin" id="linkedin" src={LinkedIn} className="contact-icons"></img>
                        </a>
                        <a href="https://github.com/kelliekumasaka" target='_blank' rel="noreferrer">
                            <img className="contact-icons" alt="github" id="github" src={GitHub}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;