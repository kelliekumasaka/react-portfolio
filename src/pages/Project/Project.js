import React from "react";
import "./Project.css";
import Roku from '../../images/roku.jpg'
// import BuJo from '../../images/resized-bujo.png';
import Employee from '../../images/resized-meeting.png';
// import Library from '../../images/resized-suz.png';
import Card from '../../components/Card';
import PetIt from '../../images/PetIt_Resized.png';

function Project(){
    const myProjects = [
        // {
        //     id:'bujo',
        //     name:'Bullet Journal Squared',
        //     image: BuJo,
        //     description:"A website that allows users to create an account, write journal entries, and view their past thoughts and feelings.",
        //     repo:"https://github.com/Mark-LohseMiranda/bulletjournal",
        // },
        {
            id:'acnh-island-manager',
            name:'Humming - Roku Marketing',
            image: Roku,
            description: "This page was built to advertise for a Roku service that is provided by Humming.",
            website:'https://heyhumming.com/retv'
        },
        {
            id:'employee-tracker',
            name:'Employee Tracker',
            image: Employee,
            description:"This in-terminal app allows the user to create and view employees, departments, and roles within a company database.",
            repo:"https://github.com/kelliekumasaka/employee-tracker"
        },
        // {
        //     id:'book-search',
        //     name:'Book Search Engine',
        //     image: Library,
        //     description:"A website that allows the user to look for books, save them, and mark them as they read.",
        //     repo:"https://github.com/kelliekumasaka/book-search-engine",
        //     website:'https://kk-book-search-engine.herokuapp.com/'
        // },
        {
            id:'petit',
            name:'PetIt',
            image: PetIt,
            description:"Full stack social networking app allowing users to inform each other on the pet-friendliness of employers and establishments using MySQL, React, Node, and Express.",
            repo:"https://github.com/dimitermusic/petit-frontend",
        }
    ]

    return(
        <div id="projects">
            <div id="project-container">
                <div id="project-title-container">
                    <h1 id="project-header">Work </h1>
                    <h1 id="project-title">so far...</h1>
                </div>
                <div id="grid-container">
                    {myProjects.map(project => {
                        return <Card
                            id={project.id}
                            background={project.image}
                            name = {project.name}
                            description = {project.description}
                            repo = {project.repo}
                            website = {project.website}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project;