import React from 'react'
import { Link } from 'react-router-dom'
import './MainHeader.scss'
import './Sticky.scss'
import { useMediaQuery } from 'react-responsive'
import logoRailworks from '../../img/icons/railworks_whtlogo.png'
import iconPhone from '../../img/icons/favicon_whtphone.png'

// RESPONSIVE PLATFORM TABLETVIEW
export default function StickyHeader() {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1030px)',
  })
  const isTablet = useMediaQuery({
    query: '(max-device-width: 1029px)',
  })

  return (
    // <div id='page-sticky'>
    <div>
      <div className='mainheader-style'>
        {isDesktop && (
          <div className='navheader header-opacity'>
            <section className='business-logo'>
              <a href='/'>
                <img
                  src={logoRailworks}
                  alt='Railworks Incorporated'
                  className='railworks-logo'
                />
              </a>
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
                      window.location.pathname == '/partners' ? 'active' : ''
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
                  <a
                    href='/projects#/projects'
                    className={
                      window.location.pathname == '/projects' ? 'active' : ''
                    }
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className={
                      window.location.pathname == '/contact' ? 'active' : ''
                    }
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </section>
          </div>
        )}

        {isTablet && (
          <div className='navheader header-opacity'>
            <section className='business-logo'>
              <a href='/'>
                <img
                  src={logoRailworks}
                  alt='Railworks Incorporated'
                  width='150'
                  className='railworks-logo'
                />
              </a>
            </section>
            <div className='box-2 pullRight'>
              <section className='phone'>
                <img src={iconPhone} />
                <p>
                  <a href='tel:(02) 8280-2381'>(02) 8280-2381</a>
                </p>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
