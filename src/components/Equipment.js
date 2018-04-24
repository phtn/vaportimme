import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Menu, Icon, Segment, Image, Divider, Card, Item } from 'semantic-ui-react'

// import LiveCamera from './LiveCamera'
import Equip1 from '../assets/resized/equip_medium.jpg'
import Equip2 from '../assets/resized/equip_front.jpg'
import EleafLogo from '../assets/eleaflogo.png'
import AspireLogo from '../assets/aspirelogo.png'

import EquipIcon from '../assets/equipment.svg'

const styles={
  segment: {
    margin: 10
  },
  title: {
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bolder'
  },
  equipIcon: {
      marginRight: 10
  }
}

export default props => (
  <div>
    <Header/>
    
    <div style={styles.segment}>
    <Menu attached='top' >
        <Menu.Item color='teal' onClick={props.juice} position='left'>
          <Image src={EquipIcon} height={30} style={styles.equipIcon} /> 
          <p style={styles.title}>EQUIPMENT</p>
        </Menu.Item>
        <Menu.Item color='teal' onClick={props.back} position='right'>
          <Icon name='home' size='big' color='purple'/> 
        </Menu.Item>
      </Menu>

      
      <Segment attached >
       
        <Card raised fluid>
          <Card.Content  textAlign='center'>
            <Image src={Equip1} alt=''/>
          </Card.Content>
        </Card>

        

        <Card raised fluid>
          <Card.Content textAlign='center'>
            <Image src={Equip2} alt=''/> 
          </Card.Content>
        </Card>


      </Segment>
      <Menu attached width='4'>
        <Menu.Item></Menu.Item>
      </Menu>
      <Segment attached >
        <h2>Get Your Complete Set Now!</h2>
            
        <Menu stackable raised widths='2'>
            <Menu.Item>
                <Image size='tiny' src={EleafLogo}/>
            </Menu.Item>
            <Menu.Item>
                <Image size='tiny' src={AspireLogo}/>
            </Menu.Item>
        </Menu>
        <h3>
            Accessories
        </h3>
        <p>Chargers</p>
        <p>Batteries</p>
        <p>Drip tips</p>
        <p>Replacements glass</p>
        <Divider/>
      </Segment>
    </div>

    <Footer/>
  </div>
)