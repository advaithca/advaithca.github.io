import React from "react";
import EdCard from "./EdCard";

export default function Education(props) {
    const arrayOfDeets = props.EdDetails
    const EducationDetails = arrayOfDeets.map((detail)=>(
        <EdCard
            DegreeName = {detail.name}
            InstituteName = {detail.institution}
            from = {detail.from}
            to = {detail.to}
            Remarks = {detail.remarks}
        />
    ))

    return (
        <div className="Main" style={{backgroundColor:'#6272a4'}} id="Education">
            <div className="Education">
                <div className="Education--header">
                    Education Details
                </div>
                <div className="Education--details">
                    {EducationDetails}
                </div>
            </div>
        </div>
    )
}