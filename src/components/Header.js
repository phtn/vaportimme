import React from 'react'
import logo from '../assets/logo.png';

const styles = {
  phone: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '1.3em',
    color: 'purple',
    lineHeight: '10px'
  },
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '1.2em',
    color: '#eee',
    lineHeight: '5px'
  }
}
export default props => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo fadeInDown animated" alt="logo" />
      <a href='tel:215-693-1905'><p style={styles.phone}>T 215.693.1905</p></a>
      <h1 style={styles.header}>New Hope's Preferred Custom E-Cigarette Store</h1>
    </header>
  </div>
)