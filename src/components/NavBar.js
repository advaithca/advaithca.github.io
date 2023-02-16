import React from "react";
import logo from "./images/markofthebeast_transparent.png";
import githubLogo from "./images/github.svg";
import linkedinLogo from "./images/linkedinLogo.svg";

export default function NavBar(){
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return(
        <nav className="flex items-center justify-between flex-wrap bg-dracula-nosferatu p-6 sticky top-0 z-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="mr-5" src={logo} style={{'width': '60px', 'height':'54px'}} alt="Mark of the beast"/>
                <span className="font-semibold text-3xl tracking-tight font-mono"><a href="#Home">Advaith C A</a></span>
            </div>
            <div className="block lg:hidden">
                <button id="menu-button" className="flex items-center px-3 py-2 cursor-pointer  border rounded text-dracula-cullen border-dracula-dark hover:text-dracula-cullen-400 hover:border-dracula-buffy"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <svg className="h-6 w-6 cursor-pointer lg:hidden block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto" + (navbarOpen ? "" : " hidden")} id="menu">
                <div className="text-lg lg:flex-grow">
                    <a href="#About" className="block mt-4 lg:inline-block lg:mt-0 lg:mx-5 text-dracula-cullen border-dracula-buffy hover:text-dracula-cullen-400 hover:border-white mr-4">
                        About
                    </a>
                    <a href="#Education" className="lg:mx-5 block mt-4 lg:inline-block lg:mt-0 text-dracula-cullen border-dracula-buffy hover:text-dracula-cullen-400 hover:border-white mr-4">
                        Education
                    </a>
                    <a href="#WorkExperience" className="lg:mx-5 block mt-4 lg:inline-block lg:mt-0 text-dracula-cullen border-dracula-buffy hover:text-dracula-cullen-400 hover:border-white mr-4">
                        Work-Experience
                    </a>
                    <a href="#Projects" className="lg:mx-5 block mt-4 lg:inline-block lg:mt-0 text-dracula-cullen border-dracula-buffy hover:text-dracula-cullen-400 hover:border-white mr-4">
                        Projects
                    </a>
                    <a href="mailto:advaith29042002@gmail.com" className="lg:mx-5 block mt-4 lg:inline-block lg:mt-0 text-dracula-cullen border-dracula-buffy hover:text-dracula-cullen-400 hover:border-white mr-4">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className={"flex items-center flex-shrink-2 text-white space-x-8 lg:flex lg:items-center lg:w-auto" + (navbarOpen ? "" : " hidden")}>
                <a href="https://github.com/advaithca" className="block mt-4 lg:inline-block lg:mt-0 hover:shadow-dracula-pink-600" target="_blank" rel="noreferrer">
                    <button>
                        <img src={githubLogo} style={{'width':'30px'}} alt="github"/>
                    </button>
                </a>
                <a href="https://linkedin.com/in/advaith-ca" className="block mt-4 lg:inline-block lg:mt-0 hover:shadow-dracula-pink-600" target="_blank" rel="noreferrer">
                    <button>
                        <img src={linkedinLogo} style={{'width':'30px'}} alt="linkedin"/>
                    </button>
                </a>
            </div>
        </nav>
    )
}