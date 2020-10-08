import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FooterContent from '../../layouts/FooterContent/FooterContent'
import HeaderContent from '../../layouts/HeaderContent/HeaderContent'
import HomepageContent from '../../layouts/HomepageContent/HomepageContent'

export class Homepage extends Component {
  render() {
    return (
      <div>
        <HeaderContent />
        <HomepageContent />
        <FooterContent />
      </div>
    )
  }
}

export default withRouter(Homepage)
