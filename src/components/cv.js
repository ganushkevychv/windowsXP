import React from "react"
import dl from "../images/icons/download.png"

const CV = () => {

    const cv = {
        textDecoration:"none",
        color:"black",
    }
    const download = {
        width:"20px",
        height:"20px",
    }

    return (
        <div>
            <a style={cv} href="https://romantic-johnson-a557e4.netlify.app/cv/Vladyslav%20Ganushkevych_CV.pdf" download="Vladyslav Ganushkevych_CV.pdf">
                My CV <img style={download} src={dl}/>
                </a>
        </div>
    )
}
export default CV;