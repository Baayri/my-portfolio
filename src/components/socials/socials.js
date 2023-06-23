import React from 'react';
import './socials.css'
import Github from '../../assets/icons/github-sign.png'
import Linkedin from '../../assets/icons/linkedin.png'
import Instagram from '../../assets/icons/instagram.png'

function Socials() {

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <div className={"Card"}>
                <button onClick={()=>{handleClick("https://github.com/Baayri")}}><img src={Github} alt="Github" width={"90%"}></img></button>
                <button onClick={()=>{handleClick("https://www.linkedin.com/in/baayri/")}}><img src={Linkedin} alt="Linkedin" width={"90%"}></img></button>
                <button onClick={()=>{handleClick("https://www.instagram.com/baayri")}}><img src={Instagram} alt="Instagram" width={"90%"}></img></button>
            </div>
        </div>
    );
}

export default Socials;