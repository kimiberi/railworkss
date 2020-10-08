import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import IntroductionContent from '../../layouts/IntroductionContent/IntroductionContent'

export class Introduction extends Component {
  render() {
    return (
      <div>
        <IntroductionContent />
      </div>
    )
  }
}

export default withRouter(Introduction)
