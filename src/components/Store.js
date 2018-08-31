import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import { Menu, Icon, Segment, Image, Divider, Card, Button } from 'semantic-ui-react'
import Store1 from '../assets/web/store_lawn.jpg'
import Store3 from '../assets/web/store_front.jpg'
import Store4 from '../assets/web/store_sign.jpg'

const styles={
  segment: {
    margin: 10
  },
  title: {
    fontSize: 18,
    color: 'purple',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
  }
}

class StorePage extends React.Component {
  render(){
    return (
      <div>
        <div style={styles.segment}>
        <Menu attached='top' borderless>
            <Menu.Item color='teal' onClick={this.props.juice} position='left'>
              <Icon name='map signs' size='large' color='grey'/> 
              <p style={styles.title}>STORE</p>
            </Menu.Item>
            <Menu.Item color='teal' onClick={this.props.back} position='right'>
              <NavLink to='/home'>
                <Icon name='home' size='big' color='purple'/> 
              </NavLink>
            </Menu.Item>
          </Menu>
          
          <Segment attached >
            
            <h2 style={{color: '#333', fontFamily: 'Raleway, sans-serif', fontWeight: 400}}>Vaportimme New Hope </h2>
            <Icon name='map pin' color='grey' style={{height: 10, marginRight: 10}}/><span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 400}}>15 W Ferry Street New Hope PA, 18938</span><br/>
            <Icon name='call' color='grey' style={{height: 10, marginRight: 10}}/><span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 400}}>215 693 1905</span><br/>
            <Icon name='mail' color='grey' style={{height: 10, marginRight: 10}}/><span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 400}}>vaportimme@gmail.com</span>
            
            <Divider/>

          </Segment>
          <Segment attached >
            <Card raised fluid>
              <Card.Content textAlign='center'>
                <Image className='lazy' src={Store3} alt=''/>
              </Card.Content>

              
            </Card>
            <Card raised fluid>
              <Card.Content textAlign='center'>
                <Image className='lazy' src={Store1} alt=''/> 
              </Card.Content>
            </Card>

            <Card raised fluid>
              

              <Card.Content textAlign='center'>
                <Image className='lazy' src={Store4} alt=''/> 
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
  }
}
export default StorePage