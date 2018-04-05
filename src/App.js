import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import './animated.css'
import Home from './components/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'

const styles = {
  footer: {
    color: '#eee'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo jello animated" alt="logo" />
          <h1 className="App-title">Custom E-Cigarette Store of New Hope</h1>
        </header>
        <Home/>
        <footer className='App-header'>
         <img src={logo} className="Footer-logo fadeIn animated" alt="logo" />
         <br/>
         <p style={styles.footer}>15 West Ferry Street New Hope, PA 18938</p>
         <p style={styles.footer}>215 - 693 - 1905</p>
        </footer>
      </div>
    );
  }
}

export default App;
