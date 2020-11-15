import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './PageHeaderContent.scss'
import logoRailworks from '../../../img/icons/railworks_whtlogo.png'
import iconLocation from '../../../img/icons/favicon_whtlocation.png'
import iconPhone from '../../../img/icons/favicon_whtphone.png'
import iconEmail from '../../../img/icons/favicon_whtemail.png'

export class PageHeaderContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const activePage = this.props.activePage
    const headings = this.props.headings

    return (
      <div className='pageheader-style background-opacity'>
        <div className='contact-info'>
          <div className='box-1'>
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
            <Link to={`/`}>
              <img
                src={logoRailworks}
                alt='Railworks Incorporated'
                width='150'
                className='railworks-logo'
              />
            </Link>
          </section>
          <section className='nav pullRight'>
            <ul>
              <li>
                {/* <Link
                  to={`/`}
                  className={window.location.pathname == '/' ? 'active' : ''}
                >
                  Home
                </Link> */}
                <a
                  href='/'
                  className={window.location.pathname == '/' ? 'active' : ''}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/about#/about'
                  className={
                    window.location.pathname == '/about' ? 'active' : ''
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/partners#/partners'
                  className={
                    window.location.pathname == `/${activePage}` ? 'active' : ''
                  }
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href='/services#/services'
                  className={
                    window.location.pathname == '/services' ? 'active' : ''
                  }
                >
                  Services
                </a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#contact'>Contact Us</a>
              </li>
            </ul>
          </section>
        </div>

        <div className='box-content'>
          <h1 className='slogan'>{headings}</h1>
        </div>
        <div className='down-pattern'></div>
      </div>
    )
  }
}

export default withRouter(PageHeaderContent)
