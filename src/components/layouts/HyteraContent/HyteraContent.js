import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import './HyteraContent.scss'
import imgHyteraFlowchart from '../../../img/partners_company/hytera/hyteraFlowchart.jpg'
import imgBWCSolution from '../../../img/partners_company/hytera/BWCSolution.jpg'
import imgSmarter from '../../../img/partners_company/hytera/hyteraSmarter.jpg'

// npm install react-responsive-carousel
// Don't forget to include its import CSS library in `index.js`

export class HyteraContent extends Component {
  render() {
    return (
      <div className='hyteracontent-style'>
        <div className='section-about'>
          <div className='box-content'>
            <img
              src={imgHyteraFlowchart}
              alt='Hytera Radio Communication'
              width='95%'
              style={{ display: 'block', margin: 'auto' }}
            />

            <div className='spacer-2' />
            <p>
              <b>Hytera Communications Corporation Limited</b> is a global
              privately-run company headquartered in Shenzhen China. Established
              in 1993, Hytera, a global leading PMR solution provider, is
              dedicated to providing customized and complete professional
              communications solutions to government and public security,
              utility, transportation, enterprise and business to improve
              organizational efficiency and make the world safer.
            </p>
            <p>
              Hytera provides complete PMR product portfolios from analog,
              digital, to integrated broadband-narrowband products, including
              the digital radio and trunking system, smart radio and system,
              command and dispatch, private Internet of Things (IoT) and
              emergency communications, communication command vehicles,
              satellite communications, and smart accessories, totally seven
              product portfolios.
            </p>
            <p>
              Sub brands including Sepura for TETRA medium and high-end radios,
              Norsat for satellite communications, Sinclair for smart antennas,
              Teltronic for global public traffic TETRA PMR Solutions, and HYT
              for analog radios.
            </p>
          </div>
        </div>
        <div className='section-gallery' style={{ background: '#f7f7f7' }}>
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
                    src={imgSmarter}
                    alt='Hytera Radio Communication'
                    style={{ display: 'block', margin: 'auto' }}
                  />
                  <p className='legend'>HYTERA SMARTER DEVICE</p>
                </div>
                <div>
                  <img
                    src={imgBWCSolution}
                    alt='BWC Solution'
                    style={{ display: 'block', margin: 'auto' }}
                  />
                  <p className='legend'>BWC SOLUTION</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(HyteraContent)
