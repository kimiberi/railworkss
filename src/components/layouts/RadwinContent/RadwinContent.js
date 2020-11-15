import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import './RadwinContent.scss'
import imgRadwinNetwork from '../../../img/partners_company/radwin/radwinNetwork.jpg'
import imgRadwinRadio from '../../../img/partners_company/radwin/radwinRadio.jpg'

// npm install react-responsive-carousel
// Don't forget to include its import CSS library in `index.js`

export class RadwinContent extends Component {
  render() {
    return (
      <div className='radwincontent-style'>
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
                  src={imgRadwinNetwork}
                  alt='Radwin Network Access Chart'
                  style={{ display: 'block', margin: 'auto' }}
                />
                <p className='legend'>RADWIN NETWORK ACCESS CHART</p>
              </div>
              <div>
                <img
                  src={imgRadwinRadio}
                  alt='Radwin Radio Communication'
                  style={{ display: 'block', margin: 'auto' }}
                />
                <p className='legend'>RADWIN RADIO COMMUNICATION</p>
              </div>
            </Carousel>
          </div>

          <div className='spacer-2' />
          <p>
            <b>RADWIN</b> is a wireless broadband hardware manufacturing company
            that develops and creates wireless point-to-point, wireless
            point-to-multipoint and wireless mobility solutions. Its products
            are used by telecoms carriers, city and town councils, remote
            communities, ISPs and private networks.
          </p>
          <p>
            RADWIN also provides solutions for moving applications such as metro
            systems, bus networks, ferries and airports, as well as vehicles
            such as patrol vehicles, manned and unmanned heavy machinery in
            mines and ports. The hardware is used for applications including
            mobile and IP backhaul, home and enterprise wireless broadband
            access, private network connectivity and video surveillance
            transmission.
          </p>
          <p>
            RADWIN solutions are deployed in more than 150 countries, with more
            than 100,000 units in total deployed. The company is headquarted in
            Tel Aviv, Israel, with regional offices around the world, in Brazil,
            El Salvador, China, Colombia, Poland, India, Mexico, Peru,
            Philippines, Singapore, South Africa, Russia, Spain, Thailand, the
            UK and the US.
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(RadwinContent)
