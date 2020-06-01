import React from "react"
import dl from "../images/icons/download.png"
import DownLoadFile from "../files/Vladyslav Ganushkevych_CV.pdf"

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
            <a style={cv} href={DownLoadFile} target="_blank" rel="noreferrer" download="Vladyslav Ganushkevych_CV.pdf">
                My CV <img style={download} src={dl} alt="download icon"/>
                </a>
        </div>
    )
}
export default CV;