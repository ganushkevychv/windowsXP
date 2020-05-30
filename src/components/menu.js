import React, { useState } from 'react';
import { Link } from "gatsby"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Logo from "../images/icons/me.png"
import Start from "../images/icons/startBtn.svg"
import Shutdawn from "../images/icons/shutdown.svg"

const Menu = (props) => {
const onClose = () => {
    window.opener = null;
    window.open("https://romantic-johnson-a557e4.netlify.app/", "_self");
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
const shutdown = {
    width: "30px",
    height:"30px",
}
const shutdownBtn = {
    backgroundColor:"white",
    borderColor:"white",
    outline:"0",
    boxShadow:"none",
    outlineOffset:"0",
    color:"white"
}
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="textStart" style={textStart}><img className="start" src={Start} alt="windows logo"/> start</DropdownToggle>
      <DropdownMenu>
      
      <a href="https://vladyslav-ganushkevych.netlify.app/"><DropdownItem style={header}><img style={logo} src={Logo} alt="my logo"/> Vladyslav Ganushkevych</DropdownItem></a>
        
        <DropdownItem>Action</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Projects</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Games</DropdownItem>
        <DropdownItem><button style={shutdownBtn} onClick={onClose}><img style={shutdown} src={Shutdawn} alt="shutdown"/></button></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Menu;