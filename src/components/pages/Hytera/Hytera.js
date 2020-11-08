import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { HyteraContent } from '../../layouts/HyteraContent/HyteraContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'

export class Hytera extends Component {
  render() {
    return (
      <div>
        <PageHeaderContent headings={'ABOUT HYTERA'} activePage={'hytera'} />
        <HyteraContent />
        <FooterContent activePage={'hytera'} />
      </div>
    )
  }
}

export default withRouter(Hytera)
