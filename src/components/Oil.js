import React from 'react'
import Header from './Header'
import { Segment, Menu, Icon, Image } from 'semantic-ui-react'
import Droplet from '../assets/droplet.svg'
import CBD from '../assets/resized/cbd_medium.jpg'

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
  },
  segment: {
    margin: 10,
  },
  jumbotron: {
    textAlign: 'center',
    alignItems: 'center',
  },
  droplet: {
    margin: '0 auto'
  },
  title: {
    fontWeight: 400
  }
} 
export default props => (
  <div style={styles.container}>
    
    <Header />
    
    <div style={styles.segment}>
    <Menu attached='top' stackable>
        <Menu.Item color='teal' onClick={props.back} position='left'>
          <Icon name='chevron left' /> Back
        </Menu.Item>
        <Menu.Item >
          <p>CBD Oil</p>
        </Menu.Item>
        
        
      </Menu>

      <Segment attached='bottom' style={styles.jumbotron}>
        <Image src={Droplet} alt='' size='small' className='animated slideInDown' style={styles.droplet}/>
        <h1 style={styles.title} className='animated slideInUp'>CBD Oil Available in out store!</h1>
        <Image src={CBD} alt='' size='big' className='animated fadeInUp' style={styles.droplet}/>
      </Segment>

    </div>
  
  </div>
)