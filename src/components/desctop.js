import React from "react"
import solitaire from "../images/icons/solitaire.svg"
import quake from "../images/icons/quake.png"
import doom from "../images/icons/Doom.png"
import cs from "../images/icons/cs.png"
const Desktop = () => {
const container = {
    display:"flex",
    flexDirection:"column",
    margin:"0",
    paddingLeft:"10px",
    paddingTop:"10px",
}
const icon = {
    width:"50px",
    height:"50px",
    
}
return(
    <div style={container}>
        <a href="https://www.squidbyte.com/games/spidersolitairewindowsxp/"><img src={solitaire} style={icon} alt="solitaire"/></a>
        <p>Solitaire</p>
        <a href="http://http://www.quakejs.com/"><img src={quake} style={icon} alt="quake"/></a>
        <p>Quake 3</p>
        <a href="https://playclassic.games/games/first-person-shooter-dos-games-online/play-doom-online/play/"><img src={doom} style={icon} alt="doom"/></a>
        <p>Doom</p>
        <a href="https://playclassic.games/games/first-person-shooter-windows-games-online/counter-strike-1-6/play/"><img src={cs} style={icon} alt="CS 1.6"/></a>
        <p>CS 1.6</p>
    </div>
)

}
export default Desktop