import React, { Component , useState } from 'react';
//import logo from './logo.svg';
import NavBarMain from './resources/components/navBarMain'
import './App.css';
import Main from './resources/pages/Main'
//import * as d3 from 'd3'


class App extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
          isOpen: false
      };
  }
  
  toggle() {
      
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
  render() {
      return (
          <div>
              <NavBarMain />
              <Main />
          </div>
          
      );
  }
}


export default App;
