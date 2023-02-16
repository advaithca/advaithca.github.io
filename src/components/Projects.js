import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects(props){
    return(
        <div className="w-3/4 justify-center items-center m-auto text-left" id="Projects">
            <div className="text-6xl ml-2 font-sans font-extrabold text-dracula-darker-50">
                Projects
            </div>
            <div>
                <ProjectCard
                    details={props.contents}
                />
            </div>
        </div>
    )
}