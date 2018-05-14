import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Menu, Icon, Segment, Image, Divider, Card, Button } from 'semantic-ui-react'

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
        <Menu.Item color='teal' onClick={props.privacy} position='left'>
          <Icon name='lock' size='large' color='grey'/> 
          <p style={styles.title}>STORE</p>
        </Menu.Item>
        <Menu.Item color='teal' onClick={props.back} position='right'>
          <Icon name='home' size='big' color='purple'/> 
        </Menu.Item>
      </Menu>
      
      <Segment attached >
        <h1>Vaportimme New Hope </h1>
        <p>EMAIL INFORMATION</p>
        <p>
        Please do not provide sensitive personal information to us by e-mail. Instead, use our web forms, which employ SSL technology. If you choose to correspond with us via email, we will retain the content of your email message together with your email address and our responses. We use administrative, technical and physical security measures to protect our computing infrastructure and your personal information from unauthorized use, access, modification or disclosure.
        </p>
        <Divider/>
      </Segment>
      <Segment attached >
        
      </Segment>
      
    </div>

    <Footer/>
  </div>
)