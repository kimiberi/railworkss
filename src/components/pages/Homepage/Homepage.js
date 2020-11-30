import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FooterContent from '../../layouts/FooterContent/FooterContent'
import HomepageContent from '../../layouts/HomepageContent/HomepageContent'
import PageHeaderContent from '../../layouts/PageHeaderContent/PageHeaderContent'
import HeaderContent from '../../layouts/HeaderContent/HeaderContent'
import { Test } from '../Test/Test'
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
          <SidePanel />
        </div>
      )}
      <SmallHeader />
      <StickyHeader />
    </div>
  )
}

export class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <PageHeaderContent /> */}
        {/* <Test /> */}

        <HeaderPart />
        <HeaderContent />
        <HomepageContent />
        <FooterContent activePage={'partners'} />
      </div>
    )
  }
}

export default withRouter(Homepage)
