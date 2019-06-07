import React,{Component} from 'react';
import js from '../Assets/images/js.svg'
import vilaapp from '../Assets/images/vilaapp.svg'
import graduate from '../Assets/images/graduate-diploma.png'
import arasico from '../Assets/images/arasico.png'
import studioone from '../Assets/images/studi-one.png'
import etgi from '../Assets/images/etgigrup.png'
import advensis from '../Assets/images/advensis.png'
import didikoas from '../Assets/images/didikojast.png'
import optimus from '../Assets/images/optimus.png'
import tond from '../Assets/images/tondtond.png'
import arajob from '../Assets/images/arajobs.png'
import saghf from '../Assets/images/saghfenoo.png'
import bebelo from '../Assets/images/bebello.png'
import tarsim from '../Assets/images/tarsimnoor.png'
import falang from '../Assets/images/falang.png'
import zagrot from  '../Assets/images/zagrot.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas,  faMapMarkerAlt , faGlobe } from '@fortawesome/free-solid-svg-icons'


library.add(fas ,faMapMarkerAlt , faGlobe)

class Com4 extends Component{

    render(){
       
        return(

            <div>
                <div className="section4 bgColor5">
                    <div className="container">
                        <div className="section4Title">
                            <h1 className="color1" >Experiences</h1>
                            <p>“There is enough space for everyone in the world, so instead of trying to find another place, try to find your place. “
Charlie Chaplin
                            </p>
                        </div>

                        <div className="education">
                            <div className="educationTitle" >
                                <h1>Educations</h1>
                            </div>
                       

                            <div className="educationDesc">
                                <div className="educationDescName" >
                                    <h1 className="color1">Amirkabir University of Technology</h1>
                                    <span>2017</span>
                                    <img src={graduate} alt="graduate-diploma"/>
                                </div>
                                <div className="educationDescProject">
                                    <h1>
                                        Course - Scrum project management
                                    </h1>
                                    <span>
                                        Scrum is an agile framework for managing work with an emphasis on software development. It is designed for development teams of between three to nine members who break their work into actions that can, This course thought me about the project management, why it has such tremendous potential, and how to use it effectively.
                                    </span>
                                    <span className="educationIcon">
                                        <span>
                                            <FontAwesomeIcon className="color1" icon={['fas', 'map-marker-alt']} />
                                            <a className="color1">Online Course</a> 
                                        </span>
                                       
                                    </span>

                                </div>
                            </div>
                           


                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">MSI Academy</h1>
                                    <span>2011</span>
                                    <img src={graduate} alt="graduate-diploma"/>
                                </div>
                                <div className="educationDescProject">
                                    <h1>
                                        Course - Time Management, Team Work, Problem Solving, Introduction to 5s
                                    </h1>
                                    <span>
                                    Here I learned how can manage my time, how can working with a team and solve the problem and how can find a solution to solving a problem. I learn about ISO 9001 rules.
                                    </span>
                                    <span className="educationIcon">
                                        <span>
                                            <FontAwesomeIcon className="color1" icon={['fas', 'map-marker-alt']} />
                                            <a className="color1">Online Course</a>
                                        </span>
                                    </span>

                                </div>
                            </div>



                        <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">Mazandaran University of Science and Technology</h1>
                                    <span>2012</span>
                                    <img src={graduate} alt="graduate-diploma"/>
                                </div>
                                <div className="educationDescProject">
                                    <h1>
                                        Bachelor - Computer Science (software engineering)
                                    </h1>
                                    <span>
                                    The education was mainly C#-based programming, but I also learned about SQL, PHP, MVC, UML and more. During my time in college, I specialized in multimedia. Here I learned about gaming -the importance of OOP-, web- and user experience and design.
                                    </span>
                                    <span className="educationIcon">
                                        <span>
                                            <FontAwesomeIcon className="color1" icon={['fas', 'map-marker-alt']} />
                                            <a className="color1">Babol, Iran</a>
                                        </span>
                                    </span>

                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">Imam Khomeini University</h1>
                                    <span>2009 - 2012</span>
                                    <img src={graduate} alt="graduate-diploma"/>
                                </div>
                                <div className="educationDescProject">
                                    <h1>
                                        Associate Degree - software engineering
                                    </h1>
                                    <span>
                                    I graduated university, where I enjoyed doing science, math, Programming and graphic designing.
                                    </span>
                                    <span className="educationIcon">
                                        <span>
                                            <FontAwesomeIcon className="color1" icon={['fas', 'map-marker-alt']} />
                                            <a className="color1">Behshahr, Iran</a>
                                        </span>
                                    </span>

                                </div>
                            </div>


                  
                            
                        </div>

                        {/* -------------- start Career  ----- */}
                        <div className="career">
                            <div className="educationTitle">
                                <h1>
                                Careers
                                </h1>
                            </div>
                            
                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">ARASICO</h1>
                                    <span>2005 - 2010</span>
                                    <p className="educationDescPic">
                                        <img alt="ARASICO" src={arasico} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1> Software and Web Developer</h1>
                                    <p>
                                    everything started from here. ARASICO first was a little developer team and after growing and Create more project It was officially established in 2008 as a software development company (Ara system). There I learned to apply my knowledge of Visual Basic, C#, SQL Server, network configuration and ASP.net. I designed and developed their web-bases solutions. Like the online order system in 2006.
                                    </p>
                                    <span className="educationIcon">
                                        <span className="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Iran , Tehran</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.arasico.com">www.arasico.com</a>
                                        </span>

                                       
                                    </span>
                                </div>
                            </div>


                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">ZAGROT</h1>
                                    <span>2010 - 2012</span>
                                    <p className="educationDescPic">
                                        <img alt="ZAGROT" src={zagrot} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1> Software Developer</h1>
                                    <p>I start working with web frameworks and libraries like javascript, Backbone, Lodash, Underscore, CSS3, Sass, HTML5, Bootstrap.<br/>
                                        I learn to work with B2B system and B2C.
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Iran , Tehran</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.zagrot.com">www.zagrot.com</a>
                                        </span>

                                    </span>
                                </div>
                            </div>


                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">STUDIO ONE</h1>
                                    <span>2012 - 2013</span>
                                    <p className="educationDescPic">
                                        <img alt="STUDIO ONE" src={studioone} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>UI/UX Desginer & Front end developer</h1>
                                    <p>
                                    Right after left my country, I started working for STUDIO ONE: a full-service internet agency. I developed a homemade CMS, CRM, and e-mail marketing system. The CMS was used for dozens of clients, as well as the e-mail marketing system. 
I also did a lot of custom-made websites and applications. I learn to use PHP Laravel framework, javascript like Backbone.js, Jquery, underscore.js and ...
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Armenia, yerevan</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.studio-one.am">www.studio-one.am</a>
                                        </span>


                                    </span>
                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">ETGI GRUP</h1>
                                    <span>2013 - 2014</span>
                                    <p className="educationDescPic">
                                        <img alt="ETGI GRUP" src={etgi} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Front end Developer</h1>
                                    <p>
                                    ETGi Grup helps clients about how to use technology to make online education, training and video conferencing which enable more efficient education and communication through the use of technology. I work with Javascript, Agular js, Ionic, CSS/SASS and xamarin
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Turkey , Ankara</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.etgigrup.com">www.etgigrup.com</a>
                                        </span>

                                    </span>
                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">ADVENSIS</h1>
                                    <span>2015 - 2016</span>
                                    <p className="educationDescPic">
                                        <img alt="ADVENSIS" src={advensis} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>UI/UX Designer and Front end developer</h1>
                                    <p>
                                    Advensis Engineering & Consultancy is an engineering company providing optimal solutions in Information Technology area needs, together with experienced and expert engineers and professional consultants.
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Turkey , Ankara</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.advensis.com.tr">www.advensis.com.tr</a>
                                        </span>

                                    </span>
                                </div>
                            </div>


                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">ADVENSIS</h1>
                                    <span>2016 - Present</span>
                                    <p className="educationDescPic">
                                        <img alt="ADVENSIS" src={advensis} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Senior Front end Developer</h1>
                                        <p>
                                        Some areas that I have completed projects in Advensis:
                                            <ul className="educationDescProjectUl">
                                                <li>- Mobile Application</li>
                                                <li>- Customer Relationship Management</li>
                                                <li>- Call Center Applications</li>
                                                <li>- Production System Tracking</li>
                                                <li>- Government agency workflow automation</li>
                                                <li>- E-government applications</li>
                                                <li>- Payment Systems</li>
                                                <li>- Barcode and RFID Trackng systems</li>
                                            </ul>
                                        </p>
                                    <p>
                                    Using frameworks and technologies such as PHP Laravel, Wordpress, Electron, React, Redux,Node.js and React Native. I also introduced working with Git Flow and supporting my colleagues to write nice readable and reusable code.

                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Turkey , Ankara</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.advensis.com.tr">www.advensis.com.tr</a>
                                        </span>


                                    </span>
                                </div>
                            </div>
                            

                        </div>

                        <div className="">
                            <div className="educationTitle">
                                <h1>
                                Volunteer
                                </h1>
                            </div>
                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">DIDI KOJAST</h1>
                                    <span>2017</span>
                                    <p className="educationDescPic">
                                        <img alt="DIDI KOJAST" src={didikoas} />
                                    </p>
                                </div>
                                <div  className="educationDescProject">
                                    <h1>UI/UX Designer and Front end Developer</h1>
                                    <p>
                                    Didikojast is the Iran largest online lost and found service. We use the speed and reach of social media to help people get reunited with sentimental items and beloved pets across Iran and beyond. I work with PHP Laravel, Rest API, CSS/LESS, Bootstrap, jQuery . . .
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Remote working</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.didikojast.com">www.didikojast.com</a>
                                        </span>


                                    </span>
                                </div>
                            </div>


                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">OPTIMUS APP</h1>
                                    <span>2018</span>
                                    <p className="educationDescPic">
                                        <img alt="OPTIMUS APP" src={optimus} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>App Developer</h1>
                                    <p>
                                        Optimus is a Startup in Europe base. I helped them design and develop React Native themes for their mobile application. I use React NAtive, Redux, Firebase, FCM Push Notification, Agile scrum methode, Realm
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Remote working</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.optimusapp.com">www.optimusapp.com</a>
                                        </span>


                                    </span>
                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">TOND TOND</h1>
                                    <span>2018</span>
                                    <p className="educationDescPic">
                                        <img alt="TOND TOND" src={tond} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Technical Consulting</h1>
                                    <p>
                                    TOND TOND is a new startup in Iran base at food core category. they want make an website and application for order online food. I helped them to design a better user experience and more comfortable user interface.
I develop software, client side to get an order from customers and responsive to order.
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Iran , Tehran</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.tondtond.com">www.tondtond.com</a>
                                        </span>


                                    </span>
                                </div>
                            </div>
  
                        </div>
                        <div className="">
                            <div className="educationTitle">
                                <h1>
                                Startups
                                </h1>
                            </div>
                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">ARA JOBS</h1>
                                    <span>2012</span>
                                    <p className="educationDescPic" >
                                        <img alt="ARA JOBS" src={arajob} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Co-Founder and Software Developer</h1>
                                    <p>
                                    The main activities organized a system for employers and job seekers through Short Message Service has been the site of many employers and job seekers are welcome.
I work with PHP,  HTML, CSS, Javascript, Jquery, C#, Webkit . . .
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Iran , Tehran</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.arajobs.ir">www.arajobs.ir</a>
                                        </span>


                                    </span>
                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">SAGHFENOO</h1>
                                    <span>2014 - 2015</span>
                                    <p className="educationDescPic" >
                                        <img alt="SAGHFENOO" src={saghf} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Co-Founder and Front end developper</h1>
                                    <p>
                                    Saghfenoo is one of iranian largest online estate agencies with an holistic approach to real estate business. 
I work with CSS3/SASS, PHP Laravel, Nodejs, REST FUll API, MongoDb . . .
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Iran , Tehran</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.saghfenoo.com">www.saghfenoo.com</a>
                                        </span>


                                    </span>
                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">BEBELLO</h1>
                                    <span>2016</span>
                                    <p className="educationDescPic" >
                                        <img alt="BEBELLO" src={bebelo} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Co-Founder & Front End Developer & Mobile Developer</h1>
                                    <p>
                                    People use Bebello to stay ahead.  It helps them know who’s getting in touch, filter out unwanted calls & SMS, and focus on what really matters. I work with PHP Laravel, React, React Native and Redux, Github, REST API
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Iran , Tehran</a>
                                        </span>
                                        <span class="color1"> 
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.bebello.ir">www.bebello.ir</a>
                                        </span>


                                    </span>
                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">TARSIM NOOR</h1>
                                    <span>2017</span>
                                    <p className="educationDescPic" >
                                        <img alt="TARSIM NOOR" src={tarsim} />
                                    </p>
                                </div>
                                <div className="educationDescProject" >
                                    <h1>Senior Front End Developer</h1>
                                    <p>
                                        TarsimNoor is an online store and website builder that allows you to create your own store and website without the necessity of technical knowledge. TarsimNoor, a Software-as-a-Service, is easy to use and powerful tool that enables anyone to create an online store and website within seconds so that they can focus on what they’re best at, their business.
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Remote</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.tarsimnoor.com/">www.tarsimnoor.com</a>
                                        </span>
                                        
                                        
                                    </span>
                                </div>
                            </div>



                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">FALANG APP</h1>
                                    <span>2018</span>
                                    <p className="educationDescPic" >
                                        <img alt="FALANG APP" src={falang} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Co-Founder and  App Developer</h1>
                                    <p>
                                    FalangApp is a startup in Iran base for making more easily to learn English words. I working with React, React Native, Native Base, Redux, Node.js and . . .
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Iran , Tehran</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.falangapp.ir">www.falangapp.ir</a>
                                        </span>
                                        
                                        
                                    </span>
                                </div>
                            </div>


                            <div className="educationDesc">
                                <div className="educationDescName">
                                    <h1 className="color1">VilaApp</h1>
                                    <span>2018</span>
                                    <p className="educationDescPic" >
                                        <img alt="ZIZIJO" src={vilaapp} />
                                    </p>
                                </div>
                                <div className="educationDescProject">
                                    <h1>Senior Front end Developer</h1>
                                    <p>
                                        VilaApp is a marketplace for short-term and long-term apartment rentals. With 1,000+ apartments in more than 400 cities, VilaApp offers one of the largest portfolios of furnished apartments for business travelers and Leisure travel in Iran.
                                    </p>
                                    <p>
                                    The technology use it the project :  React, Redux, Node.js, MongoDB, Docker, JSDoc, Graphql, WebPack.
                                    </p>
                                    <span className="educationIcon">
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'map-marker-alt']} />
                                            <a>Remote</a>
                                        </span>
                                        <span class="color1">
                                            <FontAwesomeIcon className="" icon={['fas', 'globe']} />
                                            <a href="http://www.vilaapp.ir">www.vilaapp.ir</a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            
                     
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Com4;