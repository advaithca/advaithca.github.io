import React from "react";
import { details } from "../details";
import WorkExCard from "./WorkExCard";

export default function WorkEx(){
    const deets = details.WorkExperience
    const deetCards = deets.map((detail)=>(
        <WorkExCard
            contents={detail}
        />
    ))
    return(
        <div className="w-3/4 justify-center items-center m-auto text-left" id="WorkExperience">
            <div className="text-6xl ml-2 font-sans font-extrabold text-dracula-darker-50">
                Work Experience
            </div>
            <div className="flex flex-wrap">
                {deetCards}
            </div>
        </div>
    )
}