import React, { Component } from 'react';
import psd from './../Assets/images/psd.svg';
import js from './../Assets/images/js.svg';

class WhatICanDoComponent extends Component {

    render() {

        return (

            <div>
                <div className="section3 bgColor3">
                    <div className="container" >
                        <h1 className="section3Title color1" >What I can do.</h1>
                        <div className="whatCan whatCanOdd" >
                            <div className="whatCanImg whatCanImgLeft ">
                                <p className="bgColor5" >
                                    <img alt="psd" src={psd} />
                                </p>
                            </div>
                            <div className="whatCanDesc">
                                <h1 className="color1" >Design what you want.</h1>
                                <p>
                                    I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.
                                </p>
                            </div>
                        </div>
                        <div className="whatCan whatCanEven" >
                            <div className="whatCanImg whatCanImgRight">
                                <p className="bgColor5">
                                    <img alt="js" src={js} />
                                </p>
                            </div>
                            <div className="whatCanDesc" >
                                <h1 className="color1">Develop what you need.</h1>
                                <p>
                                    I'm a developer, so I know how to create your website and app to run across devices using the latest technologies available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default WhatICanDoComponent;