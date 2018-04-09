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
import { Grid } from 'semantic-ui-react'



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
          <h1 style={styles.header}>New Hope's Best Custom E-Cigarettte Store!</h1>
        </header>
        <Home/>
        {/* <footer className='App-header'>
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
        </footer> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
