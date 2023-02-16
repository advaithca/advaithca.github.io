import React from "react";

import { details } from "../details";
import EdCard from "./EdCard";

export default function Education(){
    const edDetails = details.Education
    const EdCards = edDetails.map((detail)=>(
        <EdCard 
            contents={detail}
        />
    ))
    return(
        <div className="w-3/4 justify-center items-center m-auto text-left" id="Education">
            <div className="text-6xl ml-2 font-sans font-extrabold text-dracula-darker-50">Education</div>
            <div className="flex flex-wrap">
                {EdCards}
            </div>
        </div>
    )
}