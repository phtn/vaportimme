import React from 'react'
import Slider from 'react-slick'
import Store from '../assets/store_medium.jpg'
import { Grid, Card, Image } from 'semantic-ui-react'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const styles = {
  container: { margin: 10}
}
export default props => (
  <div style={styles.container}>
    <Slider {...settings}>
      <div >
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
          <Grid.Column>
            <Card color='purple'>
              <Image src={Store} />
              <Card.Content>
                <Card.Header>Store</Card.Header>
              </Card.Content>
          </Card>
          </Grid.Column>

          <Grid.Column>
            <Card color='purple'>
              <Image src={Store} />
              <Card.Content>
                <Card.Header>Store</Card.Header>
              </Card.Content>
          </Card>
          </Grid.Column>

          <Grid.Column>
            <Card color='purple'>
              <Image src={Store} />
              <Card.Content>
                <Card.Header>Store</Card.Header>
              </Card.Content>
          </Card>
          </Grid.Column>

          </Grid.Row>
        </Grid>
  

        


      </div>
      <div>2</div>
      <div>3</div>
    </Slider>
  </div>
)

