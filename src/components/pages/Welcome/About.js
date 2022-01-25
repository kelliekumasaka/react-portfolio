import React from "react";
import "./About.css"

function About(){
    return (
      <div key="about" id="about">
        <div id="paragraph-container" className="uk-animation-fade">
          <p className="about-paragraph">
            Hi there and thanks for checking out my portfolio! My name is Kellie and I am a former teacher turned web developer with a particular interest in UX design and front-end development. Currently, I am fluent in <code className="my-code">HTML, CSS, JavaScript, ReactJS</code> as well as <code className="my-code">MySql, Sequelize, Handlebars, ExpressJS, MongoDB, Mongoose and node.js</code>.
          </p>
          <br></br>
          <p id="second" className="about-paragraph">
            I was born and raised in Seattle and, after attending the University of Washington, moved to Tokyo for about 3 years to teach English to middle and high school students. Afterwards, I returned to Seattle and worked in sales before attending the UW full stack bootcamp. My hobbies include playing guitar and singing, watching anime, and playing volleyball.
          </p>
        </div>
      </div>
    )
}

export default About;