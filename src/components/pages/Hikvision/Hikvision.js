import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { HikvisionContent } from '../../layouts/HikvisionContent/HikvisionContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'

export class Hikvision extends Component {
  render() {
    return (
      <div>
        <PageHeaderContent
          headings={'ABOUT HIKVISION'}
          activePage={'hikvision'}
        />
        <HikvisionContent />
        <FooterContent activePage={'hikvision'} />
      </div>
    )
  }
}

export default withRouter(Hikvision)
