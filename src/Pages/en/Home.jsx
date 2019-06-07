import React,{ Component} from 'react';
import '../../index.css';
import Seeker from '../../Components/Seeker'
import Com1 from '../../Components/Com1'
import Com2 from '../../Components/Com2'
import Com3 from '../../Components/Com3'
import Com4 from '../../Components/Com4'
import Com5 from '../../Components/Com5'
import Com6 from '../../Components/Com6'
import Com7 from '../../Components/Com7'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
require('typeface-montserrat')

 
class Home extends Component {

    state = {
        selected : false
    }
    componentWillMount() {
        configureAnchors({ scrollDuration: 1000 } )
      }
    selectedBtn = (event) =>{
        const updatedSelect =  this.state.selected
        this.setState({selected : !updatedSelect})

    }
    render()
    {

        return(
            <div>
                <Seeker openMenu={this.openMenu} selected={this.state.selected} selectedBtn={this.selectedBtn} />
                <Com1 />
                <ScrollableAnchor id={'section2'}>
                    <Com2  />
                </ScrollableAnchor>
                    <Com3 />
                <ScrollableAnchor id={'section4'}>
                    <Com4 />
                </ScrollableAnchor>
                <ScrollableAnchor id={'section5'}>
                    <Com5 />
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