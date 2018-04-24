import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Menu, Icon, Segment, Image, Divider, Card, Button } from 'semantic-ui-react'

// import LiveCamera from './LiveCamera'
import Store1 from '../assets/store1.jpg'
import Store2 from '../assets/store2.jpg'
import Store3 from '../assets/store3.jpg'
import Store4 from '../assets/store4.jpg'
const styles={
  segment: {
    margin: 10
  },
  title: {
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bolder'
  }
}

export default props => (
  <div>
    <Header/>
    
    <div style={styles.segment}>
    <Menu attached='top' >
        <Menu.Item color='teal' onClick={props.juice} position='left'>
          <Icon name='map signs' size='large' color='grey'/> 
          <p style={styles.title}>STORE</p>
        </Menu.Item>
        <Menu.Item color='teal' onClick={props.back} position='right'>
          <Icon name='home' size='big' color='purple'/> 
        </Menu.Item>
      </Menu>

      <Segment attached >
        <h2>Vaportimme New Hope </h2>
        <p>15 W Ferry Street New Hope PA, 18938</p>
        <p>215.693.1905</p>
        <Divider/>
      </Segment>
      <Segment attached >
        <Card raised fluid>
          <Card.Content textAlign='center'>
            <Image src={Store3} alt=''/>
          </Card.Content>

          
        </Card>
        <Card raised fluid>
          <Card.Content textAlign='center'>
            <Image src={Store1} alt=''/> 
          </Card.Content>
        </Card>

        <Card raised fluid>
          

          <Card.Content textAlign='center'>
            <Image src={Store4} alt=''/> 
          </Card.Content>
        </Card>
      </Segment>
      <Segment attached textAlign='center'>
        <Button primary as='a' href="https://maps.google.com/?q=15+W+Ferry+St+New+Hope+PA+18938"><Icon name='map' />Get Directions</Button>
      </Segment>
    </div>

    <Footer/>
  </div>
)