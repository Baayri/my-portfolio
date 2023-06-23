import React from 'react';
import './navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
    return (
        <div>
            <nav className={"Navbar"}>
                <div className={"NavbarNav"}>
                    <Link className={"NavItem"} to="home" smooth={true} duration={500}>Home</Link>

                    <Link className={"NavItem"} to="about" smooth={true} duration={500}>About</Link>

                    <Link className={"NavItem"} to="skills" smooth={true} duration={500}>Skills</Link>

                    <Link className={"NavItem"} to="contact" smooth={true} duration={500}>Contact</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;