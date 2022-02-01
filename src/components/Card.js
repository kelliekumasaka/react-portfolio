import React from "react";
import './Card.css';

export default function Card(props){
    return(
        <div key={props.name} className="uk-width-1-3@l uk-width-1-2@m uk-width-1-1@s">
            <div className="uk-card uk-card-body my-card  uk-visible-toggle " tabIndex={-1} uk-toggle={`target: #${props.id}-title; mode: hover`} style={{backgroundImage: `url(${props.background})`}}>
                <div className="uk-position-bottom-left my-small-overlay" id={`${props.id}-title`}>
                    <p className='my-project-text'>{props.name}</p>
                </div>
                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                </div>
                <div className="uk-overlay uk-position-top my-project-text uk-invisible-hover">
                    <p className="my-project-title">{props.name}</p>
                    <p className="my-project-info">{props.description}</p>
                    <p className="read-more"><a className="read-more"  target='_blank' rel='noreferrer' href={props.repo}>GitHub Repo</a> | <a className="read-more" href={props.website} target='_blank' rel="noreferrer"> Website</a></p>
                </div>
            </div>
        </div>
    )
}