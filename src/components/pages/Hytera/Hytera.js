import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { HyteraContent } from '../../layouts/HyteraContent/HyteraContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'
import SmallHeader from '../../../elements/SmallHeader/SmallHeader'
import StickyHeader from '../../../elements/StickyHeader/StickyHeader'
import '../../../elements/StickyHeader/Sticky.scss'
import SidePanel from '../../../elements/SidePanel/SidePanel'
import { useMediaQuery } from 'react-responsive'

// RESPONSIVE PLATFORM TABLETVIEW
const HeaderPart = () => {
  const isTablet = useMediaQuery({
    query: '(max-device-width: 1029px)',
  })

  return (
    <div id='page-sticky'>
      {isTablet && (
        <div id='page-sticky'>
          <SidePanel activePage={'hytera'} />
        </div>
      )}
      <SmallHeader />
      <StickyHeader activePage={'hytera'} />
    </div>
  )
}

export class Hytera extends Component {
  render() {
    return (
      <div>
        <HeaderPart />
        <PageHeaderContent headings={'ABOUT HYTERA'} />
        <HyteraContent />
        <FooterContent activePage={'hytera'} />
      </div>
    )
  }
}

export default withRouter(Hytera)
