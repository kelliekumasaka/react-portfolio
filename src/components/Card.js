import React from "react";
import './Card.css';

export default function Card(props){
    return(
        <div key={props.name} className="uk-width-1-3@l uk-width-1-2@m uk-width-1-1@s">
            <div className="uk-card uk-card-body my-card  uk-visible-toggle" key={props.id} tabIndex={-1} uk-toggle={`target: #${props.id}-title; mode: hover`} style={{backgroundImage: `url(${props.background})`}}>
                <div className="uk-position-top-left my-small-overlay" key={`${props.name}-${props.id}`} id={`${props.id}-title`}>
                    <p className='overlay-titles'>{props.name}</p>
                </div>
                <div className="uk-overlay uk-overlay-primary uk-position-cover my-overlay uk-invisible-hover">
                </div>
                <div className="uk-position-top-left my-project-text uk-invisible-hover">
                    <div>
                        <p className="overlay-titles">{props.name}</p>
                        <p className="my-project-info">{props.description}</p>
                    </div>
                    <p className="links"><a className="read-more"  target='_blank' rel='noreferrer' href={props.repo}>GitHub Repo</a> | <a className="read-more" href={props.website} target='_blank' rel="noreferrer"> Website</a></p>
                </div>
            </div>
        </div>
    )
}