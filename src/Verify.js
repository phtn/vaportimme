import React from 'react'
import { Button, Image, Grid, Message } from 'semantic-ui-react'
import Logo from './assets/logo.png'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import App from './App'
const styles = {
  container: { 
    height: window.innerHeight,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  logo: {
    height: 100,
    float: 'left'
  }
}

const renderComponent = component => {

}

const Verifier = props => (
  <div className='App-verify' style={styles.container}>
    <Grid padded>
      <Grid.Row rows={2} centered>
        <Image src={Logo} style={styles.logo} className='logo'/>   
      </Grid.Row>

      <Grid.Row centered>
        <Button positive as='a' href='/home'>I am 18 and over</Button>
        <Button primary>Get me outta here</Button>
      </Grid.Row>

      <Grid.Row centered>
        <Message floating className='animated fadeInUp'>
          <Message.Header>
            Notice
          </Message.Header>
          <p>
            You must be 18 years old and above to enter this site.
          </p>
        </Message>
      </Grid.Row>
    </Grid>
    
  </div>
)

export default props => (
  <Router>
    <div>
      <Route exact path='/' render={Verifier}/>
      <Route path='/home' component={App}/>
    </div>
  </Router>
)