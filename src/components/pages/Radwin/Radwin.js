import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'
import { RadwinContent } from '../../layouts/RadwinContent/RadwinContent'

export class Radwin extends Component {
  render() {
    return (
      <div>
        <PageHeaderContent headings={'ABOUT RADWIN'} activePage={'radwin'} />
        <RadwinContent />
        <FooterContent activePage={'radwin'} />
      </div>
    )
  }
}

export default withRouter(Radwin)
