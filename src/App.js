import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Home 
          oil={this.props.oil} 
          juice={this.props.juice} 
          store={this.props.store} 
          equip={this.props.equip} 
          cbd={this.props.cbd}
        />

        <Footer />
      </div>
    );
  }
}
export default App;
