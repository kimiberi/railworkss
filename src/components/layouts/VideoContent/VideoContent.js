import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './VideoContent.scss'

var YouTube = (props) => {
  var videoSrc =
    'https://www.youtube.com/embed/' +
    props.video +
    '?autoplay=' +
    props.autoplay +
    '&rel=' +
    props.rel +
    '&modestbranding=' +
    props.modest

  return (
    <div className='container'>
      <iframe
        className='player'
        type='text/html'
        width='100%'
        src={videoSrc}
        frameborder='0'
      />
    </div>
  )
}

export class VideoContent extends Component {
  render() {
    return (
      <div className='videocontent-style'>
        <div className='box-content'>
          <YouTube video='1ECI3Zp4uPQ' autoplay='0' rel='0' modest='1' />
        </div>
      </div>
    )
  }
}

export default withRouter(VideoContent)
