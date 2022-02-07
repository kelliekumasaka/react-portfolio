import React from "react";
import './Card.css';

export default function Card(props){
    return(
        <div key={props.name} className="uk-width-1-3@l uk-width-1-2@m uk-width-1-1@s my-grid">
            <div>
                <div className="uk-card uk-card-default new-card">
                    <div className="uk-card-media-top images" style={{backgroundImage: `url(${props.background})`}}>
                    </div>
                    <div className="uk-card-body card-info">
                        <h3 className="uk-card-title uk-text-left card-title">{props.name}</h3>
                        <p className="uk-text-left card-description">{props.description}</p>
                    </div>
                    <div className="card-footer">
                        { props.website ? <p className="read-more"><a className="read-more"  target='_blank' rel='noreferrer' href={props.repo}>GitHub Repo</a>  | <a className="read-more" href={props.website} target='_blank' rel="noreferrer"> Website</a></p> : <p className="read-more"><a className="read-more"  target='_blank' rel='noreferrer' href={props.repo}>GitHub Repo</a></p> }
                    </div>
                </div>
            </div>
        </div>
    )
}