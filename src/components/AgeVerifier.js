import React from 'react'
import { Button, Grid, Label, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
const styles = {
  container: { 
    height: 400,
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
    fontSize: '16px',
    color: '#eee',
    lineHeight: '5px'
  }
}

export default props => (
  <div style={styles.container}>
    
    <Grid padded>
      {/* <Grid.Row centered>
        <Image src={Logo} style={styles.logo} className='verifylogo animated fadeInDown logo' alt='logo'/>   
      </Grid.Row> */}
      {/* <Grid.Row centered>
        <h1 style={styles.header}>New Hope's Preferred Custom E-Cigarettte Store</h1>
      </Grid.Row> */}
      <Grid.Row centered>
        <NavLink to='/home'>
        <Button style={{fontSize: '16px'}} positive className='yup animated fadeInUp' >I am 18 and over</Button>
        </NavLink>
        
        <Button style={{fontSize: '16px'}} primary as='a' href='https://www.google.com' className='nope animated fadeInUp'>I'm under 18</Button>
      </Grid.Row>

      <Grid.Row centered>
        <Label 
          style={{fontSize: '16px'}}
          color='purple'
          className='animated fadeInUp warning'>
          
          Warning: <br/> You must be 18 years old or over to enter this site <Icon name='warning'/>
        </Label>
      </Grid.Row>
    </Grid>
    
  </div>
)