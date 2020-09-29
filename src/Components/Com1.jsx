import React,{Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedinIn , faGithubAlt , faBehance, faMediumM} from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedinIn,faGithubAlt , faBehance , faMediumM)

class Com1 extends Component{

    render(){
       
        return(

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
                                <br/>
                                <p>
                                I'm Iman Emami (nickname: ARAS), 29 years old software engineer, living in Tehran now. I was born and Raised in Iran. I’m currently working at Zino where I do all things JavaScript & TypeScript.
                                </p>
                                <p>
                                You can follow me on <a href="https://twitter.com/arasemami">Twitter</a> & Instagram or check out my story on <a href="https://stackoverflow.com/users/story/8890065"> Stack Overflow</a>.
                                </p>
                                <p className="sectionIcons" >
                            
                                    <a href="https://linkedin.com/in/arasemami/"> <FontAwesomeIcon className="" icon={['fab', 'linkedin-in']} /></a>
                                    <a href="https://www.behance.net/arasemami"><FontAwesomeIcon className="" icon={['fab', 'behance']} /></a>
                                    <a href="https://medium.com/@aras.emami"><FontAwesomeIcon className="" icon={['fab', 'medium-m']} /></a>
                                    <a href="https://github.com/arasemami">  <FontAwesomeIcon className="" icon={['fab', 'github-alt']} /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

        );
    }
}

export default Com1;