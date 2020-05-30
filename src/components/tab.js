import React from "react";
import shutdown from "../images/icons/shutdown.svg"
const Tab = () => {

    const onClose = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
      };
      const btn = {
        width:"20px",
        height:"20px",
        outline:"none",
        borderShadow:"none",
        border:"none",
        align:"middle",
    }
      return (
        <div>Turn off computer {""} 
          <button onClick={onClose}><img style={btn} src={shutdown} alt="shutdown btn"/></button>
          
        </div>
      );  
}
export default Tab;
