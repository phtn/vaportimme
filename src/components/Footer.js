import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'

const styles = {
  container: {
    backgroundColor: '#222',
    height: 275,
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
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
    lineHeight: 2
  },
  bottomText: {
    lineHeight: 3
  },
  usageLinks: {
    fontWeight: 400
  },
  icons: {
      height: 10,
      marginRight: 5
  }
}
export default props => (
  <div style={styles.container}>
    <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <span style={styles.menuHeader}>Follow Us</span><br/>
            <a href='https://www.instagram.com/vaportimme/'><span style={styles.menuItem}><img src={Facebook} style={styles.icons}/>Facebook</span></a><br/>
            <a href='https://www.facebook.com/vaportimmenewhope/'><span style={styles.menuItem}><img src={Instagram} style={styles.icons}/>Instagram</span></a><br/>
            <a href='https://twitter.com/vaportimme?lang=en'><span style={styles.menuItem}><img src={Twitter} style={styles.icons}/>Twitter</span></a>
          </Grid.Column>
          <Grid.Column>
            <span style={styles.menuHeader}>Contact Us</span><br/>
            <span style={styles.menuItem}>T 215.693.1905</span><br/>
            <span style={styles.menuItem}>vaportimme@gmail.com</span>
          </Grid.Column>
          <Grid.Column>
            <span style={styles.menuHeader}>Find Us</span><br/>
            <span style={styles.menuItem}>15 West Ferry Street</span><br/>
            <span style={styles.menuItem}>New Hope, PA 18938</span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    
    <Divider section/>
    <span style={styles.usageLinks}>Terms of Use</span> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
    <span style={styles.usageLinks}>Privacy Policy</span><br/>
    <span style={styles.bottomText} >Vaportimme New Hope &copy; 2018</span>
  </div>
)