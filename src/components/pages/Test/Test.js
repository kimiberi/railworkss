import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Test.scss'

export class Test extends Component {
  render() {
    return <div className='test-style'></div>
  }
}

export default withRouter(Test)
