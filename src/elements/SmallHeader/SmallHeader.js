import React from 'react'
import './SmallHeader.scss'
import iconLocation from '../../img/icons/favicon_whtlocation.png'
import iconEmail from '../../img/icons/favicon_whtemail.png'
import iconPhone from '../../img/icons/favicon_whtphone.png'
import { useMediaQuery } from 'react-responsive'

// RESPONSIVE PLATFORM TABLETVIEW
export default function SmallHeader() {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1030px)',
  })
  const isTablet = useMediaQuery({
    query: '(max-device-width: 1029px)',
  })

  return (
    <div className='smallheader-style'>
      {isDesktop && (
        <>
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
                    101 E. Aguinaldo Ave. AFPOVAI Phase I Western Bicutan,
                    Taguig City 1630 Philippines
                  </a>
                </p>
              </section>
              <section className='email'>
                <img
                  src={iconEmail}
                  style={{ width: '18px', height: '18px' }}
                />
                <a href='mailto:info@railworksph.com'>info@railworksph.com</a>
              </section>
            </div>

            <div className='box-2'>
              <section className='phone'>
                <img src={iconPhone} />
                <p>
                  <a href='tel:(02) 8280-2381'>(02) 8280-2381</a>
                </p>
              </section>
            </div>
          </div>
        </>
      )}

      {isTablet && (
        <>
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
                    101 E. Aguinaldo Ave. AFPOVAI Phase I Western Bicutan,
                    Taguig City 1630 Philippines
                  </a>
                </p>
              </section>
              <section className='email'>
                <img
                  src={iconEmail}
                  style={{ width: '18px', height: '18px' }}
                />
                <a href='mailto:info@railworksph.com'>info@railworksph.com</a>
              </section>
            </div>

            <div></div>
          </div>
        </>
      )}
    </div>
  )
}
