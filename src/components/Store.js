import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Menu, Icon, Segment, Image, Divider, Card, Button, Header as Headr } from 'semantic-ui-react'
// import Video from './Video'
// import LiveCamera from './LiveCamera'
import Store1 from '../assets/store1.jpg'
// import Store2 from '../assets/store2.jpg'
import Store3 from '../assets/store3.jpg'
import Store4 from '../assets/store4.jpg'
const styles={
  segment: {
    margin: 10
  },
  title: {
    fontSize: 18,
    color: 'purple',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
  }
}

class StorePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      temperature: '',
      weatherDesc: ''
    }
  }
  componentDidMount(){
    this.getWeather()
  }

  getWeather(){
    const APPID = '19087ff6101a2f698425053f2fa21143'
    const CITY = '5203197'
    const URL = `http://api.openweathermap.org/data/2.5/weather?id=${CITY}&APPID=${APPID}`

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        let kTemp = data.main.temp
        let temperature = Math.round(((kTemp - 273.15) * 1.8) + 32)
        let weatherDesc = data.weather[0].description.toUpperCase()
        this.setState({temperature, weatherDesc})
        // console.log(data.main.temp, data.weather[0].description)
        console.log(this.state.temperature, this.state.weatherDesc)
      })
      

  }

  render(){
    return (
      <div>
        <Header/>
        
        <div style={styles.segment}>
        <Menu attached='top' borderless>
            <Menu.Item color='teal' onClick={this.props.juice} position='left'>
              <Icon name='map signs' size='large' color='grey'/> 
              <p style={styles.title}>STORE</p>
            </Menu.Item>
            <Menu.Item color='teal' onClick={this.props.back} position='right'>
              <Icon name='home' size='big' color='purple'/> 
            </Menu.Item>
          </Menu>
          
          <Segment attached >
            
            <h2 style={{color: '#333', fontFamily: 'Raleway, sans-serif', fontWeight: 400}}>Vaportimme New Hope </h2>
            <Icon name='map pin' color='grey' style={{height: 10, marginRight: 10}}/><span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 400}}>15 W Ferry Street New Hope PA, 18938</span><br/>
            <Icon name='call' color='grey' style={{height: 10, marginRight: 10}}/><span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 400}}>215 693 1905</span>
            <Headr as='h1' style={{color: 'purple', fontFamily: 'Roboto, sans-serif', fontWeight: 100, fontSize: 26}}>{this.state.temperature}&deg;F<span style={{marginLeft: 20,fontSize: 14, fontWeight: 500, marginTop: '-20px'}}>{this.state.weatherDesc}</span></Headr>
            <Divider/>

          </Segment>
          <Segment attached >
            <Card raised fluid>
              <Card.Content textAlign='center'>
                <Image src={Store3} alt=''/>
              </Card.Content>

              
            </Card>
            <Card raised fluid>
              <Card.Content textAlign='center'>
                <Image src={Store1} alt=''/> 
              </Card.Content>
            </Card>

            <Card raised fluid>
              

              <Card.Content textAlign='center'>
                <Image src={Store4} alt=''/> 
              </Card.Content>
            </Card>
          </Segment>
 
      
          <Segment attached textAlign='center'>
            <Button primary as='a' href="https://maps.google.com/?q=15+W+Ferry+St+New+Hope+PA+18938"><Icon name='map' />Get Directions</Button>
          </Segment>
        </div>

        <Footer/>
      </div>
    )
  }
}
export default StorePage