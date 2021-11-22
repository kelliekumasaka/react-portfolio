import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Work(){
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work" 
                contentStyle={{ background: 'rgb(249,199,132)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(249,199,132)' }}
                date="November 2021"
                iconStyle={{ background: 'rgb(249,199,132)', color: '#4E598C' }}
            >
                <a href="https://bullet-journal-squared.herokuapp.com/" target="_blank"><h3 className="vertical-timeline-element-title">Bullet Journaling Squared</h3>
                <h4 className="vertical-timeline-element-subtitle">Front-End Developer</h4></a>
                <p>
                Bullet Journal Squared is a website that allows users to create an account, write journal entries, and view their past thoughts and feelings.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(249,199,132)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(249,199,132)' }}
                date="October 2021"
                iconStyle={{ background: 'rgb(249,199,132)', color: '#fff' }}
            >
                <a href="https://rallen4.github.io/project1-animal-crossing/" target="_blank"><h3 className="vertical-timeline-element-title">Animal Crossing Island Manager</h3>
                <h4 className="vertical-timeline-element-subtitle">Front-End Engineer</h4></a>
                <p>
                This website was built to help end-users keep track of their villages and manage their collectibles of all the different parts of Animal Crossing: New Horizons in one central hub.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(252,175,88)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(252,175,88)' }}
                date="October 2021"
                iconStyle={{ background: 'rgb(252,175,88)', color: '#fff' }}
            >
                <a href="https://github.com/kelliekumasaka/employee-tracker" target="_blank"><h3 className="vertical-timeline-element-title">Employee Tracker</h3>
                </a>
                <p>
                This in-terminal app allows the user to create and view employees, departments, and roles within a company database.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(252,175,88)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(252,175,88)' }}
                date="October 2021"
                iconStyle={{ background: 'rgb(252,175,88)', color: '#fff' }}
            >
                <a href="https://kelliekumasaka.github.io/weather-dashboard/" target="_blank"><h3 className="vertical-timeline-element-title">Weather Dashboard</h3>
                </a>
                <p>
                This website allows you to search up any city of your choice and it will display the current weather at the top. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(252,175,88)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(252,175,88)' }}
                date="November 2021"
                iconStyle={{ background: 'rgb(252,175,88)', color: '#fff' }}
            >
                <a href="https://kelliekumasaka-fitness-tracker.herokuapp.com/" target="_blank"><h3 className="vertical-timeline-element-title">Fitness Tracker</h3>
                </a>
                <p>
                This website allows you to track your workout progress and put that data into a MongoDB database, so you can track your progress over the past week and see what you've done most recently.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Work;