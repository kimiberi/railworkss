import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './HeaderContent.scss'
import logoRailworks from '../../../img/icons/railworks_whtlogo.png'
import iconLocation from '../../../img/icons/favicon_whtlocation.png'
import iconPhone from '../../../img/icons/favicon_whtphone.png'
import iconEmail from '../../../img/icons/favicon_whtemail.png'
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

const App = () => {
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
        <div className='contact-info'>
          <div className='box-1'>
            <section className='location'>
              <img src={iconLocation} width='18' height='18' />
              <p>
                <a
                  href='https://www.google.com/maps/place/Railworks+Corporation/@14.5202409,121.0343059,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c923a36a5983:0xf6401fbedfe87a9e!8m2!3d14.5202357!4d121.0364946'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  101 E. Aguinaldo Ave. AFPOVAI Phase I Western Bicutan, Taguig
                  City 1630 Philippines
                </a>
              </p>
            </section>
            <section className='email'>
              <img src={iconEmail} style={{ width: '18px', height: '18px' }} />
              <a href='mailto:info@railworksph.com'>info@railworksph.com</a>
            </section>
          </div>

          <div className='box-2'>
            <section className='phone'>
              <img src={iconPhone} />
              <p>
                <a href='tel:(02) 8280-2381'>(02) 8280-2381</a>
              </p>
            </section>
          </div>
        </div>

        <div className='navheader header-opacity'>
          <section className='business-logo'>
            <a href='/'>
              <img
                src={logoRailworks}
                alt='Railworks Incorporated'
                width='150'
                className='railworks-logo'
              />
            </a>
          </section>
          <section className='nav pullRight'>
            <ul>
              <li>
                {/* <Link
                  to={`/`}
                  className={window.location.pathname == '/' ? 'active' : ''}
                >
                  Home
                </Link> */}
                <a
                  href='/'
                  className={window.location.pathname == '/' ? 'active' : ''}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/about#/about'
                  className={
                    window.location.pathname == '/about' ? 'active' : ''
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/partners#/partners'
                  className={
                    window.location.pathname == '/partners' ? 'active' : ''
                  }
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href='/services#/services'
                  className={
                    window.location.pathname == '/services' ? 'active' : ''
                  }
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='/projects#/projects'
                  className={
                    window.location.pathname == '/projects' ? 'active' : ''
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className={
                    window.location.pathname == '/contact' ? 'active' : ''
                  }
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className='box-content'>
          <p className='slogan gs_reveal gs_reveal_fromLeft'>
            DELIVERING SYSTEMS
          </p>
          <p className='sub-slogan gs_reveal'>
            FOR MISSION CRITICAL CHALLENGES
          </p>
        </div>

        <div className='down-pattern'></div>
        <App />
      </div>
    )
  }
}

export default withRouter(HeaderContent)
