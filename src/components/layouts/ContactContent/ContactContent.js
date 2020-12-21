import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './ContactContent.scss'

export class ContactContent extends Component {
  render() {
    return (
      <div className='contactcontent-style'>
        <div className='box-content'>
          <p>hello</p>
        </div>
      </div>
    )
  }
}

export default withRouter(ContactContent)
