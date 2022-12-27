import React from "react";
import linkedinLogo from "./images/linkedinLogo.svg"
import githubLogo from "./images/github.svg"
export default function NavBar() {
    return(
        <div className="NavBar">
            <div className="NavBar--contents">
                <div>
                    <a href="./#About">Home</a>
                </div>
                <div>
                    <a href="./#Education">Education</a>
                </div>
                <div>
                    <a href="./#WorkExperience">Work Experience</a>
                </div>
                <div>
                    <a href="./#Projects">Projects</a>
                </div>
                <div>
                    <a href="./#Contact">Get in touch</a>
                </div>
            </div>
            <div className="NavBar--contents--socials">
                <a href="https://linkedin.com/in/advaith-ca/" target="_blank" rel="noreferrer">
                    <img src={linkedinLogo} alt="linkedin"/>
                </a>
                <a href="https://github.com/advaithca" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="github"/>
                </a>
            </div>
        </div>
    )
}