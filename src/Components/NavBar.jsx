import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        let attachedClasses = ['menuToggle', 'close'];
        let btnClass1 = ['lines', 'line1']
        let btnClass2 = ['lines', 'line2']
        let btnClass3 = ['lines', 'line3']

        if (this.props.open) {
            attachedClasses = ['menuToggle', 'open'];
            btnClass1 = ['lines', 'line11']
            btnClass2 = ['lines', 'line22']
            btnClass3 = ['lines', 'line33']
        }
        return (

            <div>
                <div className="section0" >
                    <div className="container" >
                        <nav className="navbar navbar-expand-lg   navbar-light">
                            <div className="humbergerDiv " onClick={this.props.clicked} >
                                <div className="navigation" >
                                    <button className="menuBtnEn">
                                        <span className={btnClass1.join(' ')} ></span>
                                        <span className={btnClass2.join(' ')} ></span>
                                        <span className={btnClass3.join(' ')} ></span>
                                    </button>
                                </div>
                            </div>

                            <div className={attachedClasses.join(' ')} open={this.props.open} >
                                <div className="collapse navbar-collapse justify-content-end navbarNavTablet" id="navbarNavTablet">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item">
                                            <Link className="nav-link " to={"/Home"} activeclassname={"active"} onClick={this.props.clicked} >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://medium.com/@aras.emami" activeclassname={"active"} onClick={this.props.clicked}>  Blog </a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/"} activeclassname={"active"} onClick={this.props.closeMenu}  > Resume </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/Contact"} activeclassname={"active"} onClick={this.props.clicked}> Contact  </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>

        );
    }
}

export default NavBar;