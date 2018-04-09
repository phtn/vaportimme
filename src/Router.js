import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Routes
import AgeVerifier from './components/AgeVerifier'
import App from './App'
import Juice from './components/Juice'

export default props => (
  <Router>
    <Route exact path='/' component={AgeVerifier}/>
    <Route path='/home' component={App}/>
      <Route path='/juiceflavors' component={Juice}/>
  </Router>
)