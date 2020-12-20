import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'
import { RadwinContent } from '../../layouts/RadwinContent/RadwinContent'
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
          <SidePanel activePage={'radwin'} />
        </div>
      )}
      <SmallHeader />
      <StickyHeader activePage={'radwin'} />
    </div>
  )
}

export class Radwin extends Component {
  render() {
    return (
      <div>
        <HeaderPart />
        <PageHeaderContent headings={'ABOUT RADWIN'} activePage={'radwin'} />
        <RadwinContent />
        <FooterContent activePage={'radwin'} />
      </div>
    )
  }
}

export default withRouter(Radwin)
