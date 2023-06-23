import React from 'react';
import './skills.css'
import ReactIcon from '../../assets/images/logo192.png'
import JavaScriptIcon from '../../assets/icons/java-script.png'
import HtmlIcon from '../../assets/icons/html-5.png'
import CsstIcon from '../../assets/icons/css-3.png'
import JavaIcon from '../../assets/icons/java2.png'
import SpringIcon from '../../assets/icons/spring.png'
import AngularIcon from '../../assets/icons/angular.png'

function Skills() {
    return (
        <div>
            <section id={"skills"} className={"Content"}>
                <h1>MY SKILLS</h1>
                <div className={"SkillsGrid"}>
                    <div className={"Skills"}><img src={JavaIcon} alt="" width={"35px"}/><span>Java</span></div>
                    <div className={"Skills"}><img src={SpringIcon} alt="" width={"35px"}/><span>SpringBoot</span></div>
                    <div className={"Skills"}><img src={JavaScriptIcon} alt="" width={"35px"}/><span>JavaScript</span></div>
                    <div className={"Skills"}><img src={ReactIcon} alt="" width={"35px"}/><span>React JS</span></div>
                    <div className={"Skills"}><img src={AngularIcon} alt="" width={"35px"}/><span>Angular</span></div>
                    <div className={"Skills"}><img src={HtmlIcon} alt="" width={"35px"}/><span>HTML</span></div>
                    <div className={"Skills"}><img src={CsstIcon} alt="" width={"35px"}/><span>CSS</span></div>
                </div>
            </section>
        </div>
    );
}

export default Skills;