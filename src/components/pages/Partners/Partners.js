import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PartnersContent from '../../layouts/PartnersContent/PartnersContent'

export class Partners extends Component {
  render() {
    return (
      <div>
        <PartnersContent />
      </div>
    )
  }
}

export default withRouter(Partners)
