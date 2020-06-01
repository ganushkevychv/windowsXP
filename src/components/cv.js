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
            <a style={cv} href="../cv/Vladyslav Ganushkevych_CV.pdf" download="Vladyslav Ganushkevych_CV.pdf">
                My CV <img style={download} src={dl}/>
                </a>
        </div>
    )
}
export default CV;