import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faBehance, faMediumM } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faGithubAlt, faBehance, faMediumM)

class AboutMeComponent extends Component {

    render() {

        return (
            <div>
                <div className="section1 bgColor1" >
                    <div className="container">
                        <div className="section1Pic">
                            <div className="img" ></div>
                        </div>
                        <div className="section1Desc">
                            <div className="desktop">
                                <h1>ARAS </h1>
                                <h1>EMAMI</h1>
                            </div>
                            <div className="tablet arasH1" >
                                <h1>ARAS </h1>
                                <h1>EMAMI</h1>
                            </div>
                            <p className="section1About" >About me</p>
                            <br />
                            <p>I'm Iman Emamihamzekolaei (nickname: ARAS), 29 years old software engineer, More than 5 years of experience delivering tech solutions. Avid programmer and fast learner, I'm self-organized learning. Obsessed with detail and quality. Always trying to improve development and communication processes. I love simple and elegant solutions for every problem. I’m currently working at <b> <a href="http://www.zinotech.co" target="_blanck">Zino Tech</a></b> where I do all things JavaScript.</p>
                            <p>You can follow me on <a href="https://twitter.com/arasemami">Twitter</a> & Instagram or check out my story on <a href="https://stackoverflow.com/users/story/8890065"> Stack Overflow</a>.</p>
                            <div className="sectionIcons" >
                                <a href="https://linkedin.com/in/arasemami/" className="social-icon"> <FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                <a href="https://www.behance.net/arasemami" className="social-icon"><FontAwesomeIcon icon={['fab', 'behance']} /></a>
                                <a href="https://medium.com/@aras.emami" className="social-icon"><FontAwesomeIcon icon={['fab', 'medium-m']} /></a>
                                <a href="https://github.com/arasemami" className="social-icon">  <FontAwesomeIcon icon={['fab', 'github-alt']} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeComponent;