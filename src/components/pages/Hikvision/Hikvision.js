import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { HikvisionContent } from '../../layouts/HikvisionContent/HikvisionContent'
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
          <SidePanel activePage={'hikvision'} />
        </div>
      )}
      <SmallHeader />
      <StickyHeader activePage={'hikvision'} />
    </div>
  )
}

export class Hikvision extends Component {
  render() {
    return (
      <div>
        <HeaderPart />
        <PageHeaderContent
          headings={'ABOUT HIKVISION'}
          activePage={'hikvision'}
        />
        <HikvisionContent />
        <FooterContent activePage={'hikvision'} />
      </div>
    )
  }
}

export default withRouter(Hikvision)
