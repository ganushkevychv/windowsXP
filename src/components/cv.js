import React from "react"
import {Link} from "gatsby"
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
            <Link style={cv} to="../public/cv/Vladyslav Ganushkevych_CV.pdf" download="Vladyslav Ganushkevych_CV.pdf">
                My CV <img style={download} src={dl} alt="download icon"/>
                </Link>
        </div>
    )
}
export default CV;