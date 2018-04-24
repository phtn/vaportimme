import React from 'react'
import { Item, Menu, Segment, Icon, Image } from 'semantic-ui-react'
import Header from './Header'
import Juices from '../static/juices'
import Footer from './Footer'
import Dropper from '../assets/dropper.svg'
import Droplet from '../assets/droplet.svg'


const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
  },
  title: {
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bolder'
  },
  segment: {
    margin: 10,
  },
  strong: {
    fontWeight: 'bolder'
  },
  segmentTitle: {
    fontWeight: 'bolder'
  },
  back: {
    color: 'purple',
    fontWeight: 'bolder'
  },
  valueLabel: {
    fontSize: 18
  }
}
export default props => (
  <div style={styles.container}>
    
    <Header />
    
    <div style={styles.segment}>
      <Menu attached='top' stackable>
        <Menu.Item color='teal' onClick={props.juice} position='left'>
          <Icon name='eyedropper' size='big'/> 
          <p style={styles.title}>JUICE</p>
        </Menu.Item>
        <Menu.Item color='teal' onClick={props.back} position='right'>
          <Icon name='window close outline' size='big' color='red'/> 
        </Menu.Item>
        
      </Menu>

      <Segment attached>
      <Segment attached='top'>
        <p style={styles.segmentTitle}>Bottle Sizes (ml)</p>
      </Segment>

      <Menu attached widths='4'>
        
        <Menu.Item>
          <Image src={Dropper} height={20} /> <p style={styles.valueLabel}>15 ml</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={21} /> <p style={styles.valueLabel}>30 ml</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={22} /> <p style={styles.valueLabel}>60 ml</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={23} /> <p style={styles.valueLabel}>120 ml</p>
        </Menu.Item>
      </Menu>

      <Segment attached>
        <p style={styles.segmentTitle}>Nicotine Level (mg)</p>
      </Segment>

      <Menu attached='bottom' widths='7'>
        
        <Menu.Item>
          <Image src={Droplet} height={20} /><p style={styles.valueLabel}> 0</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={21} /><p style={styles.valueLabel}> 3</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={22} /><p style={styles.valueLabel}> 6</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={23} /><p style={styles.valueLabel}> 9</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={24} /><p style={styles.valueLabel}> 12</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={25} /><p style={styles.valueLabel}> 18</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={26} /><p style={styles.valueLabel}> 24</p>
        </Menu.Item>
      </Menu>
      </Segment>

      <Segment attached='bottom'>
        <Item.Group items={Juices} divided className='animated fadeInUp'/>
      </Segment>
      
    </div>

    <Footer />
    
  </div>
)