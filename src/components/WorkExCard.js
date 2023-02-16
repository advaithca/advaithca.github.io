import React from "react";

export default function WorkExCard(props){
    // console.log(props)
    return(
        <div class="max-w rounded overflow-hidden drop-shadow text-left bg-dracula-darker-500 m-3 hover:drop-shadow-2xl">
            <div class="px-6 py-4">
                <div class="font-bold text-2xl mb-2 border-b-2">{props.contents.position}</div>
                <div class="text-dracula-cullen text-base border-b-2 border-dotted border-dracula-darker-200">
                    {props.contents.company}
                </div>
                <div class="text-dracula-cullen-300 text-base italic">
                    {props.contents.from}--{props.contents.to}
                </div>
                <div class="text-dracula-cullen-100 text-xl">
                    {props.contents.description}
                </div>
            </div>
        </div>
    )
}