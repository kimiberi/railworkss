import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './PageHeaderContent.scss'
import '../../../elements/StickyHeader/Sticky.scss'

export class PageHeaderContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const headings = this.props.headings

    return (
      <div className='pageheader-style background-opacity'>
        <div className='box-content'>
          <h1 className='slogan'>{headings}</h1>
        </div>
        <div className='down-pattern'></div>
      </div>
    )
  }
}

export default withRouter(PageHeaderContent)
