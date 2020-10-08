import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FooterContent from '../../layouts/FooterContent/FooterContent'

export class Footer extends Component {
  render() {
    return (
      <div>
        <FooterContent />
      </div>
    )
  }
}

export default withRouter(Footer)
