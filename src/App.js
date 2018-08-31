import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Juice from './components/Juice'
import Store from './components/Store'
import CBD from './components/Oil'
import Equip from './components/Equipment'
import Footer from './components/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'
import Switch from 'react-router-dom/Switch';
import AgeVerifier from './components/AgeVerifier';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        {/* <Home 
          oil={this.props.oil} 
          juice={this.props.juice} 
          store={this.props.store} 
          equip={this.props.equip} 
          cbd={this.props.cbd}
        /> */}

        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={()=> <AgeVerifier/>}/>
            <Route exact path='/home' render={()=> <Home/>}/>
            <Route path='/juice' render={()=> <Juice/>}/>
            <Route path='/store' render={()=> <Store/>}/>
            <Route path='/cbd' render={()=> <CBD/>}/>
            <Route path='/equipment' render={()=> <Equip/>}/>
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}
export default App;
