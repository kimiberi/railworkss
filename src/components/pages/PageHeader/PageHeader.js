import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PageHeaderContent from '../../layouts/PageHeaderContent/PageHeaderContent'

export class PageHeader extends Component {
  render() {
    return (
      <div>
        <PageHeaderContent />
      </div>
    )
  }
}

export default withRouter(PageHeader)
