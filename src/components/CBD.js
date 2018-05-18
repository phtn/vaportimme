import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Menu, Icon, Segment, Image, Card, Item } from 'semantic-ui-react'

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

class CBD extends Component {
  componentDidMount(){
    // console.log(document.getElementById('aboutCBD').scrollTo(0))
    window.scrollTo(0,0)
  }
  render(){
    return(
      <div id='aboutCBD'>
        <Header/>
        
        <div style={styles.segment}>
        <Menu attached='top' borderless>
          <Menu.Item color='teal' onClick={this.props.juice} position='left'>
            <Icon name='theme' size='large' color='green'/> 
            <p style={styles.title}>WHAT IS CBD?</p>
          </Menu.Item>
          <Menu.Item color='teal' onClick={this.props.back} position='right'>
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
                <Item.Header as='a'>Helps alleviate various conditions</Item.Header>
                <Item.Description>
                  <Menu vertical stackable >
                    <Menu.Item>Acne</Menu.Item>
                    <Menu.Item>ADD & ADHD</Menu.Item>
                    <Menu.Item>Addiction</Menu.Item>
                    <Menu.Item>AIDS</Menu.Item>
                    <Menu.Item>ALS</Menu.Item>
                    <Menu.Item>Alzheimer's Disease</Menu.Item>
                    <Menu.Item>Anorexia</Menu.Item>
                    <Menu.Item>Antibiotic Resistance</Menu.Item>
                    <Menu.Item>Anxiety</Menu.Item>
                    <Menu.Item>Atherosclerosis</Menu.Item>
                    <Menu.Item>Arthritis</Menu.Item>
                    <Menu.Item>Asthma</Menu.Item>
                    <Menu.Item>Autism</Menu.Item>
                    <Menu.Item>Bipolar Disorder</Menu.Item>
                    <Menu.Item>Cancer</Menu.Item>
                    <Menu.Item>Colitis and Crohn's</Menu.Item>
                    <Menu.Item>Depression</Menu.Item>
                    <Menu.Item>Diabetes</Menu.Item>
                    <Menu.Item>Endocrine Disorders</Menu.Item>
                    <Menu.Item>Epilepsy and Seizures</Menu.Item>
                    <Menu.Item>Fibromyalgia</Menu.Item>
                    <Menu.Item>Glaucoma</Menu.Item>
                    <Menu.Item>Heart Disease</Menu.Item>
                    <Menu.Item>Huntington's Disease</Menu.Item>
                    <Menu.Item>Inflammation</Menu.Item>
                    <Menu.Item>Irritable Bowel Syndrome</Menu.Item>
                    <Menu.Item>Kidney Disease</Menu.Item>
                    <Menu.Item>Liver Disease</Menu.Item>
                    <Menu.Item>Metabolic Syndrome</Menu.Item>
                    <Menu.Item>Migrane</Menu.Item>
                    <Menu.Item>Mood Disorder</Menu.Item>
                    <Menu.Item>Motion Sickness</Menu.Item>
                    <Menu.Item>Multiple Sclerosis (MS)</Menu.Item>
                    <Menu.Item>Nausea</Menu.Item>
                    <Menu.Item>Neurodegeneration</Menu.Item>
                    <Menu.Item>Neuropathic Pain</Menu.Item>
                    <Menu.Item>Obesity</Menu.Item>
                    <Menu.Item>OCD</Menu.Item>
                    <Menu.Item>Osteoporosis</Menu.Item>
                    <Menu.Item>Parkinson's Disease</Menu.Item>
                    <Menu.Item>Prion/Mad Cow Disease</Menu.Item>
                    <Menu.Item>PTSD</Menu.Item>
                    <Menu.Item>Rheumatism</Menu.Item>
                    <Menu.Item>Schizophrenia</Menu.Item>
                    <Menu.Item>Sickle Cell Anemia</Menu.Item>
                    <Menu.Item>Skin Conditions</Menu.Item>
                    <Menu.Item>Sleep Disorders</Menu.Item>
                    <Menu.Item>Spinal Cord Injury</Menu.Item>
                    <Menu.Item>Stress</Menu.Item>
                    <Menu.Item>Stroke and TBI</Menu.Item>
                  </Menu>
                </Item.Description>
              </Item.Content>
            </Item>


          </Item.Group>


        </Segment>   
        

        </div>

        <Footer/>
      </div>
    )
  }
}
export default CBD