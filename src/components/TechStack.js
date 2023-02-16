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

export default function TechStack(){
    const imagesArray = [Python, C, Cpp, numpy, pandas, pytorch, tf, Flask, react]
    const imageElements = imagesArray.map((image)=>(
        <img src={image} alt='logo' className="w-20"/>
    ))
    return (
        <div className="text-left m-auto items-center justify-center">
            <p className="text-dracula-cullen mb-3">I am familiar with the following technologies and libraries.</p>
            <div className="flex flex-row flex-wrap gap-6 items-center justify-center bg-dracula-dark-900 p-5 rounded-lg drop-shadow m-4 hover:drop-shadow-2xl">
                {imageElements}
            </div>
        </div>
    )
}