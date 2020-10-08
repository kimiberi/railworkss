import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import WhatWeOfferContent from '../../layouts/WhatWeOfferContent/WhatWeOfferContent'

export class WhatWeOffer extends Component {
  render() {
    return (
      <div>
        <WhatWeOfferContent />
      </div>
    )
  }
}

export default withRouter(WhatWeOffer)
