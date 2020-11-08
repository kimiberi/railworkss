import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './HyteraContent.scss'
import imgHyteraFlowchart from '../../../img/partners_company/hytera/hyteraFlowchart.jpg'

export class HyteraContent extends Component {
  render() {
    return (
      <div className='hyteracontent-style'>
        <div className='box-content'>
          <img
            src={imgHyteraFlowchart}
            alt='Hytera Radio Communication'
            width='80%'
            style={{ display: 'block', margin: 'auto' }}
          />
          <div className='spacer-2' />
          <p>
            <b>Hytera Communications Corporation Limited</b> is a global
            privately-run company headquartered in Shenzhen China. Established
            in 1993, Hytera, a global leading PMR solution provider, is
            dedicated to providing customized and complete professional
            communications solutions to government and public security, utility,
            transportation, enterprise and business to improve organizational
            efficiency and make the world safer.
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(HyteraContent)
