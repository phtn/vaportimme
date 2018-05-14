import React from 'react'
import { Image } from 'semantic-ui-react'
import Human from '../assets/human.svg'

import Point from '../assets/point.svg'
const styles = {
  container: {
    // height: 400,
    backgrounColor: '#eee'
  },
  p: {
    position: 'relative',
    top: 5,
    left:'50%'
  },
  point1: {
    position: 'relative',
    top: 10,
    left: '50%',
    height: 20,
    zIndex: 1
  }
}
export default props => (
  <div style={styles.container}>
    <p style={styles.p}>test</p>
    <Image src={Point} style={styles.point1}/>
    <Image src={Human} centered />
  </div>
)