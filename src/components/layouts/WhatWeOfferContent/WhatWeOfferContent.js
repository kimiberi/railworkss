import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './WhatWeOfferContent.scss'
import iconArrow from '../../../img/icons/arrowht.png'

export class WhatWeOfferContent extends Component {
  render() {
    return (
      <div className='offer-styles parallax'>
        <div className='top-pattern'></div>

        <section className='offer-content'>
          <div className='box-1 box-opacity'>
            <div className='box-content'>
              <h2 className='gs_reveal'>What We Offer</h2>

              <div className='flex-content gs_reveal gs_reveal_fromLeft'>
                <div className='content-1 add-space'>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>Railway Solutions:</p>
                  </div>
                  <div>
                    <ul style={{ marginLeft: '60px' }}>
                      <li>Tetra Railway System</li>
                      <li>Signaling System</li>
                      <li>Track Works</li>
                      <li>SCADA</li>
                      <li>Road Rail Vehicles</li>
                      <li>Train Simulators</li>
                      <li>Operations Control Center</li>
                      <li>Level Crossing Solutions</li>
                    </ul>
                  </div>
                </div>

                <div className='content-2'>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>Broadband Wireless Access</p>
                  </div>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>BodyWorn Camera Solution</p>
                  </div>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>Conventional and trunking Two-way Radio</p>
                  </div>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>Rapid Deployable Emergency Communication</p>
                  </div>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>PT-Mast Fabrication</p>
                  </div>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>Installation Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='box-2'></div>
        </section>

        <div className='down-pattern'></div>
      </div>
    )
  }
}

export default withRouter(WhatWeOfferContent)
