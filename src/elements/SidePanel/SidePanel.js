import React from 'react'
import './SidePanel.scss'
import { slide as Menu } from 'react-burger-menu'
import iconLocation from '../../img/icons/favicon_whtlocation.png'
import iconEmail from '../../img/icons/favicon_whtemail.png'
import iconPhone from '../../img/icons/favicon_whtphone.png'

export default function SidePanel(props) {
  const activePage = props.activePage
  const activeContactPage = props.activeContactPage

  return (
    <Menu {...props}>
      <div className='nav-root nav'>
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
              className={window.location.pathname == '/about' ? 'active' : ''}
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
                window.location.pathname == `/${activeContactPage}`
                  ? 'active'
                  : ''
              }
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className='spacer-2' />
        <section className='location'>
          <img src={iconLocation} width='18' height='18' />
          <p>
            <a
              href='https://www.google.com/maps/place/Railworks+Corporation/@14.5202409,121.0343059,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c923a36a5983:0xf6401fbedfe87a9e!8m2!3d14.5202357!4d121.0364946'
              target='_blank'
              rel='noopener noreferrer'
            >
              101 E. Aguinaldo Ave. AFPOVAI Phase I Western Bicutan, Taguig City
              1630 Philippines
            </a>
          </p>
        </section>

        <div className='spacer-1' />

        <section className='email'>
          <img src={iconEmail} style={{ width: '18px', height: '18px' }} />
          <a href='mailto:info@railworksph.com'>info@railworksph.com</a>
        </section>

        <div className='spacer-1' />

        <section className='phone'>
          <img src={iconPhone} style={{ width: '18px', height: '18px' }} />
          <p>
            <a href='tel:(02) 8280-2381'>(02) 8280-2381</a>
          </p>
        </section>
      </div>
    </Menu>
  )
}
