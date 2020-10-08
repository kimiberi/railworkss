import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FooterContent from '../../layouts/FooterContent/FooterContent'
import HomepageContent from '../../layouts/HomepageContent/HomepageContent'
import PageHeaderContent from '../../layouts/PageHeaderContent/PageHeaderContent'

export class Homepage extends Component {
  render() {
    return (
      <div>
        <PageHeaderContent />
        <HomepageContent />
        <FooterContent />
      </div>
    )
  }
}

export default withRouter(Homepage)
