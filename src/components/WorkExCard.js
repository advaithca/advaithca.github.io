import React from "react";

export default function WorkExCard(props) {
    return (
        <div className="WorkExCard">
            <div className="Position">
                {props.position}
            </div>
            <div className="CompanyName">
                {props.companyName}
            </div>
            <div className="Duration">
                {props.from} - {props.to}
            </div>
            <div className="BriefDescription">
                {props.desc}
            </div>
        </div>
    )
}