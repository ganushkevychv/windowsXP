import React from "react";

const Tab = () => {

    const onClose = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
      };
      return (
        <div className="App">
          <button onClick={onClose}>Close</button>
        </div>
      );  
}
export default Tab;
