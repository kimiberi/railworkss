import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './PartnersContent.scss'
import imgHytera from '../../../img/logo_partners/hytera.png'
import imgMotorola from '../../../img/logo_partners/motorola.png'
import imgRadwin from '../../../img/logo_partners/radwin.png'
import imgHikVision from '../../../img/logo_partners/hikvision.png'
import { Button } from 'semantic-ui-react'

export class PartnersContent extends Component {
  render() {
    return (
      <div className='partners-style' id='/partners'>
        <div className='box-content'>
          <div className='box-info'>
            <div className='box-1 gs_reveal gs_reveal_fromLeft'>
              <h2 style={{ textAlign: 'left' }}>About Hytera</h2>
              <p>
                <b>Hytera Communications Corporation Limited</b> is a global
                privately-run company headquartered in Shenzhen China.
                Established in 1993, Hytera, a global leading PMR solution
                provider, is dedicated to providing customized and complete
                professional communications solutions to government and public
                security, utility, transportation, enterprise and business to
                improve organizational efficiency and make the world safer.
              </p>
              <br />
              <a
                href='/hytera'
                className={
                  window.location.pathname == '/hytera' ? 'active' : ''
                }
              >
                <Button color='red' style={{ width: '120px', height: '40px' }}>
                  View More
                </Button>
              </a>
            </div>
            <div className='box-2 gs_reveal gs_reveal_fromRight'>
              <a href='https://hytera.ph/' target='_blank'>
                <img src={imgHytera} alt='Personal Computer' width='300' />
              </a>

              {/* <MediaQuery minDeviceWidth={768}>
                <div className='spacer-3'></div>
              </MediaQuery> */}
              {/* <div className='spacer-3'></div> */}
            </div>
          </div>

          <div className='spacer-4'></div>

          <div className='box-info reverse'>
            <div className='box-1 gs_reveal gs_reveal_fromRight'>
              <h2 style={{ textAlign: 'left' }}>About Motorola</h2>
              <p style={{ textAlign: 'justify' }}>
                <b>Motorola Solutions</b> is a global leader in mission-critical
                communications. Motorola technology platforms in communications,
                command center software, video security solutions and managed
                and support services make cities safer and help communities and
                businesses thrive.
              </p>
              <br />
              <a href='/motorola'>
                <Button color='red' style={{ width: '120px', height: '40px' }}>
                  View More
                </Button>
              </a>
            </div>
            <div className='box-2 gs_reveal gs_reveal_fromLeft'>
              <a href='https://www.motorolasolutions.com/' target='_blank'>
                <img
                  src={imgMotorola}
                  alt='Radio Telecommunication'
                  width='300'
                />
              </a>
              {/* <div className='spacer-3'></div> */}
            </div>
          </div>

          <div className='spacer-4'></div>

          <div className='box-info'>
            <div className='box-1 gs_reveal gs_reveal_fromLeft'>
              <h2 style={{ textAlign: 'left' }}>About Radwin</h2>
              <p>
                <b>RADWIN</b> is a wireless broadband hardware manufacturing
                company that develops and creates wireless point-to-point,
                wireless point-to-multipoint and wireless mobility solutions.
                Its products are used by telecoms carriers, city and town
                councils, remote communities, ISPs and private networks.
              </p>
              <br />
              <a href='/radwin'>
                <Button color='red' style={{ width: '120px', height: '40px' }}>
                  View More
                </Button>
              </a>
            </div>
            <div className='box-2 gs_reveal gs_reveal_fromRight'>
              <a href='https://www.radwin.com/' target='_blank'>
                <img src={imgRadwin} alt='Private Networks' width='300' />
              </a>
              {/* <div className='spacer-3'></div> */}
            </div>
          </div>

          <div className='spacer-4'></div>

          <div className='box-info reverse'>
            <div className='box-1 gs_reveal gs_reveal_fromRight'>
              <h2 style={{ textAlign: 'left' }}>About Hikvision</h2>
              <p>
                <b>Hikvision</b> is a world leading IoT solution provider with
                video as its core competency. Featuring an extensive and highly
                skilled R&D workforce, Hikvision manufacturers a full suite of
                comprehensive products and solutions for a broad range of
                vertical markets.
              </p>
              <br />
              <a href='/hikvision'>
                <Button color='red' style={{ width: '120px', height: '40px' }}>
                  View More
                </Button>
              </a>
            </div>
            <div className='box-2 gs_reveal gs_reveal_fromLeft'>
              <a href='https://www.hikvision.com/' target='_blank'>
                <img src={imgHikVision} alt='IoT solution' width='300' />
              </a>
              {/* <div className='spacer-3'></div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PartnersContent)
