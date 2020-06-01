import React from "react"

const CV = () => {

    const cv = {
        textDecoration:"none",
        color:"black",
    }

    return (
        <div>
            <a style={cv} href="../cv/Vladyslav Ganushkevych_CV.pdf" download="Vladyslav Ganushkevych_CV.pdf">My CV</a>
        </div>
    )
}
export default CV;