import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import './ProjectsContent.scss'

// date_create: moment().format("DD-MM-YYYY hh:mm:ss")

export class ProjectsContent extends Component {
  render() {
    return (
      <div className='projects-style' id='/projects'>
        <h2>Our Projects</h2>
        <div className='box-content'>
          <section>
            <div
              style={{
                height: '200px',
                width: '100%',
                backgroundImage:
                  'url(' +
                  require('../../../img/projects/hytera_box.jpg') +
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
                Completed Project
              </span>
              <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span>

              <h3 style={{ marginTop: '6px' }}>
                End-User: Philippine Drug Enforcement Agency
              </h3>
              <p>
                Application: Supply, Delivery, and Testing of Communication
                Equipment
              </p>
              <p>
                Worth: <b>Php 12,000,000.00</b>
              </p>
              <p>Completed: July 2018</p>
              <p>
                <a href='#'>See More »</a>
              </p>
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
              <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span>

              <h3 style={{ marginTop: '6px' }}>End-User: Philippine Army</h3>
              <p>
                Application: Supply and Delivery of Various UHF Commercial
                Radios
              </p>
              <p>
                Worth: <b>Php 7,900,000.00</b>
              </p>
              <p>Completed: November 2019</p>
              <a href='#'>See More »</a>
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
              <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span>

              <h3 style={{ marginTop: '6px' }}>
                End-User: Bureau of Fire and Prevention (BFP)
              </h3>
              <p>
                Application: Supply, Delivery, Installation, Commissioning...
              </p>
              <p>
                Worth: <b>Php 150,000,000.00</b>
              </p>
              <p>Completed: December 2019</p>
              <a href='#'>See More »</a>
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
              <span style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                {moment().format(' • MMM DD YYYY')} • by admin
              </span>

              <h3 style={{ marginTop: '6px' }}>
                End-User: Light Rail Transit Authority (LRTA)
              </h3>
              <p>
                Application: Restoration of Fiber Optic Cable Communication
                Backbone
              </p>
              <p>
                Worth: <b>Php 2,500,000.00</b>
              </p>
              <p>Completed: February 2020</p>
              <a href='#'>See More »</a>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectsContent)
