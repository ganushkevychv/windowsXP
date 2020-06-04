import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Logo from "../images/icons/me.png"
import Start from "../images/icons/startBtn.svg"
import solitaire from "../images/icons/solitaire.svg"
import quake from "../images/icons/quake.png"
import doom from "../images/icons/Doom.png"
import cs from "../images/icons/cs.png"
import Tab from "../components/tab"
import Reload from '../components/reload';
import CV from '../components/cv';



const Menu = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const tog = () => setModal(!modal);

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
const containerIcon = {
  display:"flex",
  flexDirection:"row",
  textAlign:"center",
  margin:"0",
  paddingLeft:"10px",
  paddingTop:"10px",
}
const icon = {
  width:"50px",
  height:"50px",
  
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
        <DropdownItem>
              <div>
      <span color="danger" onClick={tog}>fdgfd</span>
      <Modal isOpen={modal} toggle={tog} className={className}>
        <ModalHeader toggle={tog}>Games</ModalHeader>
        <ModalBody>
        <div style={containerIcon}>
        <a href="https://www.squidbyte.com/games/spidersolitairewindowsxp/"><img src={solitaire} style={icon} alt="solitaire"/></a>
        <p>Solitaire</p>
        <a href="http://http://www.quakejs.com/"><img src={quake} style={icon} alt="quake"/></a>
        <p>Quake 3</p>
        <a href="https://playclassic.games/games/first-person-shooter-dos-games-online/play-doom-online/play/"><img src={doom} style={icon} alt="doom"/></a>
        <p>Doom</p>
        <a href="https://playclassic.games/games/first-person-shooter-windows-games-online/counter-strike-1-6/play/"><img src={cs} style={icon} alt="CS 1.6"/></a>
        <p>CS 1.6</p>
    </div>
        </ModalBody>
      </Modal>
    </div>
        </DropdownItem>
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