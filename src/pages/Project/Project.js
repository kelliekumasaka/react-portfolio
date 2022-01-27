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
                    <h1 className="project-title"  id="project-header">Projects </h1>
                    <h1 className="project-title">so far...</h1>
                </div>
                <div id="grid-container">
                    {/* <div className="uk-child-width-1-2@m" uk-grid='true'>
                        <div>
                            <div className="uk-inline">
                                <img src={AnimalCrossing} alt=""></img>
                                <div className="uk-overlay uk-overlay-default uk-position-bottom">
                                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-inline">
                                <img src={BuJo} alt=""></img>
                                <div className="uk-overlay-default uk-position-bottom"></div>
                                <div className="uk-overlay uk-position-bottom uk-dark">
                                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-inline">
                                <img src={PetIt} alt=""></img>
                                <div className="uk-overlay uk-overlay-default uk-position-bottom">
                                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid='true'>
                        <div>
                            <div id="pet-it" className="uk-card uk-card-default uk-card-body my-card" style={{backgroundImage: `url(${PetIt})`}}></div>
                        </div>
                        <div>
                            <div id="bullet-journal-squared" className="uk-card uk-card-default uk-card-body my-card" style={{backgroundImage:`url(${BuJo})`}}></div>
                        </div>
                        <div>
                            <div id="acnh-island-manager" className="uk-card uk-card-default uk-card-body my-card" style={{backgroundImage:`url(${AnimalCrossing})`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;