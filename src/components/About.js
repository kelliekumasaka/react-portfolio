import React from "react";

function About(){
    const style = {
      margin:'50px',
      textAlign:"center"
    };

    return (
        <div key="about" id="about" style={style}>
            <p>
            Hi there and thanks for checking out my portfolio! My name is Kellie and I am a former teacher turned web developer with a particular interest in UX design and front-end development. Currently, I am fluent in <code>HTML, CSS, JavaScript,</code> as well as <code>MySql, Sequelize, Handlebars, ExpressJS, and node.js</code>.
          </p>
          <p>
            I was born and raised in Seattle and, after attending the University of Washington, moved to Tokyo for about 3 years to teach English to middle and high school students. Afterwards, I returned to Seattle and worked in sales before attending the UW full stack bootcamp. My hobbies include playing guitar and singing, watching anime, and playing volleyball.
          </p>
        </div>
    )
}

export default About;