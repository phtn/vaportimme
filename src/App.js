import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import './animated.css'
// components
import Home from './components/Home'
import Footer from './components/Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'

const styles = {
  footer: {
    color: '#eee',
    lineHeight: .6
  },
  gridSocial: {
    width: 400,
    textAlign: 'center',
    justifyContent: 'center'
  },
  phone: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: '1.3em',
    color: 'purple',
    lineHeight: '10px'
  },
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '1.2em',
    color: '#eee',
    lineHeight: '5px'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo fadeInDown animated" alt="logo" />
          <p style={styles.phone}>T 215.693.1905</p>
          <h1 style={styles.header}>New Hope's Best Custom E-Cigarettte Store</h1>
        </header>
        <Home/>
        <Footer/>
      </div>
    );
  }
}
export default App;
