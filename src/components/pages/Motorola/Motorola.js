import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { MotorolaContent } from '../../layouts/MotorolaContent/MotorolaContent'
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
          <SidePanel activePage={'motorola'} />
        </div>
      )}
      <SmallHeader />
      <StickyHeader activePage={'motorola'} />
    </div>
  )
}

export class Motorola extends Component {
  render() {
    return (
      <div>
        <HeaderPart />
        <PageHeaderContent headings={'ABOUT MOTOROLA'} />
        <MotorolaContent />
        <FooterContent activePage={'motorola'} />
      </div>
    )
  }
}

export default withRouter(Motorola)
