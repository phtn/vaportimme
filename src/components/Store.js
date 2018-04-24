import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Menu, Icon, Segment, Image } from 'semantic-ui-react'

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
        <h2>Vaportimme New Hope </h2>is the first E-cigarette store located right in the heart of New Hope, Pennsylvania.
      </Segment>
      <Segment attached >
        <Menu attached widths='1'>
          <Menu.Item>
            <Image src={Store3} alt=''/>
          </Menu.Item>

          
        </Menu>
        <Menu attached widths='1'>
          <Menu.Item>
            <Image src={Store1} alt=''/> 
          </Menu.Item>
        </Menu>

        <Menu attached widths='1'>
          

          <Menu.Item>
            <Image src={Store4} alt=''/> 
          </Menu.Item>
        </Menu>
      </Segment>
      <Segment attached>
        {/* <LiveCamera/> */}
      </Segment>
    </div>

    <Footer/>
  </div>
)