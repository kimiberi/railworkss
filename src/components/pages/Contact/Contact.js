import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FooterContent } from '../../layouts/FooterContent/FooterContent'
import { PageHeaderContent } from '../../layouts/PageHeaderContent/PageHeaderContent'
import SmallHeader from '../../../elements/SmallHeader/SmallHeader'
import StickyHeader from '../../../elements/StickyHeader/StickyHeader'
import '../../../elements/StickyHeader/Sticky.scss'
import SidePanel from '../../../elements/SidePanel/SidePanel'
import { useMediaQuery } from 'react-responsive'
import { ContactContent } from '../../layouts/ContactContent/ContactContent'

// RESPONSIVE PLATFORM TABLETVIEW
const HeaderPart = () => {
  const isTablet = useMediaQuery({
    query: '(max-device-width: 1029px)',
  })

  return (
    <div id='page-sticky'>
      {isTablet && (
        <div id='page-sticky'>
          <SidePanel activeContactPage={'contact'} />
        </div>
      )}
      <SmallHeader />
      <StickyHeader activeContactPage={'contact'} />
    </div>
  )
}

export class Contact extends Component {
  render() {
    return (
      <div>
        <HeaderPart />
        <PageHeaderContent headings={'CONTACT US'} />
        <ContactContent />
        <FooterContent activeContactPage={'contact'} />
      </div>
    )
  }
}

export default withRouter(Contact)
