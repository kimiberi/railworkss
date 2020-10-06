import React, { Component } from 'react'
import './HeaderContent.scss'
import logoRailworks from '../../../img/icons/railworks_whtlogo.png'
import iconLocation from '../../../img/icons/favicon_whtlocation.png'
import iconPhone from '../../../img/icons/favicon_whtphone.png'
import iconEmail from '../../../img/icons/favicon_whtemail.png'

export class HeaderContent extends Component {
  render() {
    return (
      <div className='header-style background-opacity'>
        <div className='contact-info'>
          <div className='box-1'>
            <section className='location'>
              <img src={iconLocation} width='18' height='18' />
              <p>
                101 E. Aguinaldo Ave. AFPOVAI Phase I Western Bicutan, Taguig
                City 1630 Philippines
              </p>
            </section>
            <section className='email'>
              <img src={iconEmail} style={{ width: '18px', height: '18px' }} />
              <a href='mailto:info@railworksph.com'>info@railworksph.com</a>
            </section>
          </div>

          <div className='box-2'>
            <section className='phone'>
              <img src={iconPhone} style={{ width: '30px', height: '30px' }} />
              <p>
                <a href='tel:(02) 8280-2381'>(02) 8280-2381</a>
              </p>
            </section>
          </div>
        </div>

        <div className='navheader header-opacity'>
          <section className='business-logo'>
            <img
              src={logoRailworks}
              alt='Railworks Incorporated'
              width='150'
              className='railworks-logo'
            />
          </section>
          <section className='nav'>
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
          </section>
        </div>

        <div className='box-content'>
          <p className='slogan'>DELIVERING SYSTEMS</p>
          <p className='sub-slogan'>FOR MISSION CRITICAL CHALLENGES</p>
        </div>

        <div className='down-pattern'></div>
      </div>
    )
  }
}

export default HeaderContent
