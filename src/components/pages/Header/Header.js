import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderContent from '../../layouts/HeaderContent/HeaderContent'

export class Header extends Component {
  render() {
    return (
      <div>
        <HeaderContent />
      </div>
    )
  }
}

export default withRouter(Header)
