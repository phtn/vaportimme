import React, { Component } from 'react'
import { Grid, Divider, Modal, Header, Button, Menu } from 'semantic-ui-react'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Phone from '../assets/phone.svg'
import Pin from '../assets/pin.svg'
import VISA from '../assets/visa.svg'
import MC from '../assets/mastercard.svg'
import AMEX from '../assets/amex.svg'
import DISC from '../assets/discover.svg'


const styles = {
  container: {
    backgroundColor: '#222',
    height: 'auto',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    letterSpacing: 1,
    color: '#999',
    paddingTop: 30,
    borderBottom: '6px solid #5482ab'
  },
  menuHeader: {
    fontWeight: 400,
    color: '#ccc',
    lineHeight: 2
  },
  menuItem: {
    color: '#ccc',
    lineHeight: 2,
    fontSize: '16px'
  },
  bottomText: {
    lineHeight: 3,
    fontSize: '16px'
  },
  usageLinks: {
    fontWeight: 400,
    fontSize: '16px',
    cursor: 'pointer',
  },
  icons: {
      height: 20,
      marginRight: 5
  },
  pin: {
    height: 10,
    marginRight: 5
  },
  credit: {
    height: 40
  }
}




class Footer extends Component {
  constructor(props){
    super(props)

    this.state = {
      privacyOpen:  false,
      termsOpen: false
    }
  }
  openPrivacy(){
    this.setState({privacyOpen: true})
  }
  closePrivacy(){
    this.setState({privacyOpen: false})
  }
  openTerms(){
    this.setState({termsOpen: true})
  }
  closeTerms(){
    this.setState({termsOpen: false})
  }
  render(){
    return (
      <div style={styles.container}>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            
            <Grid.Column>
              <a href='https://www.facebook.com/vaportimmenewhope/'><span style={styles.menuItem}><img src={Facebook} style={styles.icons} alt=''/></span></a><br/>
              <span style={styles.menuItem}>Facebook</span>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.instagram.com/vaportimme/'><span style={styles.menuItem}><img src={Instagram} style={styles.icons} alt=''/></span></a><br/>
              <span style={styles.menuItem}>Instagram</span>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row columns={2}>
          <Grid.Column>
              <a href='https://twitter.com/vaportimme?lang=en'><span style={styles.menuItem}><img src={Twitter} style={styles.icons} alt=''/></span></a><br/>
              <span style={styles.menuItem}>Twitter</span>
            </Grid.Column>
            <Grid.Column>
              <a href='tel: 215-693-1905'><span style={styles.menuItem}><img src={Phone} style={styles.icons} alt=''/></span></a><br/>
              <span style={styles.menuItem}>T 215.693.1905</span>
              
            </Grid.Column>
            
          </Grid.Row>

          <Grid.Row columns={1}>
            
            <Grid.Column>
            <img src={Pin} style={styles.pin} alt=''/>
              <a href="https://maps.google.com/?q=15+W+Ferry+St+New+Hope+PA+18938"><span style={styles.menuItem}>15 W Ferry Street New Hope, PA 18938</span></a>
            </Grid.Column>
          

          </Grid.Row>
          <Grid.Row columns={4}>
            
            <Grid.Column>
              <img src={VISA} style={styles.credit} alt=''/>
            </Grid.Column>
            <Grid.Column>
              <img src={MC} style={styles.credit} alt=''/>
            </Grid.Column>
            <Grid.Column>
              <img src={AMEX} style={styles.credit} alt=''/>
            </Grid.Column>
            <Grid.Column>
              <img src={DISC} style={styles.credit} alt=''/>
            </Grid.Column>
          

          </Grid.Row>

        </Grid>
        <Divider section/>
        <span style={styles.usageLinks} onClick={()=>this.openTerms()}>Terms of Use</span> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <span style={styles.usageLinks} onClick={()=>this.openPrivacy()}>Privacy Policy</span>
        <br/>
        <span style={styles.bottomText} >Vaportimme LLC New Hope &copy; 2018</span>


        <Modal open={this.state.privacyOpen} style={{marginTop: 20}} size='fullscreen' className='animated fadeInUp'>
        <Modal.Header>Privacy Policy</Modal.Header>
        <Modal.Content scrolling>
          

            <Header>EMAIL INFORMATION</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                Please do not provide sensitive personal information to us by e-mail. Instead, use our web forms, 
                which employ SSL technology. If you choose to correspond with us via email, we will retain the 
                content of your email message together with your email address and our responses. We use administrative, 
                technical and physical security measures to protect our computing infrastructure and your personal 
                information from unauthorized use, access, modification or disclosure.
              `}

            </p>
            
            

            <Divider/>
            <Header>VISITOR INFORMATION</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. When you visit our website, we offer the use of a secure server. All sensitive information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our databases to be only accessed as stated above.
              `}
            </p>

            <Divider/>
            <Header>WEBSITES LINKED TO VAPORTIMME.COM</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                We are not responsible for the practices employed by Web sites linked to or from our website nor the information or content contained therein. Often links to other websites are provided solely as pointers to information on topics that may be useful to the users of our Web site.
              `}
            </p>

            <Divider/>
            <Header>PRIVACY FOR CHILDREN</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                Children under the age of 18 are not allowed to use our web site and/or products. If you are under the age of 21+, you can use this service only in conjunction with permission from your parents or legal guardians.
              `}
            </p>

            <Divider/>
            <Header>CONTACT US</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                If you have any questions regarding this Privacy Policy, our website vaportimme.com, or your order with us, please contact us.
              `}
            </p>
            <p style={{fontSize: '16px'}}>Phone: 215.693.1905 | Email: vaportimme@gmail.com</p>

            <Divider/>
            <Header>NOTICE</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                Vaportimme.com reserves the right to amend this Privacy Policy at any time by direct electronic notification to you or by posting the amended terms on this page. All amended terms shall automatically be effective for new users or new purchases immediately on posting and, in all other cases, 30 days after they are initially posted and dated, unless otherwise specified in a notice to you.
              `}
            </p>

            
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={()=>this.closePrivacy()}>
            I have Read and Understood the Privacy Policy
          </Button>
        </Modal.Actions>
      </Modal>

      {/* TERMS OF USE */}
      <Modal open={this.state.termsOpen} style={{marginTop: 20}} size='fullscreen' className='animated fadeInUp'>
        <Modal.Header>Terms of Use</Modal.Header>
        <Modal.Content scrolling>
          

            <Header>ENTERING THIS WEBSITE</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                By entering and using this website you are agreeing to the following:
              `}

            </p>
            <Menu vertical fluid>
              <Menu.Item>I am at least 18 years of age.</Menu.Item>
              <Menu.Item>I agree that any vaporizing supplies purchased will be used for lawful purposes.</Menu.Item>
              <Menu.Item>It is legal in my country and/or state to purchase vaporizer devices.</Menu.Item>
              <Menu.Item>Use of these products is entirely at the risk and discretion of the user and vaportimme.com will not be responsible for any use or misuse of the products sold herein.</Menu.Item>
            </Menu>

            <p style={{fontSize: '16px'}}>By browsing and entering Vaportimme.com, I certify that all of the above statements are true.</p>
      
            <Divider/>
            <Header>IMPORTANT NOTE</Header><br/>
            <p style={{fontSize: '16px'}}>
              {`
                The statements and Vaporizers shown on this website have not been evaluated by the US Food and Drug Administration (FDA). These Vaporizers are not designed to diagnose, cure, prevent, or treat any disease. Before using a vaporizer, please consult with a licensed health care provider. If you use a Vaporizer, you do so at your own risk. Inhalation is inadvisable and may potentially be harmful. Any comments from user submitted reviews found on this website are related to the users own personal experiences, and are not endorsed, reviewed, or necessarily shared by Vaportimme.com or its affiliates. Vaporizing does not necessarily eliminate any and all toxins found in vaporized substances, so much care should be taken prior to use. You must be 18 or older and respect all local laws to purchase a Vaporizer. By using Vaportimme.com, you acknowledge and agree to abide by our Terms of Use page before making any purchases over the phone.
              `}
            </p>

            

            
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={()=>this.closeTerms()}>
            I Agree to Term of Use
          </Button>
        </Modal.Actions>
      </Modal>


      </div>
    )
  }
}
export default Footer