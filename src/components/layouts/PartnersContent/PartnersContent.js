import React, { Component } from 'react'
import './PartnersContent.scss'
import imgComputer from '../../../img/partners_company/pc.png'
import imgRadioCom from '../../../img/partners_company/radiocomm.png'
import imgRadwin from '../../../img/partners_company/radwinsystem.jpg'
import imgHikVision from '../../../img/partners_company/hikvisionsystem.jpg'

export class PartnersContent extends Component {
  render() {
    return (
      <div className='partners-style'>
        <div className='box-content'>
          <div className='box-info'>
            <div className='box-1'>
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
            </div>
            <div className='box-2'>
              <img src={imgComputer} alt='Personal Computer' width='360' />
              <div className='spacer-3'></div>
            </div>
          </div>

          <div className='spacer-4'></div>

          <div className='box-info reverse'>
            <div className='box-1'>
              <h2 style={{ textAlign: 'left' }}>About Motorola</h2>
              <p>
                <b>Motorola Solutions</b> is a global leader in mission-critical
                communications. Motorola technology platforms in communications,
                command center software, video security solutions and managed
                and support services make cities safer and help communities and
                businesses thrive.
              </p>
            </div>
            <div className='box-2'>
              <img
                src={imgRadioCom}
                alt='Radio Telecommunication'
                width='420'
              />
              <div className='spacer-3'></div>
            </div>
          </div>

          <div className='spacer-4'></div>

          <div className='box-info'>
            <div className='box-1'>
              <h2 style={{ textAlign: 'left' }}>About Radwin</h2>
              <p>
                <b>RADWIN</b> is a wireless broadband hardware manufacturing
                company that develops and creates wireless point-to-point,
                wireless point-to-multipoint and wireless mobility solutions.
                Its products are used by telecoms carriers, city and town
                councils, remote communities, ISPs and private networks.
              </p>
            </div>
            <div className='box-2'>
              <img src={imgRadwin} alt='Private Networks' width='420' />
              <div className='spacer-3'></div>
            </div>
          </div>

          <div className='spacer-4'></div>

          <div className='box-info reverse'>
            <div className='box-hikvision'>
              <h2 style={{ textAlign: 'left' }}>About Hikvision</h2>
              <p>
                <b>Hikvision</b> is a world leading IoT solution provider with
                video as its core competency. Featuring an extensive and highly
                skilled R&D workforce, Hikvision manufacturers a full suite of
                comprehensive products and solutions for a broad range of
                vertical markets.
              </p>
            </div>
            <div className='box-2'>
              <img src={imgHikVision} alt='IoT solution' width='360' />
              <div className='spacer-3'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PartnersContent
