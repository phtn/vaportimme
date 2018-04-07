import React, { Component } from 'react'
import { Embed } from 'semantic-ui-react'
import Vaping from '../assets/vaping.PNG'

class Video extends Component {
  render(){
    return (
      <iframe src='https://www.youtube.com/embed/3bZb10ZxpBk/?autoplay=0&rel=0&modestbranding=1' width='100%' height={400} title=''></iframe>
    )
  }
}
export default Video