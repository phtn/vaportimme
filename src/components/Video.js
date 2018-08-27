import React, { Component } from 'react'
import Youtube from 'react-youtube'
// 'https://www.youtube.com/embed/3bZb10ZxpBk/?autoplay=0&rel=0&modestbranding=1'
// https://gaming.youtube.com/embed/live_stream?channel=UCpUl_Mm277YgWv2wFvObFPw
class Video extends Component {
  render(){
    const opts = {
      height: 'auto',
      width: '100%',
      }
    return (
      // <iframe src={this.props.url} width='100%' height={400} title={this.props.title}></iframe>
      // <iframe style={{marginBottom: 20}} width="100%" height="auto" src={this.props.url} frameBorder="0" allow="autoplay; encrypted-media" title='video' allowFullScreen></iframe>
      //
      <Youtube
        videoId={this.props.url}
        opts={opts}
        style={{marginBottom: 20, width: '100%'}}
      />
    )
  }
}
export default Video