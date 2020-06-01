import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Logo from "../images/icons/me.png"
import Start from "../images/icons/startBtn.svg"
import Tab from "../components/tab"
import Reload from '../components/reload';
import CV from '../components/cv';


const Menu = (props) => {


const [dropdownOpen, setOpen] = useState(false);
const textStart = {
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    padding:"4px",
}
const logo = {
    width:"50px",
    height:"50px",
    border:"2px solid lightgrey",
}
const header = {
    backgroundColor:"blue",
    marginTop:"-8px",
    marginBottom:"9px",
    color:"white",
    fontWeight:"bold",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
}
const menuFooter = {
  display:"flex",
  flexDirection:"row-reverse",
  justifyContent:"space-evently",
  align:"middle",
  backgroundColor:"blue",
  marginTop:"8px",
  marginBottom:"-9px",
  color:"white",
  fontWeight:"bold",
  borderBottomRightRadius: "10px",
  borderBottomLeftRadius: "10px",
  marginRight:"20px",
}


  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="textStart" style={textStart}><img className="start" src={Start} alt="windows logo"/> start</DropdownToggle>
      <DropdownMenu>
      
      <a href="https://vladyslav-ganushkevych.netlify.app/"><DropdownItem style={header}><img style={logo} src={Logo} alt="my logo"/> Vladyslav Ganushkevych</DropdownItem></a>
        
        <DropdownItem>
          <CV/>
        </DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Projects</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Games</DropdownItem>
        <DropdownItem style={menuFooter}>
            <Tab/>  
            <Reload/>
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Menu;