import React from 'react'
import { Item, Rating, Menu, Segment, Icon, Image } from 'semantic-ui-react'
import Header from './Header'
import Juices from '../static/juices'
import Footer from './Footer'
import Dropper from '../assets/dropper.svg'
import Droplet from '../assets/droplet.svg'


const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
  },
  segment: {
    margin: 10,
  },
  strong: {
    fontWeight: 'bolder'
  }
}
export default props => (
  <div style={styles.container}>
    
    <Header />
    
    <div style={styles.segment}>
      <Menu attached='top' stackable>
        <Menu.Item color='teal' onClick={props.back} position='left'>
          <Icon name='chevron left' /> Back to Home
        </Menu.Item>
        
      </Menu>

      <Segment attached>
        Bottle Sizes (ml)
      </Segment>

      <Menu attached widths='4'>
        
        <Menu.Item>
          <Image src={Dropper} height={20} /> 15 ml
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={21} /> 30 ml
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={22} /> 60 ml
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={23} /> 120 ml
        </Menu.Item>
      </Menu>

      <Segment attached>
        Nicotine Level (mg)
      </Segment>

      <Menu attached widths='7'>
        
        <Menu.Item>
          <Image src={Droplet} height={20} /> 0
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={21} /> 3
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={22} /> 6
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={23} /> 9
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={24} /> 12
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={25} /> 18
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={26} /> 24
        </Menu.Item>
      </Menu>

      <Segment attached='bottom'>
        <Item.Group items={Juices} divided className='animated fadeInUp'/>
      </Segment>
    </div>

    <Footer />
    
  </div>
)