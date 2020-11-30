import React, { Component } from 'react';
import '../../index.css';
import Seeker from '../../Components/Seeker'
import AboutMeComponent from '../../Components/AboutMeComponent'
import MySloganComponent from '../../Components/MySloganComponent'
import WhatICanDoComponent from '../../Components/WhatICanDoComponent'
import EducationComponent from '../../Components/EducationComponent'
import MySkillsComponent from '../../Components/MySkillsComponent'
import Com6 from '../../Components/Com6'
import Com7 from '../../Components/Com7'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
require('typeface-montserrat')


class Home extends Component {

    state = {
        selected: false
    }

    componentWillMount() {
        configureAnchors({ scrollDuration: 1000 })
    }

    selectedBtn = (event) => {
        const updatedSelect = this.state.selected
        this.setState({ selected: !updatedSelect })
    }

    render() {

        return (
            <div>
                <Seeker openMenu={this.openMenu} selected={this.state.selected} selectedBtn={this.selectedBtn} />
                <AboutMeComponent />
                <ScrollableAnchor id={'section2'}>
                    <MySloganComponent />
                </ScrollableAnchor>
                <WhatICanDoComponent />
                <ScrollableAnchor id={'section4'}>
                    <EducationComponent />
                </ScrollableAnchor>
                <ScrollableAnchor id={'section5'}>
                    <MySkillsComponent />
                </ScrollableAnchor>
                <ScrollableAnchor id={'section6'}>
                    <Com6 />
                </ScrollableAnchor>
                <ScrollableAnchor id={'section7'}>
                    <Com7 />
                </ScrollableAnchor>
            </div>

        );
    }
}


export default Home;