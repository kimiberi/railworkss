import React, { Component } from 'react'
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
              <h2>What We Offer</h2>

              <div className='flex-content'>
                <div className='content-1'>
                  <div className='box-info'>
                    <img
                      src={iconArrow}
                      style={{
                        width: '12px',
                        height: '12px',
                        marginRight: '15px',
                      }}
                    />
                    <p>Railway Products</p>
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
                    <p>Broadband wireless access</p>
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
                    <p>TETRA Train Radio Solution</p>
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
                    <p>Body Worn Camera Solution</p>
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
                    <p>Intelligent CCTV and IOT Solution</p>
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
                    <p>Conventional and Trunking Two-way Radio Solutions</p>
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
                    <p>Two-way Radio Equipment and Accessories</p>
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
                    <p>Rapid Deployable Emergency Communication Solution</p>
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

export default WhatWeOfferContent
