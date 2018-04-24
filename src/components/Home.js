import React from 'react'
// import Slider from 'react-slick'
import Store from '../assets/resized/store_medium.jpg'
import Juice from '../assets/resized/juice_med.jpg'
import CBD from '../assets/resized/cbd_medium.jpg'
import Equip from '../assets/resized/equip_medium.jpg'
import Wheel from '../assets/cbd_wheel.jpg'
import Vaping from '../assets/resized/vaping_medium.jpg'
import Video from './Video'
import Human from '../assets/human.svg'
import { Grid, Card, Image, Segment, Item, Divider } from 'semantic-ui-react'
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
      <Segment style={styles.segment} className='animated fadeInUp blogsegment'>
        <Item.Group divided>
  
          <Item>
          <Item.Image size='small' src={Wheel} />
            <Item.Content>
              <Item.Header as='a'>Introducing the CBD Oil: Uses, Benefits and Risks </Item.Header>
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
            <Video/>
          </Item>
          {/* <Divider/> */}
          <Segment >
          <Item >
            <h1 style={styles.humanTitle}>Benefits of Vaping</h1>
            <p style={styles.humanSubtitle}>vs Cigarette Smoking</p>
            <p style={styles.humanSubtext}>Human Subtext</p>
            <Image src={Human} alt='' centered  rounded/>
          </Item>
          </Segment>
          
  
        </Item.Group>
      </Segment>
    </div>
  </div>
)

