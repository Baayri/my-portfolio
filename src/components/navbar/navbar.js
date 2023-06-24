import React from 'react';
import './navbar.css'
import {Link} from 'react-scroll'
import Github from "../../assets/icons/github-sign-white.png";
import Linkedin from "../../assets/icons/linkedin-white.png";
import Instagram from "../../assets/icons/instagram-white.png";

function Navbar() {

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <nav className={"Navbar"}>
                <div className={"NavbarNav"}>
                    <Link className={"NavItem"} to="home" smooth={true} duration={500}>Home</Link>

                    <Link className={"NavItem"} to="about" smooth={true} duration={500}>About</Link>

                    <Link className={"NavItem"} to="skills" smooth={true} duration={500}>Skills</Link>

                    <Link className={"NavItem"} to="contact" smooth={true} duration={500}>Contact</Link>
                </div>
                <div className={"Mobile"}>
                    <button onClick={()=>{handleClick("https://github.com/Baayri")}}><img src={Github} alt="Github" width={"90%"}></img></button>
                    <button onClick={()=>{handleClick("https://www.linkedin.com/in/baayri/")}}><img src={Linkedin} alt="Linkedin" width={"90%"}></img></button>
                    <button onClick={()=>{handleClick("https://www.instagram.com/baayri")}}><img src={Instagram} alt="Instagram" width={"90%"}></img></button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;