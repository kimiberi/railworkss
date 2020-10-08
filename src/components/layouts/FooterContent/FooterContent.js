import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FooterContent.scss'
import logoRailworks from '../../../img/icons/railworks_whtlogo.png'
import iconLocation from '../../../img/icons/favicon_whtlocation.png'
import iconPhone from '../../../img/icons/favicon_whtphone.png'
import iconEmail from '../../../img/icons/favicon_whtemail.png'
import iconTwitter from '../../../img/icons/twitterwht-circle.png'
import iconFacebook from '../../../img/icons/facebookwht-circle.png'
import iconInstagram from '../../../img/icons/instagramwht-circle.png'

export class FooterContent extends Component {
  render() {
    return (
      <div className='footer-style background-opacity'>
        <div className='box-content'>
          <Link to={`/`} className='active'>
            <img
              src={logoRailworks}
              alt='Railworks Incorporated'
              width='180'
              className='railworks-logo'
            />
          </Link>

          <div className='spacer-1'></div>
          <div className='nav'>
            <ul>
              <li>
                <a class='active' href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#contact'>Products</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#contact'>Projects</a>
              </li>
              <li>
                <a href='#about'>Contact Us</a>
              </li>
            </ul>
          </div>

          <div className='spacer-1'></div>
          <div className='contact-information'>
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

            <section className='phone-email'>
              <div className='phone'>
                <img
                  src={iconPhone}
                  style={{ width: '18px', height: '18px' }}
                />
                <a href='tel:(02) 8280-2381'>(02) 8280-2381</a>
              </div>
              <div className='email'>
                <img
                  src={iconEmail}
                  style={{ width: '18px', height: '18px' }}
                />
                <a href='mailto:info@railworksph.com'>info@railworksph.com</a>
              </div>
            </section>

            <div className='spacer-1'></div>
            <section className='social-icons'>
              <a href='#'>
                <img
                  src={iconTwitter}
                  style={{ width: '28px', height: '28px' }}
                />
              </a>
              <a href='#'>
                <img
                  src={iconFacebook}
                  style={{ width: '28px', height: '28px' }}
                />
              </a>
              <a href='#'>
                <img
                  src={iconInstagram}
                  style={{ width: '28px', height: '28px' }}
                />
              </a>
            </section>
            <div className='spacer-1'></div>

            {/* <div style={{borderBottom: '1px solid var(--theme-red)', margin: '30px 0px 30px 0px'}}></div> */}

            <section className='copyright'>
              <hr />
              <p>
                Copyright © 2020 All rights reserved. No part of these products
                may be reproduced, distributed, or transmitted in any form or by
                any means, including producing, recording, or other electronic
                or mechanical methods, without the prior written permission.
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterContent
