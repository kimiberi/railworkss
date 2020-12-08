import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './HomepageContent.scss'
import IntroductionContent from '../IntroductionContent/IntroductionContent'
import WhatWeOfferContent from '../WhatWeOfferContent/WhatWeOfferContent'
import PartnersContent from '../PartnersContent/PartnersContent'
import ServicesContent from '../ServicesContent/ServicesContent'
import ProjectsContent from '../ProjectsContent/ProjectsContent'
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
        <ProjectsContent />

        <div className='customers-content'>
          <h2>Our Customers</h2>
          <div className='spacer-1' />
          <div className='box-content gs_reveal'>
            <a
              href='https://www.pnr.gov.ph/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-size'
                src={logoPNR}
                alt='Philippine National Railway'
              />
            </a>
            <a
              href='http://lrta.gov.ph/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-size'
                src={logoLRT}
                alt='Light Rail Transit Authority'
              />
            </a>
            <a
              href='https://bfp.gov.ph/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-size'
                src={logoFireProtection}
                alt='Bureau of Fire Protection'
              />
            </a>
            <a
              href='https://www.army.mil.ph/home/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-size'
                src={logoKatihan}
                alt='Hukbong Katihan ng Pilipinas'
              />
            </a>
            <a
              href='https://pnp.gov.ph/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-size-pnp'
                src={logoPNP}
                alt='Philippine National Police'
              />
            </a>
            <a
              href='https://pdea.gov.ph/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img-size'
                src={logoPDEA}
                alt='Philippine Drug Enforcement Agency'
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(HomepageContent)
