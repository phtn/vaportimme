import React from 'react'
import { BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom'
// Routes
import AgeVerifier from './components/AgeVerifier'
import App from './App'
import Juice from './components/Juice'





export default props => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component={AgeVerifier}/>
      <Route path='/home' component={App}/>
      <Route path='/juiceflavors' component={Juice}/>
    </Switch>
  </Router>
)