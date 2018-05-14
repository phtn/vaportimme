import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Phone from '../assets/phone.svg'
import Pin from '../assets/pin.svg'


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
    fontSize: '12px'
  },
  bottomText: {
    lineHeight: 3
  },
  usageLinks: {
    fontWeight: 400
  },
  icons: {
      height: 20,
      marginRight: 5
  },
  pin: {
    height: 10,
    marginRight: 5
  }
}
export default props => (
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
          <span style={styles.menuItem}>15 W Ferry Street New Hope, PA 18938</span>
        </Grid.Column>
       

      </Grid.Row>

    </Grid>
    <Divider section/>
    <span style={styles.usageLinks}>Terms of Use</span> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
    <span style={styles.usageLinks} onClick={()=> localStorage.setItem('component','privacy')}>Privacy Policy</span><br/>
    <span style={styles.bottomText} >Vaportimme New Hope &copy; 2018</span>
  </div>
)