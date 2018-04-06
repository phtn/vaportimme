import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import './animated.css'
import Home from './components/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

import Facebook from './assets/facebook.svg'
import Twitter from './assets/twitter.svg'
import Instagram from './assets/instagram.svg'

const styles = {
  footer: {
    color: '#eee',
    lineHeight: .6
  },
  gridSocial: {
    width: 400,
    textAlign: 'center',
    justifyContent: 'center'
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
         <Grid padded='horizontally'>
          <Grid.Row columns={3} textAlign='center' centered>
            <Grid.Column textAlign='center'>
            <img src={Facebook} alt='' height={30}/>     
            </Grid.Column>
            <Grid.Column textAlign='center'>
            <img src={Twitter} alt='' height={30}/>     
            </Grid.Column>
            <Grid.Column textAlign='center'>
            <img src={Instagram} alt='' height={30}/>     
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
         <p style={styles.footer}>15 West Ferry Street New Hope, PA 18938</p>
         <p style={styles.footer}>215 - 693 - 1905</p>
        </footer>
      </div>
    );
  }
}

export default App;
