import React from "react";
import "./Project.css";
import AnimalCrossing from '../../images/resized-acnh.png';
import PetIt from '../../images/PetIt_Resized.png';
import BuJo from '../../images/resized-bujo.png';
import Employee from '../../images/resized-meeting.png';
import Library from '../../images/resized-suz.png';
import Viewnify from '../../images/Viewnify_Resized.png';
import Card from '../../components/Card';

function Project(){
    const myProjects = [
        {
            id:'petit',
            name:'PetIt',
            image: PetIt,
            description:"Full stack social networking app allowing users to inform each other on the pet-friendliness of employers and establishments using MySQL, React, Node, and Express.",
            repo:"https://github.com/dimitermusic/petit-frontend",
            website:'https://petit-petfriendly.herokuapp.com/'
        },
        {
            id:'bujo',
            name:'Bullet Journal Squared',
            image: BuJo,
            description:"A website that allows users to create an account, write journal entries, and view their past thoughts and feelings.",
            repo:"https://github.com/Mark-LohseMiranda/bulletjournal",
            website:'https://bit.ly/3Rk4H62'
        },
        {
            id:'acnh-island-manager',
            name:'Animal Crossing Island Manager',
            image: AnimalCrossing,
            description:"This website was built to help end-users keep track of their villagers and collectibles for Animal Crossing: New Horizons in one central hub.",
            repo:"https://github.com/Rallen4/project1-animal-crossing",
            website:'https://rallen4.github.io/project1-animal-crossing/'
        },
        {
            id:'employee-tracker',
            name:'Employee Tracker',
            image: Employee,
            description:"This in-terminal app allows the user to create and view employees, departments, and roles within a company database.",
            repo:"https://github.com/kelliekumasaka/employee-tracker"
        },
        {
            id:'book-search',
            name:'Book Search Engine',
            image: Library,
            description:"A website that allows the user to look for books, save them, and mark them as they read.",
            repo:"https://github.com/kelliekumasaka/book-search-engine",
            website:'https://kk-book-search-engine.herokuapp.com/'
        },
        {
            id:'viewnify',
            name:'Viewnify',
            image: Viewnify,
            description:"Viewnify is a movie matching, watch party app that allows you and your friends to swipe, like and dislike movies. You match movies with your friends, and can enjoy a watch party together.",
            repo:"https://github.com/jwhector/viewnify",
            website:'http://viewnify.herokuapp.com/'
        },
    ]

    return(
        <div id="projects">
            <div id="project-container">
                <div id="project-title-container">
                    <h1 id="project-header">Projects </h1>
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