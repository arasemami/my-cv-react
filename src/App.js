import React, { Component } from 'react';
import { BrowserRouter as  Router , Route } from 'react-router-dom';
import './App.css';
import './index.css';
import 'aos/dist/aos.css';

import Navbar from './Components/NavBar';
import Home from './Pages/en/Home.jsx';
import About from './Pages/en/About.jsx';
import Contact from './Pages/en/Contact.jsx';
import Footer from './Components/Footer'



class App extends Component {
  state = {
    openMenu : false
  }
  toggleMenu = () => {
    this.setState( ( prevState ) => {
      return { openMenu: !prevState.openMenu };
  } );
  }
  closeMenu = () => {
    this.setState({openMenu : false})
  }

  render() {
    

    return (
      <Router>
            <div>
              <div className="bgGradient" >
                <div>
                  <Navbar clicked={this.toggleMenu} 
                          open={this.state.openMenu} 
                          closeMenu={this.closeMenu}/>
                  <Route exact path="/" component={Home} />
                  <Route  path="/Home" component={Home} />
                  <Route  path="/About" component={About} />
                  <Route  path="/Contact" component={Contact} />
                  <Footer />
                </div>
              </div>
            </div>
      </Router>
    );
  }
}

export default App;
