import React from "react";

export default function EdCard(props){
    return (
        <div className="EdCard">
            <div className="Degree--name">
                {props.DegreeName}
            </div>
            <div className="Degree--institution">
                {props.InstituteName}
            </div>
            <div className="Degree--date">
                {props.from}-{props.to}
            </div>
            <div className="Degree--remarks">
                {props.Remarks}
            </div>
        </div>
    )
}