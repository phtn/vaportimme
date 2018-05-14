import React, { Component } from 'react'

// 'https://www.youtube.com/embed/3bZb10ZxpBk/?autoplay=0&rel=0&modestbranding=1'
// https://gaming.youtube.com/embed/live_stream?channel=UCpUl_Mm277YgWv2wFvObFPw
class Video extends Component {
  render(){
    return (
      <iframe src={this.props.url} width='100%' height={400} title={this.props.title}></iframe>
    )
  }
}
export default Video