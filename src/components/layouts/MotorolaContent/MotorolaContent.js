import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import './MotorolaContent.scss'
import imgMotortrbo from '../../../img/partners_company/motorola/motortrbo.jpg'
import imgMotorolaItems from '../../../img/partners_company/motorola/motorolaItems.jpg'
import imgMotorolaRadio from '../../../img/partners_company/motorola/motorolaRadio.jpg'

// npm install react-responsive-carousel
// Don't forget to include its import CSS library in `index.js`

export class MotorolaContent extends Component {
  render() {
    return (
      <div className='motorolacontent-style'>
        <div className='box-content'>
          <div
            style={{
              border: '1px solid #c3c3c3',
              boxShadow: '9px 9px 15px #b3b3b3',
              width: '75%',
              display: 'block',
              margin: 'auto',
            }}
          >
            <Carousel
              infiniteLoop
              autoPlay
              swipeable
              stopOnHover
              useKeyboardArrows
              emulateTouch
            >
              <div>
                <img
                  src={imgMotortrbo}
                  alt='Motorola Motortrbo'
                  style={{ display: 'block', margin: 'auto' }}
                />
                <p className='legend'>MOTOROLA MOTORTRBO</p>
              </div>
              <div>
                <img
                  src={imgMotorolaItems}
                  alt='Motorola Equipment'
                  style={{ display: 'block', margin: 'auto' }}
                />
                <p className='legend'>MOTOROLA EQUIPMENT</p>
              </div>
              <div>
                <img
                  src={imgMotorolaRadio}
                  alt='Motorola Radio Devices'
                  style={{ display: 'block', margin: 'auto' }}
                />
                <p className='legend'>MOTOROLA RADIO DEVICES</p>
              </div>
            </Carousel>
          </div>

          <div className='spacer-2' />
          <p>
            <b>Motorola Solutions</b> is a global leader in mission-critical
            communications. Motorola technology platforms in communications,
            command center software, video security solutions and managed and
            support services make cities safer and help communities and
            businesses thrive.
          </p>
          <p>
            As the leading provider of mission-critical communications
            solutions, they view diversity as an innovation-driver that helps us
            deliver technology that serves as a lifeline for their customers.
          </p>
          <p>
            Motorola take a broad view of diversity, seeking different cultures,
            opinions and abilities to helps continue building on their 90-year
            heritage of innovation.
          </p>
          <p>
            Barron's Top 100 Sustainable Companies, No. 13, Feb. 2, 2018.
            Fortune World's Most Admired Companies, No. 3 in Networks and Other
            Communications Equipment, Jan. 19, 2018.
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(MotorolaContent)
