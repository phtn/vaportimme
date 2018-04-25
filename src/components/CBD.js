import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Menu, Icon, Segment, Image, Divider, Card, Button, Item } from 'semantic-ui-react'

// import LiveCamera from './LiveCamera'
import CBD1 from '../assets/cbd_structure.png'


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
        <Icon name='theme' size='large' color='green'/> 
        <p style={styles.title}>WHAT IS CBD?</p>
      </Menu.Item>
      <Menu.Item color='teal' onClick={props.back} position='right'>
        <Icon name='home' size='big' color='purple'/> 
      </Menu.Item>
    </Menu>

    
    <Segment attached >
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as='a'>What is CBD Oil?</Item.Header>
            <Item.Meta>Cannabidiol</Item.Meta>
            <Item.Description>
            CBD is one of the many chemical compounds in a class called “cannabinoids” that naturally occur in cannabis plants.
            CBD does not appear to have any psychoactive effects such as those caused by tetrahydrocannabinol (THC). It may have a downregulating impact on disordered thinking and anxiety.[7] Potential uses are the subject of ongoing research.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
      
    <Segment attached >
      <Card raised fluid>
        <Card.Content textAlign='center'>
          <Image src={CBD1} alt=''/>
        </Card.Content>
      </Card>
      Source: <a href='https://www.wikipedia.org'>Wikipedia</a>
    </Segment>
    

    <Segment attached >
      <h1>Research</h1>

      <Item.Group>
        
        <Item>
          <Item.Content>
            <Item.Header as='a'>Addiction Treatment</Item.Header>
            <Item.Description>
            Two systematic review on CBD and addiction reported beneficial effects for alleviating tobacco and cannabis dependence. The anti-addictive properties displayed might be due to CBD's protective effect on stress and neurotoxicity. Both reviews recommended more research.
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content>
            <Item.Header as='a'>Anti-inflammatory</Item.Header>
            <Item.Description>
            Two reviews address research on the theory that CBD alone or in combination with THC may have anti-oxidant and anti-inflammatory activity. Neither cited any human trials.
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content>
            <Item.Header as='a'>In Action</Item.Header>
            <Item.Description>
            CBD interacts with the body through the endogenous cannabinoid system (ECS) or endocannabinoid system. The endocannabinoid system regulates the body’s normal homeostasis, or general state of balance. This can maintain a healthy mood, sleep habit, appetite, and pain response.
            </Item.Description>
          </Item.Content>
        </Item>


        <Item>
          <Item.Content>
            <Item.Header as='a'>Cure to various conditions</Item.Header>
            <Item.Description>
            <Segment>
              <Menu stackable>
                <Menu.Item>Acne</Menu.Item>
                <Menu.Item>ADD & ADHD</Menu.Item>
              </Menu>
            </Segment>
            </Item.Description>
          </Item.Content>
        </Item>


      </Item.Group>


    </Segment>   
    

    </div>

    <Footer/>
  </div>
)