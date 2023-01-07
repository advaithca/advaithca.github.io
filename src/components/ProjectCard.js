import React from "react";

export default function ProjectCard(props) {
    return (
        <div className="Project--item">
            <div className="Project--preview">
                <img src={props.preview} alt="Preview"/>
            </div>
            <div className="Project--name">
                {props.name}
            </div>
            <div className="Project--duration">
                {props.from} - {props.to}
            </div>
            <div className="Project--descr">
                {props.descr}
            </div>
            <div className="Project--link">
                <a href={props.link} target="_blank" rel="noreferrer">Click Me</a> to see the project.
            </div>
        </div>
    )
}