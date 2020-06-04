import React from "react"
import reload from "../images/icons/reboot.png"
const Reload = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }
    const btn = {
        width:"20px",
        height:"20px",
        outline:"none",
        borderShadow:"none",
        border:"none",
        align:"middle",
    }
    return (
        <div>Restart {""}  
        <span onClick={refreshPage}><img style={btn} src={reload} alt="reload bt"/> </span>
        </div>
      
    )
}
export default Reload;