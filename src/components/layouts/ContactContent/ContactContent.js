import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './ContactContent.scss'
import iconLocation from '../../../img/icons/black icons/favicon_location.png'
import iconPhone from '../../../img/icons/black icons/favicon_phone.png'
import iconEmail from '../../../img/icons/black icons/favicon_email.png'
import iconTwitter from '../../../img/icons/black icons/twitter.png'
import iconFacebook from '../../../img/icons/black icons/facebook.png'
import iconInstagram from '../../../img/icons/black icons/instagram.png'

export class ContactContent extends Component {
  render() {
    return (
      <div className='contactcontent-style'>
        <div className='box-content'>
          <div className='box-1'>
            <h2>Contact Information</h2>
            <p>
              Our entire team receives specialized training regularly to ensure
              you're giving the best information possible. For any further
              questions, here's how you can reach us:
            </p>
            <div className='spacer-1' />
            <section className='location'>
              <img src={iconLocation} width='18' height='18' />
              <p className='text-left'>
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
            <section className='phone'>
              <img src={iconPhone} style={{ width: '18px', height: '18px' }} />
              <a href='tel:(02) 8280-2381'>(02) 8280-2381</a>
            </section>
            <section className='email'>
              <img src={iconEmail} style={{ width: '18px', height: '18px' }} />
              <a href='mailto:info@railworksph.com'>info@railworksph.com</a>
            </section>

            <div className='spacer-1' />
            <section className='social-icons'>
              <a href='#'>
                <img
                  src={iconTwitter}
                  style={{ width: '25px', height: '25px' }}
                />
              </a>
              <a href='#'>
                <img
                  src={iconFacebook}
                  style={{ width: '25px', height: '25px' }}
                />
              </a>
              <a href='#'>
                <img
                  src={iconInstagram}
                  style={{ width: '25px', height: '25px' }}
                />
              </a>
            </section>
          </div>
          <div className='box-2'>
            <a
              href='https://www.google.com/maps/place/Railworks+Corporation/@14.5202409,121.0343059,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c923a36a5983:0xf6401fbedfe87a9e!8m2!3d14.5202357!4d121.0364946'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='backgroundcover' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ContactContent)
