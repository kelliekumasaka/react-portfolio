import React from "react";
import "./Project.css";
import AnimalCrossing from '../../images/animal-crossing.jpg';
import PetIt from '../../images/dog-and-person.webp';
import BuJo from '../../images/journal.jpg';
import Employee from '../../images/meeting.jpg';
import Library from '../../images/suz.jpg';
import Viewnify from '../../images/viewnify.jpg';

function Project(){
    return(
        <div id="projects">
            <div id="project-container">
                <div id="project-title-container">
                    <h1 className="project-title" id="project-header">Projects </h1>
                    <h1 className="project-title">so far...</h1>
                </div>
                <div id="grid-container">
                    <div className="uk-grid-large uk-child-width-expand@s uk-text-center" uk-grid='true'>
                        <div>
                            <div id="pet-it" className="uk-card uk-card-body my-card uk-visible-toggle " tabIndex={-1} uk-toggle="target: #petit-title; mode: hover" style={{backgroundImage: `url(${PetIt})`}}>
                                <div className="uk-position-bottom-left my-small-overlay" id="petit-title">
                                    <p className='my-project-text'>PetIt</p>
                                </div>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">PetIt</p>
                                    <p className="my-project-info">Full stack social networking app allowing users to inform each other on the pet-friendliness of employers and establishments using MySQL, React, Node, and Express.</p>
                                    <p className="read-more"><a className="read-more"  target='_blank' rel='noreferrer' href="https://github.com/dimitermusic/petit-frontend">GitHub Repo</a> | <a className="read-more" href="https://petit-petfriendly.herokuapp.com/" target='_blank' rel="noreferrer"> Website</a></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="bullet-journal-squared" className="uk-card uk-card-body my-card uk-visible-toggle" uk-toggle="target: #bujo-title; mode: hover" tabIndex={-1} style={{backgroundImage:`url(${BuJo})`}}>
                                <div className="uk-position-bottom-left my-small-overlay" id="bujo-title">
                                    <p className='my-project-text'>Bullet Journal Squared</p>
                                </div>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">Bullet Journal Squared</p>
                                    <p className="my-project-info">Bullet Journal Squared is a website that allows users to create an account, write journal entries, and view their past thoughts and feelings.</p>
                                    <p className="read-more" ><a className="read-more"  target='_blank' rel='noreferrer' href="https://github.com/Mark-LohseMiranda/bulletjournal">GitHub Repo</a> | <a className="read-more"  target='_blank' rel='noreferrer' href="https://bullet-journal-squared.herokuapp.com/">Website</a></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="acnh-island-manager" className="uk-card uk-card-body my-card uk-visible-toggle" uk-toggle="target: #animal-crossing-title; mode: hover"  tabIndex={-1} style={{backgroundImage:`url(${AnimalCrossing})`}}>
                                <div className='uk-position-bottom-left my-small-overlay' id="animal-crossing-title">
                                    <p className='my-project-text'>Animal Crossing Island Manager</p>
                                </div>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">Animal Crossing Island Manager</p>
                                    <p className="my-project-info">This website was built to help end-users keep track of their villagers and collectibles for Animal Crossing: New Horizons in one central hub.</p>
                                    <p className="read-more"><a className="read-more"  target='_blank' rel='noreferrer' href="https://github.com/Rallen4/project1-animal-crossing">GitHub Repo</a> | <a className="read-more"  target='_blank' rel='noreferrer' href="https://rallen4.github.io/project1-animal-crossing/">Website</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-grid-large uk-child-width-expand@s uk-text-center" uk-grid='true'>
                        <div>
                            <div id="employee-tracker" className="uk-card uk-card-body my-card uk-visible-toggle " tabIndex={-1} uk-toggle="target: #employee-title; mode: hover" style={{backgroundImage: `url(${Employee})`}}>
                                <div className="uk-position-bottom-left my-small-overlay" id="employee-title">
                                    <p className='my-project-text'>Employee Tracker</p>
                                </div>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">Employee Tracker</p>
                                    <p className="my-project-info">This in-terminal app allows the user to create and view employees, departments, and roles within a company database.</p>
                                    <p className="read-more"><a className="read-more" target='_blank' rel='noreferrer' href="https://github.com/kelliekumasaka/employee-tracker">GitHub Repo</a></p>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div id="library" className="uk-card uk-card-body my-card uk-visible-toggle " tabIndex={-1} uk-toggle="target: #library-title; mode: hover" style={{backgroundImage: `url(${Library})`}}>
                                <div className="uk-position-bottom-left my-small-overlay" id="library-title">
                                    <p className='my-project-text'>Book Search Engine</p>
                                </div>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">Book Search Engine</p>
                                    <p className="my-project-info">A website that allows the user to look for books and save them and mark them as read.</p>
                                    <p className="read-more"><a className="read-more" target='_blank' rel='noreferrer' href="https://github.com/kelliekumasaka/book-search-engine">GitHub Repo</a> | <a href="https://kk-book-search-engine.herokuapp.com/" className="read-more" target='_blank' rel='noreferrer'>Website</a></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="viewnify" className="uk-card uk-card-body my-card uk-visible-toggle " tabIndex={-1} uk-toggle="target: #viewnify-title; mode: hover" style={{backgroundImage: `url(${Viewnify})`}}>
                                <div className="uk-position-bottom-left my-small-overlay" id="viewnify-title">
                                    <p className='my-project-text'>Viewnify</p>
                                </div>
                                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                                </div>
                                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                                    <p className="my-project-title">Viewnify</p>
                                    <p className="my-project-info">Viewnify is a movie matching, watch party app that allows you and your friends to swipe, like and dislike movies. You match movies with your friends, and can enjoy a watch party together.</p>
                                    <p className="read-more"><a className="read-more" target='_blank' rel='noreferrer' href="https://github.com/jwhector/viewnify">GitHub Repo</a> | <a href="http://viewnify.herokuapp.com/" className="read-more" target='_blank' rel='noreferrer'>Website</a></p>
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