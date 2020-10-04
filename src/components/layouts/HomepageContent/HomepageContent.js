import React, { Component } from 'react'
import './HomepageContent.scss'
import IntroductionContent from '../IntroductionContent/IntroductionContent'
import WhatWeOfferContent from '../WhatWeOfferContent/WhatWeOfferContent'
import PartnersContent from '../PartnersContent/PartnersContent'
import ServicesContent from '../ServicesContent/ServicesContent'
import logoHytera from '../../../img/logo_partners/hytera.png'
import logoMotorola from '../../../img/logo_partners/motorola.png'
import logoRadwin from '../../../img/logo_partners/radwin.png'
import logoHikVision from '../../../img/logo_partners/hikvision.png'
import logoPNR from '../../../img/logo_customers/pnr.png'
import logoLRT from '../../../img/logo_customers/lrt.png'
import logoFireProtection from '../../../img/logo_customers/fireprotection.png'
import logoKatihan from '../../../img/logo_customers/katihan.png'
import logoPNP from '../../../img/logo_customers/pnp.png'
import logoPDEA from '../../../img/logo_customers/pdea.png'

export class HomepageContent extends Component {
  render() {
    return (
      <div className='homepage-style'>
        <IntroductionContent />
        <WhatWeOfferContent />
        <PartnersContent />
        <ServicesContent />

        <div className='partners-content'>
          <h2>Our Partners</h2>
          <div className='box-content'>
            <a href='https://hytera.ph/' target='_blank'>
              <img src={logoHytera} alt='Hytera' width='145' />
            </a>
            <a href='https://www.motorolasolutions.com/' target='_blank'>
              <img src={logoMotorola} alt='Motorola' width='145' />
            </a>
            <a href='https://www.radwin.com/' target='_blank'>
              <img src={logoRadwin} alt='Radwin' width='145' />
            </a>
            <a href='https://www.hikvision.com/' target='_blank'>
              <img src={logoHikVision} alt='HikVision' width='145' />
            </a>
          </div>
        </div>

        <div className='customers-content'>
          <h2>Our Customers</h2>
          <div className='box-content'>
            <a href='https://www.pnr.gov.ph/' target='_blank'>
              <img
                src={logoPNR}
                alt='Philippine National Railway'
                width='100'
              />
            </a>
            <a href='http://lrta.gov.ph/' target='_blank'>
              <img
                src={logoLRT}
                alt='Light Rail Transit Authority'
                width='110'
              />
            </a>
            <a href='https://bfp.gov.ph/' target='_blank'>
              <img
                src={logoFireProtection}
                alt='Bureau of Fire Protection'
                width='100'
              />
            </a>
            <a href='https://www.army.mil.ph/home/' target='_blank'>
              <img
                src={logoKatihan}
                alt='Hukbong Katihan ng Pilipinas'
                width='100'
              />
            </a>
            <a href='https://pnp.gov.ph/' target='_blank'>
              <img src={logoPNP} alt='Philippine National Police' width='70' />
            </a>
            <a href='https://pdea.gov.ph/' target='_blank'>
              <img
                src={logoPDEA}
                alt='Philippine Drug Enforcement Agency'
                width='100'
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HomepageContent
