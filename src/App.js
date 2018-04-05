import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import './animated.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo jello animated" alt="logo" />
          <h1 className="App-title">Custom E-cigarette Store of New Hope</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
