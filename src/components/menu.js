import React, { useState } from 'react';
import { Link } from "gatsby"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Logo from "../images/icons/me.png"
import Start from "../images/icons/startBtn.svg"

const Menu = (props) => {
const onClose = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
};

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
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="textStart" style={textStart}><img className="start" src={Start} alt="windows logo"/> start</DropdownToggle>
      <DropdownMenu>
      
      <a href="https://vladyslav-ganushkevych.netlify.app/"><DropdownItem style={header}><img style={logo} src={Logo} alt="my logo"/> Vladyslav Ganushkevych</DropdownItem></a>
        
        <DropdownItem>Action</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem><button onClick={onClose}>close</button></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Menu;