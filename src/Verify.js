import React from 'react'
import { Button, Image, Grid, Label, Icon } from 'semantic-ui-react'
import Logo from './assets/logo.png'
// import Warning from './assets/warning.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

const Verifier = props => (
  <div className='App-verify' style={styles.container}>
    <Grid padded>
      <Grid.Row rows={2} centered>
        <Image src={Logo} style={styles.logo} className='verifylogo animated fadeInDown'/>   
      </Grid.Row>

      <Grid.Row centered>
        <Button positive as='a' href='/home' className='yup animated fadeInUp'>I am 18 and over</Button>
        <Button primary as='a' href='https://www.google.com' className='nope animated fadeInUp'>Get me outta here</Button>
      </Grid.Row>

      <Grid.Row centered>
        <Label 
          color='purple'
          className='animated fadeInUp warning'>
          <Icon name='warning'/>
          Warning: You must be 18 years old or over to enter this site.
        </Label>
      </Grid.Row>
    </Grid>
    
  </div>
)

export default props => (
  <Router>
    <Switch>
      <Route exact path='/' component={Verifier}/>
      <Route path='/home' component={App}/>
    </Switch>
  </Router>
)