import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'
import SmallHeader from '../../../elements/SmallHeader/SmallHeader'
import StickyHeader from '../../../elements/StickyHeader/StickyHeader'
import '../../../elements/StickyHeader/Sticky.scss'
import SidePanel from '../../../elements/SidePanel/SidePanel'
import { useMediaQuery } from 'react-responsive'
import { VideoContent } from '../../layouts/VideoContent/VideoContent'

// RESPONSIVE PLATFORM TABLETVIEW
const HeaderPart = () => {
  const isTablet = useMediaQuery({
    query: '(max-device-width: 1029px)',
  })

  return (
    <div id='page-sticky'>
      {isTablet && (
        <div id='page-sticky'>
          <SidePanel />
        </div>
      )}
      <SmallHeader />
      <StickyHeader />
    </div>
  )
}

export class Video extends Component {
  render() {
    return (
      <div>
        <HeaderPart />
        <PageHeaderContent headings={'VIDEO'} />
        <VideoContent />
        <FooterContent />
      </div>
    )
  }
}

export default withRouter(Video)
