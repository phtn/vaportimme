import React from 'react'
import { Button, Image, Grid, Label, Icon } from 'semantic-ui-react'
import Logo from '../assets/logo.png'
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
  },
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '1em',
    color: '#eee',
    lineHeight: '5px'
  }
}

export default props => (
  <div className='App-verify' style={styles.container}>
    
    <Grid padded>
      <Grid.Row centered>
        <Image src={Logo} style={styles.logo} className='verifylogo animated fadeInDown logo' alt='logo'/>   
      </Grid.Row>
      <Grid.Row centered>
        <h1 style={styles.header}>New Hope's Preferred Custom E-Cigarettte Store</h1>
      </Grid.Row>
      <Grid.Row centered>
        <Button positive className='yup animated fadeInUp'  onClick={props.goHome}>I am 18 and over</Button>
        <Button primary as='a' href='https://www.google.com' className='nope animated fadeInUp'>I'm under 18</Button>
      </Grid.Row>

      <Grid.Row centered>
        <Label 
          color='purple'
          className='animated fadeInUp warning'>
          
          Warning: You must be 18 years old or over to enter this site <Icon name='warning'/>
        </Label>
      </Grid.Row>
    </Grid>
    
  </div>
)