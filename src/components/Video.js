import React, { Component } from 'react'
// import Youtube from 'react-youtube'

class Video extends Component {
  render(){
    const opts = {
      height: 'auto',
      width: '100%',
    }
    return (
      // <Youtube
      //   videoId={this.props.url}
      //   opts={opts}
      //   style={{marginBottom: 20, width: '100%'}}
      // />
      <div>
        <embed src={`http://www.youtube.com/v/${this.props.url}?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=1`} wmode="transparent" type="application/x-shockwave-flash" width="100%" height="100%" allowfullscreen="true" title="Adobe Flash Player"/>
        {/* <object  data={`http://www.youtube.com/embed/${this.props.url}?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=1`} width="100%" height="100%" allowfullscreen="true"> */}
{/* </object> */}
      </div>
    )
  }
}
export default Video