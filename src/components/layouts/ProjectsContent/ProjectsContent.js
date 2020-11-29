import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import './ProjectsContent.scss'

// date_create: moment().format("DD-MM-YYYY hh:mm:ss")

export class ProjectsContent extends Component {
  render() {
    return (
      <div className='projects-style' id='/projects'>
        <h2 className='gs_reveal'>Our Projects</h2>
        <div className='spacer-1' />
        <h3 className='center'>Completed Projects</h3>
        <div className='box-content gs_reveal gs_reveal_fromLeft'>
          <section>
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundImage:
                  'url(' +
                  require('../../../img/projects/hyteraradio.jpg') +
                  ')',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='section-content'>
              <span
                style={{
                  color: 'var(--theme-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                Completed Project
              </span>
              {/* <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span> */}

              <h3 style={{ marginTop: '6px' }}>
                Philippine Drug Enforcement Agency
              </h3>
              <p>Supply, Delivery, and Testing of Communication Equipment</p>
              <p>Completed: July 2018</p>
              {/* <p>
                <a href='#'>See More »</a>
              </p> */}
            </div>
          </section>

          <section>
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundImage:
                  'url(' + require('../../../img/projects/phil_army.jpg') + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='section-content'>
              <span
                style={{
                  color: 'var(--theme-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                Completed Project
              </span>
              {/* <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span> */}

              <h3 style={{ marginTop: '6px' }}>Philippine Army</h3>
              <p>Supply and Delivery of Various UHF Commercial Radios</p>
              <p>Completed: November 2019</p>
              {/* <a href='#'>See More »</a> */}
            </div>
          </section>

          <section>
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundImage:
                  'url(' + require('../../../img/projects/bfp.jpg') + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='section-content'>
              <span
                style={{
                  color: 'var(--theme-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                Completed Project
              </span>
              {/* <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span> */}

              <h3 style={{ marginTop: '4px' }}>
                Bureau of Fire Protection (BFP)
              </h3>
              <p>
                Supply, Delivery and Installation of Digital Radio System For
                BFP Region IV-A & Region II
              </p>
              <p>Completed: June 2019</p>
              {/* <p>Supply and Delivery HF Radio for Bureau of Fire Protection</p>
              <p>Completed: July 2018</p> */}

              {/* <a href='#'>See More »</a> */}
            </div>
          </section>

          <section>
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundImage:
                  'url(' + require('../../../img/projects/lrt_train.jpg') + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='section-content'>
              <span
                style={{
                  color: 'var(--theme-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                Completed Project
              </span>
              {/* <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span> */}

              <h3 style={{ marginTop: '6px' }}>
                Light Rail Transit Authority (LRTA)
              </h3>
              <p>Restoration of Fiber Optic Cable Communication Backbone</p>
              <p>Completed: February 2020</p>
              {/* <a href='#'>See More »</a> */}
            </div>
          </section>
        </div>

        <div className='spacer-2' />
        <h3 className='center'>Ongoing Projects</h3>
        <div className='box-content gs_reveal gs_reveal_fromRight'>
          <section>
            <div
              style={{
                height: '150px',
                width: '180px',
                display: 'block',
                margin: 'auto',
                marginTop: '25px',
                backgroundImage:
                  'url(' + require('../../../img/logo_customers/lrt.png') + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='section-content'>
              <span
                style={{
                  color: 'var(--theme-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                Ongoing Project
              </span>
              {/* <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span> */}

              <h3 style={{ marginTop: '6px' }}>
                Light Rail Transit Authority (LRTA)
              </h3>
              <p>
                Supply of Telephone Equipment and TETRA Base Station
                Synchronization (TBS-SYN) and Tetra radio switch upgrade.
              </p>

              <p>Started: August 2020</p>
              {/* <p>
                <a href='#'>See More »</a>
              </p> */}
            </div>
          </section>

          <section>
            <div
              style={{
                height: '150px',
                width: '150px',
                display: 'block',
                margin: 'auto',
                marginTop: '25px',
                backgroundImage:
                  'url(' + require('../../../img/logo_customers/pnr.png') + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='section-content'>
              <span
                style={{
                  color: 'var(--theme-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                Ongoing Project
              </span>
              {/* <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span> */}

              <h3 style={{ marginTop: '6px' }}>
                Philippine National Railways (PNR)
              </h3>
              <p>
                Installation, Testing and Commissioning of Terrestial Trunk
                Radio (TETRA) System
              </p>

              <p>Started: November 2019</p>

              <p>
                Supply, Delivery, and Installation of PNR HF Data Communication
              </p>
              <p>Started: January 2020</p>

              {/* <a href='#'>See More »</a> */}
            </div>
          </section>

          <section>
            <div
              style={{
                height: '150px',
                width: '150px',
                display: 'block',
                margin: 'auto',
                marginTop: '25px',
                backgroundImage:
                  'url(' +
                  require('../../../img/logo_customers/fireprotection.png') +
                  ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='section-content'>
              <span
                style={{
                  color: 'var(--theme-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                Ongoing Project
              </span>
              {/* <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span> */}

              <h3 style={{ marginTop: '6px' }}>
                Bureau of Fire Protection (BFP)
              </h3>
              <p>
                Supply, Delivery, Installation, Testing and Commissioning of
                Digital Radio System for BFP Region X
              </p>
              <p>Started: February 2020</p>
              {/* <a href='#'>See More »</a> */}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectsContent)
