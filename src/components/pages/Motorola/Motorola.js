import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { MotorolaContent } from '../../layouts/MotorolaContent/MotorolaContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'

export class Motorola extends Component {
  render() {
    return (
      <div>
        <PageHeaderContent
          headings={'ABOUT MOTOROLA'}
          activePage={'motorola'}
        />
        <MotorolaContent />
        <FooterContent activePage={'motorola'} />
      </div>
    )
  }
}

export default withRouter(Motorola)
