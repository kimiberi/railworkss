import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ServicesContent from '../../layouts/ServicesContent/ServicesContent'

export class Services extends Component {
  render() {
    return (
      <div>
        <ServicesContent />
      </div>
    )
  }
}

export default withRouter(Services)
