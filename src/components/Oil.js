import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Segment, Menu, Icon, Image } from 'semantic-ui-react'
import Droplet from '../assets/droplet.svg'
import Dropper from '../assets/dropper.svg'
import Balm from '../assets/balm.svg'
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
    fontWeight: 400,
    color: '#91DC5A'
  },
  subtitle: {
    fontWeight: 400,
  },
  valueLabel: {
    fontSize: 18
  },
  segmentTitle: {
    fontSize: 18,
    fontWeight: 'bolder'
  },
  back: {
    color: 'purple'
  },
} 
export default props => (
  <div style={styles.container}>
    
    <Header />
    
    <div style={styles.segment}>
      <Menu attached='top' stackable>
        <Menu.Item color='teal' onClick={props.back} position='left'>
          <Icon name='chevron left' /> <p style={styles.back}>Back to Home</p>
        </Menu.Item>
      </Menu>

      <Segment attached style={styles.jumbotron}>
        <Image src={Droplet} alt='' size='small' className='animated slideInDown' style={styles.droplet}/>
        <h1 style={styles.title} className='animated slideInUp'>CBD Oil (Cannabidiol)</h1>
        <h3 style={styles.subtitle} className='animated slideInUp'>Now Available!</h3>
        <Image src={CBD} alt='' size='big' className='animated fadeInUp' style={styles.droplet}/>
      </Segment>

      <Segment attached style={styles.jumbotron}>
        <h3>Vaportimme CBD Oil Berry Tincture Flavor</h3>
      </Segment>

      <Segment attached>
      <Menu attached='top' widths='4'>
        <Menu.Item>
          <p style={styles.segmentTitle}>Sizes</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={20} /> <p style={styles.valueLabel}>30 ml</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={23} /> <p style={styles.valueLabel}>50 ml</p>
        </Menu.Item>
        <Menu.Item>
          {/* <Image src={Dropper} height={30} /> 50 ml */}
        </Menu.Item>
      </Menu>

      <Menu attached='bottom' widths='4'>
        <Menu.Item>
          <p style={styles.segmentTitle}>CBD Level (mg)</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={20} /> <p style={styles.valueLabel}>250 mg</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={23} /> <p style={styles.valueLabel}>500 mg</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={26} /> <p style={styles.valueLabel}>1000 mg</p>
        </Menu.Item>
      </Menu>
      </Segment>

      <Segment attached style={styles.jumbotron}>
        <h3>Vaportimme VaporBalm</h3>
      </Segment>

      <Segment attached='bottom'>
      <Menu attached='top' widths='4'>
        <Menu.Item>
          CBD Level (mg)
        </Menu.Item>
        <Menu.Item>
          <Image src={Balm} height={20} /> <p style={styles.valueLabel}>500 mg</p>
        </Menu.Item>
        <Menu.Item>
          <Image src={Balm} height={23} /> <p style={styles.valueLabel}>1000 mg</p>
        </Menu.Item>
        <Menu.Item>
        </Menu.Item>
      </Menu>
      </Segment>
    </div>

    <Footer />
  
  </div>
)