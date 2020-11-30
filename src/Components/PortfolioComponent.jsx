import React, { Component } from 'react';
import simple from '../Assets/images/simple.png';
import vilaapp from '../Assets/images/vilaapp.png';
import bebeloo from '../Assets/images/bebeloo.png';
import justkish from '../Assets/images/justkish.png';

class PortfolioComponent extends Component {

    render() {
        return (
            <div>
                <div className="section6 bgColor5 ">
                    <div className="container" >
                        <div className="project" >
                            <h1 className="color1" >Projects</h1>
                            <p>“There is enough space for everyone in the world, so instead of trying to find another place, try to find your place. “ <span>Charlie Chaplin</span></p>
                        </div>
                        <div className="projectBox" >
                            <div className="bgColor5" >
                                <p className="bgColor3" >
                                    <img alt="simple" src={simple} />
                                    <a href="" target="_blank" > </a>
                                </p>
                                <p className="bgColor3" >
                                    <img alt="simple" src={bebeloo} />
                                    <a href="" target="_blank" > </a>
                                </p>
                            </div>
                            <div className="bgColor5" >
                                <p className="bgColor3" >
                                    <img alt="simple" src={justkish} />
                                    <a href="" target="_blank" > </a>
                                </p>
                                <p className="bgColor3" >
                                    <img alt="simple" src={vilaapp} />
                                    <a href="" target="_blank" > </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioComponent;