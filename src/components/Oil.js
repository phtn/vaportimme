import React from 'react'
import Header from './Header'
import { Segment, Menu, Icon, Image } from 'semantic-ui-react'
import Droplet from '../assets/droplet.svg'
import Dropper from '../assets/dropper.svg'
import Balm from '../assets/balm.svg'
import CBD from '../assets/resized/cbd_medium.jpg'
import Footer from './Footer'

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

      <Segment attached style={styles.jumbotron}>
        <Image src={Droplet} alt='' size='small' className='animated slideInDown' style={styles.droplet}/>
        <h1 style={styles.title} className='animated slideInUp'>CBD Oil (Cannabidiol)</h1>
        <h3 style={styles.subtitle} className='animated slideInUp'>Now Available!</h3>
        <Image src={CBD} alt='' size='big' className='animated fadeInUp' style={styles.droplet}/>
      </Segment>

      <Segment attached style={styles.jumbotron}>
       Vaportimme CBD Oil Berry Tincture Flavor
      </Segment>

      <Segment attached>
      <Menu attached='top' widths='4'>
        <Menu.Item>
          Sizes
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={20} /> 30 ml
        </Menu.Item>
        <Menu.Item>
          <Image src={Dropper} height={23} /> 50 ml
        </Menu.Item>
        <Menu.Item>
          {/* <Image src={Dropper} height={30} /> 50 ml */}
        </Menu.Item>
      </Menu>

      <Menu attached='bottom' widths='4'>
        <Menu.Item>
          Strength
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={20} /> 250 mg
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={23} /> 500 mg
        </Menu.Item>
        <Menu.Item>
          <Image src={Droplet} height={26} /> 1000 mg
        </Menu.Item>
      </Menu>
      </Segment>

      <Segment attached style={styles.jumbotron}>
        Vaportimme VaporBalm
      </Segment>

      <Menu attached widths='4'>
        <Menu.Item>
          Strength
        </Menu.Item>
        <Menu.Item>
          <Image src={Balm} height={20} /> 500 mg
        </Menu.Item>
        <Menu.Item>
          <Image src={Balm} height={23} /> 1000 mg
        </Menu.Item>
        <Menu.Item>
        </Menu.Item>
      </Menu>

    </div>

    <Footer />
  
  </div>
)