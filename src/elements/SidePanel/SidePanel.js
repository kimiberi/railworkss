import React from 'react'
import './SidePanel.scss'
import { slide as Menu } from 'react-burger-menu'

export default function SidePanel(props) {
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
              className={window.location.pathname == '/contact' ? 'active' : ''}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </Menu>
  )
}
