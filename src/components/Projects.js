import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects(props){
    const deets = props.projectDeets
    const projectCards = deets.map((project)=>(
        <ProjectCard
            name={project.name}
            descr={project.description}
            preview={project.preview}
            from={project.from}
            to={project.to}
            link={project.link}
        />
    ))
    
    
    return(
        <div className="Main" style={{'backgroundColor':'#6272a4'}} id="Projects">
            <div className="Projects">
                <div className="Projects--header">
                    Projects
                </div>
                <p style={{'color':'white'}}>
                    To see more of my projects, see my GitHub, it is linked in the navBar.
                </p>
                    <div className="Projects--horizontal" id="container">
                        {projectCards}
                    </div>
            </div>
        </div>
    )
}