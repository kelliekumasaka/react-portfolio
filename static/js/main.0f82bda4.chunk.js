(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},,,function(A,e,t){"use strict";t.r(e);var a=t(1),i=t(3),c=t.n(i),n=(t(11),t(12),t(13),t(0));var r=function(){return Object(n.jsx)("div",{id:"connect",children:Object(n.jsxs)("div",{id:"connect-container",children:[Object(n.jsxs)("div",{id:"connect-title-container",children:[Object(n.jsx)("h1",{className:"project-title",children:"Let's "}),Object(n.jsx)("h1",{id:"connect",children:"Connect"}),Object(n.jsx)("h1",{className:"project-title",children:"!"})]}),Object(n.jsx)("div",{id:"connect-with-me",children:Object(n.jsx)("p",{className:"about-paragraph",id:"connect-paragraph",children:"I\u2019m always open to new opportunities, so feel free to reach out. Whether you\u2019re looking for a chance to work together or simply connect, my inbox is always open."})}),Object(n.jsx)("button",{onClick:function(){window.open("mailto:kelliek3@gmail.com","_blank")},id:"hello-button",children:"Say Hello"})]})})},o=t(6),s=t.p+"static/media/resume.dc985c95.pdf";t(15);var l=function(){var A=Object(a.useState)(!1),e=Object(o.a)(A,2),t=e[0],i=e[1];function c(){i(!1)}return Object(a.useEffect)((function(){i(!1)}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{id:"my-nav",className:"uk-position-relative",children:Object(n.jsx)("div",{className:"uk-position-top",children:Object(n.jsx)("nav",{className:"uk-navbar-container","uk-navbar":"true",id:"navBar","uk-sticky":"true",children:Object(n.jsx)("div",{className:"uk-navbar-center",children:Object(n.jsxs)("ul",{className:"uk-navbar-nav",children:[Object(n.jsx)("li",{className:"uk-active",children:Object(n.jsx)("a",{id:"intro",href:"#welcome-main","uk-scroll":"true",children:"Intro"})}),Object(n.jsx)("li",{className:"uk-active",children:Object(n.jsx)("a",{id:"work",href:"#projects","uk-scroll":"true",children:"Work"})}),Object(n.jsx)("li",{className:"uk-active",children:Object(n.jsx)("a",{id:"contact",href:"#connect","uk-scroll":"true",children:"Contact"})}),Object(n.jsx)("li",{className:"uk-active",children:Object(n.jsx)("a",{id:"resume",href:s,children:"Resume"})})]})})})})}),Object(n.jsx)("nav",{id:"mobile-nav",style:t?{top:"0px"}:{top:"-100%",boxShadow:"none"},children:Object(n.jsxs)("ul",{id:"nav-menu",children:[Object(n.jsx)("li",{className:"nav-item ",children:Object(n.jsx)("a",{id:"intro",href:"#welcome-main","uk-scroll":"true",onClick:c,children:"Intro"})}),Object(n.jsx)("li",{className:"nav-item ",children:Object(n.jsx)("a",{id:"work",href:"#projects","uk-scroll":"true",onClick:c,children:"Projects"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{id:"contact",href:"#connect","uk-scroll":"true",onClick:c,children:"Contact"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{id:"resume",target:"_blank",onClick:c,href:s,rel:"noreferrer",children:"Resume"})})]})}),Object(n.jsxs)("div",{id:"burger",onClick:t?c:function(){i(!0)},className:t?"active":null,children:[Object(n.jsx)("span",{className:"bar"}),Object(n.jsx)("span",{className:"bar"}),Object(n.jsx)("span",{className:"bar"})]})]})},d=(t(16),t.p+"static/media/roku.9d727c16.jpg"),g=t.p+"static/media/resized-meeting.3f7b3431.png";t(17);function j(A){return Object(n.jsxs)("div",{className:"uk-card uk-card-default new-card",id:A.id,children:[Object(n.jsx)("div",{className:"uk-card-media-top images",style:{backgroundImage:"url(".concat(A.background,")")}}),Object(n.jsx)("div",{className:"uk-card-body card-container",children:Object(n.jsxs)("div",{className:"card-info-container",children:[Object(n.jsxs)("div",{className:"card-info",children:[Object(n.jsx)("h3",{className:"uk-card-title card-title",children:A.name}),Object(n.jsx)("p",{className:"card-description",children:A.description})]}),Object(n.jsx)("div",{className:"card-footer",children:Object(n.jsxs)("p",{className:"read-more",children:[A.repo?Object(n.jsx)("a",{className:"read-more links",target:"_blank",rel:"noreferrer",href:A.repo,children:"GitHub Repo"}):" ",A.website&&A.repo?" | ":"",A.website?Object(n.jsx)("a",{className:"read-more links",href:A.website,target:"_blank",rel:"noreferrer",children:"Website"}):" "]})})]})})]},A.id)}var h=t.p+"static/media/PetIt_Resized.9a5299d9.png";var m=function(){var A=[{id:"acnh-island-manager",name:"Humming - Roku Marketing",image:d,description:"This page was built to advertise for a Roku service that is provided by Humming.",website:"https://heyhumming.com/retv"},{id:"employee-tracker",name:"Employee Tracker",image:g,description:"This in-terminal app allows the user to create and view employees, departments, and roles within a company database.",repo:"https://github.com/kelliekumasaka/employee-tracker"},{id:"petit",name:"PetIt",image:h,description:"Full stack social networking app allowing users to inform each other on the pet-friendliness of employers and establishments using MySQL, React, Node, and Express.",repo:"https://github.com/dimitermusic/petit-frontend"}];return Object(n.jsx)("div",{id:"projects",children:Object(n.jsxs)("div",{id:"project-container",children:[Object(n.jsxs)("div",{id:"project-title-container",children:[Object(n.jsx)("h1",{id:"project-header",children:"Work "}),Object(n.jsx)("h1",{id:"project-title",children:"so far..."})]}),Object(n.jsx)("div",{id:"grid-container",children:A.map((function(A){return Object(n.jsx)(j,{id:A.id,background:A.image,name:A.name,description:A.description,repo:A.repo,website:A.website})}))})]})})},b=t.p+"static/media/new.b93fa224.jpg",p=(t(18),t.p+"static/media/black-insta.3e87baff.png");var u=function(){return Object(n.jsx)("div",{id:"welcome-main",children:Object(n.jsxs)("div",{id:"welcomeContainer",children:[Object(n.jsxs)("div",{id:"info-container",children:[Object(n.jsxs)("div",{id:"title-container",children:[Object(n.jsx)("h1",{id:"name",className:"uk-animation-fade my-title",children:"Kellie Kumasaka."}),Object(n.jsx)("h1",{className:"uk-animation-fade my-title",children:"Software Engineer."})]}),Object(n.jsx)("div",{id:"about",children:Object(n.jsxs)("div",{id:"paragraph-container",className:"uk-animation-fade",children:[Object(n.jsxs)("p",{className:"about-paragraph",children:["Hi there and thanks for checking out my portfolio! My name is Kellie and I am a former teacher turned web developer with a particular interest in UX design and front-end development. Currently, I am fluent in ",Object(n.jsx)("code",{className:"my-code",children:"HTML, CSS, JavaScript, ReactJS"})," as well as ",Object(n.jsx)("code",{className:"my-code",children:"MySql, Sequelize, Handlebars, ExpressJS, MongoDB, Mongoose and node.js"}),"."]}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{id:"second",className:"about-paragraph",children:"I was born and raised in Seattle and, after attending the University of Washington, moved to Tokyo for about 3 years to teach English to middle and high school students. Afterwards, I returned to Seattle and worked in sales before attending the UW full stack bootcamp. My hobbies include playing guitar and singing, watching anime, and playing volleyball."})]})},"about")]}),Object(n.jsxs)("div",{id:"my-pics",children:[Object(n.jsx)("img",{alt:"profile pic",id:"hero-pic",src:b}),Object(n.jsxs)("div",{id:"icon-tags",children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/kellie-kumasaka/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{alt:"linkedin",id:"linkedin",src:"data:image/png;base64,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",className:"contact-icons"})}),Object(n.jsx)("a",{href:"https://github.com/kelliekumasaka",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{className:"contact-icons",alt:"github",id:"github",src:"data:image/png;base64,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"})}),Object(n.jsx)("a",{href:"https://www.instagram.com/kumayama.journals/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{className:"contact-icons",alt:"insta",id:"insta",src:p})})]})]})]})})},w=(t(19),t.p+"static/media/white-github.987334e9.png"),B=t.p+"static/media/white-linkedin.a18fd0e3.png",O=t.p+"static/media/white-insta.6f7718f3.png";function x(){return Object(n.jsx)("div",{id:"footer",children:Object(n.jsxs)("div",{id:"icon-footer",children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/kellie-kumasaka/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{alt:"linkedin",id:"white-linkedin",src:B,className:"footer-icons"})}),Object(n.jsx)("a",{href:"https://github.com/kelliekumasaka",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{className:"footer-icons",alt:"github",id:"white-github",src:w})}),Object(n.jsx)("a",{href:"https://www.instagram.com/kumayama.journals/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{className:"footer-icons",alt:"instagram",id:"white-insta",src:O})})]})})}var C=function(){return Object(n.jsxs)("div",{id:"app",children:[Object(n.jsx)(l,{}),Object(n.jsx)(u,{}),Object(n.jsx)(m,{}),Object(n.jsx)(r,{}),Object(n.jsx)(x,{})]})},k=(t(20),t(4)),G=t.n(k),Q=t(5),N=t.n(Q);t(21);G.a.use(N.a),c.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.0f82bda4.chunk.js.map