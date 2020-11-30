import React, { Component } from 'react';
import $ from "jquery";


class Seeker extends Component {

    state = {
        open: false,
        height: null,
        width: null
    }

    componentDidMount() {
        const self = this

        $(window).scroll(function () {

            switch (window.location.hash) {

                case '#section2':
                    $('#b1').addClass('active').siblings().removeClass('active');
                    break;

                case '#section4':
                    $('#b2').addClass('active').siblings().removeClass('active')
                    break;

                case '#section5':
                    $('#b3').addClass('active').siblings().removeClass('active')
                    break;

                case '#section6':
                    $('#b4').addClass('active').siblings().removeClass('active')
                    break;

                case '#section7':
                    $('#b5').addClass('active').siblings().removeClass('active')
                    break;
            }

            if ($(this).scrollTop() > 800) {
                self.setState({ open: true })
            } else {
                self.setState({ open: false })
            }


        });
        $(document).on('click', '.seekerLi', function () {
            $(this).addClass('active').siblings().removeClass('active');
        })

    }


    openMenu = () => {
        const openMenu = this.state.open
        this.setState({
            open: !openMenu
        })

    }

    render() {

        let seekerMenu = ['seekerMenu', 'closeSeeker'];
        if (this.state.open) {
            seekerMenu = ['seekerMenu', 'openSeeker'];
        }
        if (this.state.selected) {
        }



        return (

            // <div ref={this.nav}>
            <div className="desktop">
                <div className="sectionX"  >
                    <a href="#section2" className="seeker" onClick={this.openMenu}  >
                        <span className="seekerLines seekerLine1" ></span>
                        <span className="seekerLines seekerLine2"></span>
                    </a>
                    <ul className={seekerMenu.join(' ')} >
                        <li className="seekerLi active" id={'b1'}><a href="#section2" selected={this.props.selected} onClick={this.props.selectedBtn}>About Me</a></li>
                        <li className="seekerLi " id={'b2'}><a href="#section4" selected={this.props.selected} onClick={this.props.selectedBtn}>Experiences</a></li>
                        <li className="seekerLi " id={'b3'}><a href="#section5" selected={this.props.selected} onClick={this.props.selectedBtn}>Abilities</a></li>
                        <li className="seekerLi " id={'b4'}><a href="#section6" selected={this.props.selected} onClick={this.props.selectedBtn}>Projects</a></li>
                        <li className="seekerLi " id={'b5'}><a href="#section7" selected={this.props.selected} onClick={this.props.selectedBtn}>Contact</a></li>
                    </ul>
                </div>


            </div>

        );
    }
}

export default Seeker;