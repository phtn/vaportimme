import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Menu, Icon, Segment, Image, Divider, Card, Button } from 'semantic-ui-react'

// import LiveCamera from './LiveCamera'
import Equip1 from '../assets/resized/equip_medium.jpg'
import Equip2 from '../assets/resized/equip_front.jpg'
import EleafLogo from '../assets/eleaflogo.png'
import AspireLogo from '../assets/aspirelogo.png'
import Smok from '../assets/smok.svg'
import Sigelei from '../assets/sigelei.png'
import Sourin from '../assets/sourin.png'



import EquipIcon from '../assets/equipment.svg'

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // centerMode: true
}

const styles={
  segment: {
    margin: 10
  },
  title: {
    fontSize: 18,
    color: 'purple',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
  },
  equipIcon: {
      marginRight: 10
  }
}

export default props => (
  <div>
    <Header/>
    
    <div style={styles.segment}>
    <Menu attached='top' borderless>
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
      {/* <Menu attached width='4'>
        <Menu.Item></Menu.Item>
      </Menu> */}
      <Segment attached >
        {/* <h2>Get Your Complete Set Now!</h2> */}
        {/* smok, cloudtank, sigelei, sourin, Istick */}
        {/* react slick  */}
        {/* our hardware selection is updated on a weekly basis */}
        {/* call us */}
        <Slider {...settings} >
          <div >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: '0px solid red', textAlign: 'center', padding: 100}}>
              <Image size='small' src={EleafLogo} />
            </div>
          </div>
          <div >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: '0px solid red', textAlign: 'center', padding: 100}}>
              <Image size='small' src={AspireLogo} />
            </div>
          </div>
          <div >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: '0px solid red', textAlign: 'center', padding: 100}}>
              <Image size='small' src={Smok} />
            </div>
          </div>
          <div >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: '0px solid red', textAlign: 'center', padding: 100}}>
              <Image size='small' src={Sigelei} />
            </div>
          </div>
          <div >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: '0px solid red', textAlign: 'center', padding: 100}}>
              <Image size='small' src={Sourin} />
            </div>
          </div>
        </Slider>
        {/* <Menu stackable widths='2'>
            <Menu.Item>
                
            </Menu.Item>
            <Menu.Item>
                
            </Menu.Item>
        </Menu> */}
        
        <Divider/>
        <p>Accessories</p>
        <p>Chargers</p>
        <p>Kits</p>
        <p>Batteries</p>
        <p>Drip tips</p>
        <p>RDA</p>
        <p>RBA</p>
        <p>Mods</p>
        <p>Kanthal</p>
        <p>Cotton</p>
        <p>Replacements glass</p>
        <Divider/>
      </Segment>

      <Segment attached textAlign='center'>

        <Button animated='fade' positive>
            <Button.Content visible>
                Call Customer Support
            </Button.Content>
            <Button.Content hidden>
                <Icon name='phone' size='small' animated='vertical' />215 693 19-05
            </Button.Content>
        </Button>
            
      </Segment>
    </div>

    <Footer/>
  </div>
)