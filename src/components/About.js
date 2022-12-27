import React from "react";
import { useState } from "react";
import Resume from "./images/resume.png";
import WorkedWith from "./WorkedWith";

export default function About(props){
    const [resume, setResume] = useState(false)

    function clicker(){
        setResume((previous)=>(!previous))
    }
    return (
        <div classaName="Main">
            <div className="About" id="About">
                <div className="About--col1">
                    <div className="About--Name">
                        {props.name}
                    </div>
                    <div className="About--purpose">
                        {props.purpose}
                    </div>
                    <button onClick={clicker}>
                    {(resume&&"Un-see the Resume") || (!resume&&"See my Resume")}
                    </button>
                </div>
                <div className="circular-image">
                    <img src={props.picture} className="Profile--image" alt="Advaith's profile"/>
                </div>
            </div>
            {
                resume && <div className="Resume">
                            <img src={Resume} className='Resume--img' alt="resume"/>
                          </div>
            }
            <WorkedWith />
        </div>
    )
}