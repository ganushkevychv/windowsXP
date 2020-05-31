import React from 'react';
import moment from "moment"
import Cal from "../components/calendar"
import Menu from "../components/menu"
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';


const Footer = () => {

const m = moment();

  let style = {
    backgroundColor: "blue",    
    borderTop: "1px solid #E7E7E7",
    paddingRight:"5px",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "35px",
    width: "100%",
    marginTop: "10px",
    verticalAlign:"middle",
}

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}
  return(
    <div>
    <div style={phantom}/>
    <div style={style}>
     <p className="pBtn">
     <Button className="date" id="UncontrolledPopover" type="button">
     {m.format("LT")}
      </Button>
      <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
  <PopoverHeader style={{textAlign:"center", backgroundColor:"blue",}}>Calendar {m.format("LL")}</PopoverHeader>
        <PopoverBody>
        <Cal/>
        </PopoverBody>
      </UncontrolledPopover>
     </p>
<Menu/>
      </div>
      </div>
  )
  }
  export default Footer
