import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './IntroductionContent.scss'
import imgBranchOffice from '../../../img/branch-office.jpg'

export class IntroductionContent extends Component {
  render() {
    return (
      <div className='intro-style' id='/about'>
        <div className='box-content'>
          <div className='box-1 animation-effect'>
            <img src={imgBranchOffice} alt='Main Building Office' />
          </div>
          <div className='box-2'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <hr />
              <h1>Who We Are</h1>
            </div>
            <div className='spacer-1'></div>
            <p>
              <b>Railworks Corporation</b> expanded to Services specializing in
              Installation, Commissioning, Migration and Integration works.
              Target markets includes Public Safety Agency, Railway, Government
              and Non-Government Organization. Railworks Corporation envisions
              to be a premier and trusted System Integrator and Solutions
              provider in the Philippines.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(IntroductionContent)
