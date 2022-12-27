import React from "react";
import WorkExCard from "./WorkExCard";

export default function WorkExperience(props) {
    const deets = props.WorkDetails
    const deetCards = deets.map((detail)=>(
        <WorkExCard
            position={detail.position}
            companyName={detail.company}
            from={detail.from}
            to={detail.to}
            desc={detail.description}
        />
    ))
    return (
        <div className="Main" id="WorkExperience">
            <div className="WorkExperience">
                <div className="WorkExperience--header">
                    Work Experience
                </div>
                <div className="WorkExperience--details">
                    {deetCards}
                </div>
            </div>
        </div>
    )
}