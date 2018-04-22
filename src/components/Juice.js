import React from 'react'
import { Item, Rating, Menu, Segment, Icon } from 'semantic-ui-react'
import Header from './Header'
import Juices from '../static/juices'
import Footer from './Footer'


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
        <Menu.Item >
          <p><span style={styles.strong}>Bottle Sizes (ml):</span> 15, 30, 60, 120</p>
        </Menu.Item>
        <Menu.Item >
          <p><span style={styles.strong}>Nicotine Levels (mg):</span> 0, 3, 6, 9, 12, 18, 24</p>
        </Menu.Item>
      </Menu>

      <Segment attached='bottom'>
        <Item.Group items={Juices} divided className='animated fadeInUp'/>
      </Segment>
    </div>

    <Footer />
    
  </div>
)