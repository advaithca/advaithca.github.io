import React from "react";
import TechStack from "./TechStack";
import image from './images/AdvaithCA.jpg';

export default function About(props){
    return(
        <div className="items-center justify-center m-auto" id="About">
            <div className="container items-center justify-center lg:flex sm:block m-auto px-4  pt-20 gap-6 grid-cols-2 w-3/4 lg:columns-2 columns-1 hover:drop-shadow-2xl">
                <div className="w-full items-center justify-center mx-auto">
                    <img src={image} className="rounded-full border-4 border-dracula-red-500 shadow-lg lg:w-max" alt="profile"/>
                </div>
                <div className="w-full items-center m-auto text-left lg:text-l text-dracula-vonCount-50 font-bold">
                    <p className="m-auto md:mt-5 sm:mt-5">
                        {props.bio}
                    </p>
                    <a href="assets/Resume.pdf" download>
                        <button 
                            class="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm 
                                    font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-dracula-red via-dracula-pink 
                                    to-dracula-yellow group-hover:from-red-200 group-hover:via-drracula-red 
                                    group-hover:to-dracula-pink dark:text-white dark:hover:text-dracula-dark-900 
                                    focus:ring-4 focus:outline-none focus:ring-dracula-red-100 dark:focus:ring-dracula-red-400"
                        >
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 
                                        bg-dracula-cullen dark:bg-dracula-dark-900 rounded-md group-hover:bg-opacity-0">
                                Download My Resume
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-3/4 items-center justify-center m-auto mt-8">
                <TechStack />
            </div>
        </div>
    )
}