import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedinIn, faInstagram, faFacebookF, faTwitter)

class Footer extends Component {

    render() {
        return (

            <div className="footer" >
                <div className="logo" >
                    <span className="color3">  2005 - 2019 Aras Emami.</span>
                    <span> All rights reserved.</span>
                </div>
                <div className="socialIcon" >
                    <p>
                        <FontAwesomeIcon className="footerIcon" icon={['fab', 'linkedin-in']} />
                        <FontAwesomeIcon className="footerIcon" icon={['fab', 'facebook-f']} />
                        <FontAwesomeIcon className="footerIcon" icon={['fab', 'instagram']} />
                        <FontAwesomeIcon className="footerIcon" icon={['fab', 'twitter']} />
                    </p>
                </div>
            </div>

        );
    }
}

export default Footer;