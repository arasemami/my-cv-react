import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {far , faEnvelope  } from '@fortawesome/free-regular-svg-icons'

library.add( far , faEnvelope)

class Com7 extends Component{

    render(){
       
        return(

            <div>
                <div className="section7 bgColor1">
                    <div className="container" >
                        <div className="contact" >
                            <h1>Contact</h1>
                            <p>
“There is enough space for everyone in the world, so instead of trying to find another place, try to find your place. “
                            </p>
                        </div>
                        <div className="contactDesc" >
                            <p>
                            If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
                            </p>
                        </div>
                        <div className="messageMeBox" >
                            <p className="messageMeBtn bgColor4" >
                                <FontAwesomeIcon className="messageIcon" icon={['far' , 'envelope']}/>
                                <span>
                                    <Link className="nav-link " to={"/Contact"} >MESSAGE ME</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Com7;