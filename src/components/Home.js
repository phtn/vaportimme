import React from 'react'
// import Slider from 'react-slick'
import Store from '../assets/resized/store_medium.jpg'
import Juice from '../assets/resized/juice_med.jpg'
import CBD from '../assets/resized/cbd_medium.jpg'
import Equip from '../assets/resized/equip_medium.jpg'
import Wheel from '../assets/cbd_wheel.jpg'
import Vaping from '../assets/resized/vaping_medium.jpg'
import NoSmoking from '../assets/nosmoking.svg'
// import Video from './Video'
import Vid1 from '../assets/vid1.jpg'
import Vid2 from '../assets/vid2.jpg'
// import YouTubeSvg from '../assets/cctv.svg'

// import Benefits from './Benefits'

import { Grid, Card, Image, Segment, Item, Accordion, Icon, Menu, Button,} from 'semantic-ui-react'
// const settings = {
//   dots: false,
//   infinite: true,
//   arrows: false,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   // centerMode: true
// }

const styles = {
  container: { marginTop: 10},
  segment: { margin: 20 },
  jumbotron: { marginTop: 25},
  cardHeader: { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '.9em'},
  humanSubtext: {
    position: 'absolute',
    top: 60,
    left: window.innerWidth/15

  },
  humanTitle: {
    textAlign: 'center',
  },
  humanSubtitle: {
    position: 'absolute',
    top: 45,
    left: window.innerWidth/5
  },
  itemHead: {
    color: 'purple',
    fontWeight: 'bolder',
    marginRight: 10
  }
}


export default props => (
  <div style={styles.container}>
        <Grid padded='horizontally'>
          <Grid.Row columns={4} textAlign='center'>
          <Grid.Column textAlign='center'>
            <Card color='purple' centered className='animated fadeInUp cardOne' onClick={props.store}>
              <Image src={Store} />
              <Card.Content>
                <Card.Header style={styles.cardHeader}>STORE</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Card color='purple' centered className='animated fadeInUp cardOne' onClick={props.oil}>
              <Image src={CBD} />
              <Card.Content>
                <Card.Header style={styles.cardHeader}>CBD</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card color='purple' centered className='animated fadeInUp cardTwo card-2' onClick={props.juice}>
              <Image src={Juice} />
              <Card.Content>
                <Card.Header style={styles.cardHeader}>JUICE</Card.Header>
              </Card.Content>
          </Card>
          </Grid.Column>

          <Grid.Column>
            <Card color='purple' centered className='animated fadeInUp cardThree' onClick={props.equip}>
              <Image src={Equip} />
              <Card.Content>
                <Card.Header style={styles.cardHeader}>EQUIP</Card.Header>
              </Card.Content>
          </Card>
          </Grid.Column>

          </Grid.Row>
        </Grid>
  

        

      

    <div style={styles.jumbotron}>

      <div 
        className='animated fadeInUp cam'
        style={{textAlign: 'center'}}
      >
        <Button positive onClick={props.store}>
          <Icon name='video camera'/>
          View Live Cam
        </Button>
      </div>
      {/* <Message
        positive
        icon='video camera'
        header='NEW HOPE LIVE CAM'
        className='animated fadeRight'
        style={{textAlign: 'center'}}
      /> */}

      <Segment style={styles.segment} >
        
        
        
        <Item.Group divided>

          
  
          <Item>
          <Item.Image size='small' src={Wheel} />
            <Item.Content>
              <Item.Header as='a' onClick={props.cbd}>Introducing the CBD Oil: Uses, Benefits and Risks </Item.Header>
              <Item.Meta>Cannabidiol (CBD) oil is used for health benefits, but it is controversial.</Item.Meta>
              <Item.Description>
              Source: [Leafly]
              </Item.Description>
              <Item.Extra>Read More...</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='small' src={Vaping} />
            <Item.Content>
              <Item.Header as='a'>Scientists are shocked after testing E-cig Vapor in the Lab</Item.Header>
              <Item.Meta>Source: [ChurnMag.com].</Item.Meta>
              <Item.Description>
              </Item.Description>
              <Item.Extra>Read More...</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='small' src={NoSmoking} />
            <Item.Content>
              <Item.Header as='a'>Benefits of NOT Smoking Cigarettes!</Item.Header>
              <Item.Meta></Item.Meta>
              <Item.Description>
              </Item.Description>
              <Item.Extra>

                <Accordion>
                  <Accordion.Title active={true} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Every Cigarette you <strong>DON'T SMOKE</strong> is doing you <strong>GOOD!</strong>
                  </Accordion.Title>
                  <Accordion.Content active={true}>
                    <Menu vertical fluid>
                      <Menu.Item><span style={styles.itemHead}>in 8 hours</span> Excess carbon monoxide is out of your blood.</Menu.Item>
                      <Menu.Item><span style={styles.itemHead}>in 5 days</span> You'll feel better from drinking more water and less flavored drinks.</Menu.Item>
                      <Menu.Item><span style={styles.itemHead}>in 1 week</span> Your sense of taste and smell improves.</Menu.Item>
                      <Menu.Item><span style={styles.itemHead}>in 12 weeks</span> Your lungs regain the ability to clean themselves.</Menu.Item>
                      <Menu.Item><span style={styles.itemHead}>in 1 year</span> A pack-a-day smoker will save you $4,000 and risk of heart disease has halved.</Menu.Item>
                      <Menu.Item><span style={styles.itemHead}>in 5 years</span> Your risk of stroke has dramatically decreased and the overall improvement of quality of life is felt.</Menu.Item>
                    </Menu>
                  </Accordion.Content>
                </Accordion>
              </Item.Extra>
            </Item.Content>
          </Item>
          {/* https://www.youtube.com/watch?v=Fh-s64RNtz0 */}
          <Grid stackable>
          <Grid.Row columns={3}>
          <Grid.Column>
          <Card as='a' href='https://www.youtube.com/watch?v=Fh-s64RNtz0' fluid >
            <Image src={Vid1} size='big'style={{maxHeight: 300}}/>
            <Card.Content>
              <Card.Header>Doctors Speak Out on the Benefits of CBD</Card.Header>
              <Card.Meta><Icon name='youtube' color='red'/>&nbsp;<span style={{color: '#666'}}>YouTube</span></Card.Meta>
              {/* <Card.Description>Daniel is a comedian living in Nashville.</Card.Description> */}
            </Card.Content>
            {/* <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
              </a>
            </Card.Content> */}
          </Card>
          </Grid.Column>

          <Grid.Column>
          <Card as='a' href='https://www.youtube.com/watch?v=U71YItZTie8' fluid style={{maxHeight: 400}}>
            <Image src={Vid2} style={{maxHeight: 400}}/>
            <Card.Content>
              <Card.Header>Benefits of CBD</Card.Header>
              <Card.Meta><Icon name='youtube' color='red'/>&nbsp;<span style={{color: '#666'}}>YouTube</span></Card.Meta>
            </Card.Content>
          
          </Card>
          </Grid.Column>

          <Grid.Column>
          <Card as='a' href='https://gaming.youtube.com/watch?v=N7298pOTXjE' fluid >
            {/* <Image src={YouTubeSvg} size='medium' style={{Height: 200}} fluid/> */}
            <Card.Content>
              <Card.Header>New Hope Live</Card.Header>
              <Card.Meta><Icon name='video' color='purple'/>&nbsp;<span style={{color: '#666'}}>Watch it live</span></Card.Meta>
            </Card.Content>
          
          </Card>
          </Grid.Column>
          </Grid.Row>
          </Grid>

          
          {/* <Image primary fluid as='a' href='https://www.youtube.com/watch?v=Fh-s64RNtz0' src={Vid1}/>
            Doctors Speak Out on the Benefits of CBD
          <Divider/>
          <Button primary fluid as='a' href='https://www.youtube.com/embed/Fh-s64RNtz0'>
            Benefits of CBD
          </Button> */}
          {/* https://www.youtube.com/watch?v=U71YItZTie8 */}
          {/* // 'https://www.youtube.com/embed/3bZb10ZxpBk/?autoplay=0&rel=0&modestbranding=1' */}
          {/* <Item>
            <Video url='https://www.youtube.com/embed/Fh-s64RNtz0' title='Fh-s64RNtz0'/>
          </Item>
          CBD Benefits
          <Item>
            <Video url='https://www.youtube.com/embed/U71YItZTie8' title='U71YItZTie8'/>
          </Item> */}
          
          {/* vapesocietysupplies.com */}
  
        </Item.Group>
      </Segment>
    </div>
  </div>
)

