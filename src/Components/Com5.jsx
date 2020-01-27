import React,{Component} from 'react';
import icon1 from '../Assets/images/icon-01.png'
import icon2 from '../Assets/images/icon-02.png'
import icon3 from '../Assets/images/icon-03.png'
import icon4 from '../Assets/images/icon-04.png'
import icon5 from '../Assets/images/icon-05.png'
import icon6 from '../Assets/images/icon-06.png'
import icon7 from '../Assets/images/icon-07.png'
import icon8 from '../Assets/images/icon-08.png'
import icon9 from '../Assets/images/icon-09.png'
import icon10 from '../Assets/images/icon-10.png'
import icon11 from '../Assets/images/icon-11.png'
import icon12 from '../Assets/images/icon-12.png'

class Com5 extends Component{

    render(){
       
        return(

            <div>
                <div className="section5 bgColor3">
                    <div className="container" >
                            <div className="abilitiesTitle " >
                                <h1 className="color1">Abilities</h1>
                                <p className="" >
“There is enough space for everyone in the world, so instead of trying to find another place, try to find your place. “
Charlie Chaplin                 </p>
                            </div>
                            <div className="abilitiesDesc" >
                                <div className="abilitiesTitleBox">
                                    <h1>Skills</h1>
                                </div>
                                <div className="skills" >
                                    <div>
                                        <span>Bootstrap Framework</span>
                                        <span>CSS & Sass</span>
                                        <span>HTML</span>
                                        <span>JSON</span>
                                        <span>MySQL</span>
                                        <span>PHP Laravel</span>
                                        <span>XML</span>
                                        <span>Builder Pattern</span>
                                        <span>Command spanne Interface</span>
                                    </div>
                                    <div>
                                        <span>Gulp & Grunt</span>
                                        <span>Webpack</span>
                                        <span>Babel</span>
                                        <span>Polymer</span>
                                        <span>Kendo</span>
                                        <span>Green Sock</span>
                                        <span>Design Patterns</span>
                                        <span>Jasmine, Karma and Enzyme</span>
                                        <span>Jira</span>
                                    </div>
                                </div>
                        
                            </div>
                            <div className="abilitiesFavor" >
                                <div className="abilitiesTitleBox">
                                    <h1>Favorite JS & Tools</h1>
                                </div>
                                <div className="abilitiesFavorPic">
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon1} />
                                        <span className="tooltip desktop" >React.Js</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon2} />
                                        <span className="tooltip desktop" >Redux</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon3} />
                                        <span className="tooltip desktop" >Git</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon4} />
                                        <span className="tooltip desktop" >Slack</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon5} />
                                        <span className="tooltip desktop" >npm</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon6} />
                                        <span className="tooltip desktop" >Figma</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon7} />
                                        <span className="tooltip desktop" >Zeplin</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon8} />
                                        <span className="tooltip desktop" >Ubuntu</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon9} />
                                        <span className="tooltip desktop" >Webpack</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon10} />
                                        <span className="tooltip desktop" >Laravel</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon11} />
                                        <span className="tooltip desktop" >Stack Overflow</span>
                                    </p>
                                    <p className="tooltipBox" >
                                        <img alt="psd" src={icon12} />
                                        <span className="tooltip desktop" >Maravel</span>
                                    </p>

                                </div>
                            </div>
                            <div className="abilitiesLang" >
                                <div className="abilitiesTitleBox">
                                    <h1>Languages</h1>
                                </div>
                                <div className="abilitiesLangBox">
                                    <p>Persian<span> (Mother tongue)</span></p>
                                    <p>English<span> (Daily use)</span></p>
                                    <p>Turkish<span> (Professional)</span></p>
                                    <p>Russian<span> (Basickly)</span></p>
                                </div>
                            </div>
                         
                    </div>
                </div>
            </div>

        );
    }
}

export default Com5;