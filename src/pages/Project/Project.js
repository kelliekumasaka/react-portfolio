import React from "react";
import "./Project.css";
import AnimalCrossing from '../../images/animal-crossing.jpg';
import PetIt from '../../images/dog-and-person.webp';
import BuJo from '../../images/journal.jpg';

function Project(){
    return(
        <div id="projects">
            <div id="project-container">
                <div id="project-title-container">
                    <h1 className="project-title" id="project-header">Projects </h1>
                    <h1 className="project-title">so far...</h1>
                </div>
                <div id="grid-container">
                    <div className="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid='true'>
                        <div>
                            <div id="pet-it" className="uk-card uk-card-default uk-card-body my-card uk-visible-toggle" tabIndex={-1} style={{backgroundImage: `url(${PetIt})`}}>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">PetIt</p>
                                    <p className="my-project-info">Full stack social networking app allowing users to inform each other on the pet-friendliness of employers and establishments using MySQL, React, Node, and Express.</p>
                                    <p><a className="read-more" href="https://github.com/dimitermusic/petit-frontend">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="bullet-journal-squared" className="uk-card uk-card-default uk-card-body my-card uk-visible-toggle" tabIndex={-1} style={{backgroundImage:`url(${BuJo})`}}>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">Bullet Journal Squared</p>
                                    <p className="my-project-info">Bullet Journal Squared is a website that allows users to create an account, write journal entries, and view their past thoughts and feelings.</p>
                                    <p><a className="read-more" href="https://github.com/Mark-LohseMiranda/bulletjournal">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="acnh-island-manager" className="uk-card uk-card-default uk-card-body my-card uk-visible-toggle" tabIndex={-1} style={{backgroundImage:`url(${AnimalCrossing})`}}>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">Animal Crossing Island Manager</p>
                                    <p className="my-project-info">This website was built to help end-users keep track of their villagers and collectibles for Animal Crossing: New Horizons in one central hub.</p>
                                    <p><a className="read-more" href="https://github.com/Rallen4/project1-animal-crossing">Read More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;