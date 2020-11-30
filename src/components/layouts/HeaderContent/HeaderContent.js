import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './HeaderContent.scss'
import keyVisualPublicTransit from '../../../img/backgrounds/publictransit.jpeg'
import keyVisualRadioTower from '../../../img/backgrounds/galaxy_radiotower.jpg'
import keyVisualRadioSignal from '../../../img/backgrounds/radiocommunication.jpg'

// install npm install react-spring

const slides = [
  {
    id: 0,
    url: keyVisualPublicTransit,
  },
  {
    id: 1,
    url: keyVisualRadioTower,
  },
  {
    id: 2,
    url: keyVisualRadioSignal,
  },
]

const BackgroundSlider = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 3), 5000),
    []
  )
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className='background-animation'
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
        backgroundAttachment: 'fixed',
      }}
    ></animated.div>
  ))
}

export class HeaderContent extends Component {
  render() {
    return (
      <div className='header-style background-opacity'>
        <div className='box-content'>
          <p className='slogan gs_reveal gs_reveal_fromLeft'>
            DELIVERING SYSTEMS
          </p>
          <p className='sub-slogan gs_reveal'>
            FOR MISSION CRITICAL CHALLENGES
          </p>
        </div>

        <div className='down-pattern'></div>
        <BackgroundSlider />
      </div>
    )
  }
}

export default withRouter(HeaderContent)
