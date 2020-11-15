import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import './HikvisionContent.scss'
import imgHikvisionControlSystem from '../../../img/partners_company/hikvision/hikvisionControlSystem.jpg'
import imgHikvisionBusinessIntelligence from '../../../img/partners_company/hikvision/hikvisionBusinessIntelligence.jpg'

export class HikvisionContent extends Component {
  render() {
    return (
      <div className='hikvisioncontent-style'>
        <div className='box-content'>
          <div
            style={{
              border: '1px solid #c3c3c3',
              boxShadow: '9px 9px 15px #b3b3b3',
              width: '51%',
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
                  src={imgHikvisionControlSystem}
                  alt='Hikvision Control System'
                  style={{ display: 'block', margin: 'auto' }}
                />
                <p className='legend'>HIKVISION CONTROL SYSTEM</p>
              </div>
              <div>
                <img
                  src={imgHikvisionBusinessIntelligence}
                  alt='Hikvision Business Intelligence'
                  style={{ display: 'block', margin: 'auto' }}
                />
                <p className='legend'>HIKVISION BUSINESS INTELLIGENCE</p>
              </div>
            </Carousel>
          </div>

          <div className='spacer-2' />
          <p>
            <b>Hikvision</b> is a world leading IoT solution provider with video
            as its core competency. Featuring an extensive and highly skilled
            R&D workforce, Hikvision manufactures a full suite of comprehensive
            products and solutions for a broad range of vertical markets.
          </p>
          <p>
            In addition to the security industry, Hikvision extends its reach to
            smart home tech, industrial automation, and automotive electronics
            industries to achieve its long-term vision. Hikvision products also
            provide powerful business intelligence for end users, which can
            enable more efficient operations and greater commercial success.
          </p>
          <p>
            Hikvision now has more than 40,000 employees, over 19,000 of which
            are R&D engineers. The company annualy invests over 9% of its annual
            sales revenue to research and development for continued product
            innovation. Centered at its Hangzhou headquarters, the R&D teams
            operate globally, including R&D centers in Montreal, Canada and
            London, the UK, as well as eight cities in China.
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(HikvisionContent)
