import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import './animated.css'
import Home from './components/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo jello animated" alt="logo" />
          <h1 className="App-title">Custom E-cigarette Store of New Hope</h1>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
