import React from "react";
import C from "./images/C_Programming_Language.svg"
import Cpp from "./images/ISO_C++_Logo.svg"
import Flask from "./images/Flask_logo.svg"
import Python from "./images/Python-logo-notext.svg"
import numpy from "./images/NumPy_logo_2020.svg"
import pandas from "./images/Pandas_logo.svg"
import pytorch from "./images/PyTorch_logo_black.svg"
import react from "./images/React-icon.svg"
import tf from "./images/Tensorflow_logo.svg"

export default function WorkedWith(){
    const imagesArray = [C, Cpp, Python, numpy, pandas, pytorch, tf, Flask, react]
    const imageElements = imagesArray.map((image)=>(
        <img src={image} alt='logo' className="logos--indvdl"/>
    ))
    return (
        <div className="WorkedWith">
            <p className="WorkedWith--header">Familiar With</p>
            <div className="logos">
                {imageElements}
            </div>
        </div>
    )
}