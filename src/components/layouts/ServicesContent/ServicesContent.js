import React, { Component } from 'react'
import './ServicesContent.scss'
import iconCheck from '../../../img/icons/checkwht.png'
import BGradio from '../../../img/backgrounds/walkie-talkie.jpg'
import styled from '@emotion/styled/macro'

// INSTALL THIS
// yarn add @emotion/styled
// yarn add @emotion/core

const DisplayOver = styled.div({
  height: '100%',
  left: '0',
  position: 'absolute',
  top: '0',
  width: '100%',
  zIndex: 2,
  transition: 'background-color 350ms ease',
  backgroundColor: 'transparent',
  padding: '60px 20px 0 20px',
  boxSizing: 'border-box',
})

const BigTitle = styled.h2({
  textTransform: 'uppercase',
  fontFamily: 'Helvetica',
})

const Hover = styled.div({
  opacity: 0,
  transition: 'opacity 350ms ease',
})

const SubTitle = styled.h4({
  fontFamily: 'Helvetica',
  transform: 'translate3d(0,50px,0)',
  transition: 'transform 350ms ease',
})

const Paragraph = styled.p({
  transform: 'translate3d(0,50px,0)',
  transition: 'transform 350ms ease',
})

const CTA = styled.a({
  position: 'absolute',
  bottom: '20px',
  left: '20px',
})

const BackgroundFlipCard_1 = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '320px',
  height: '230px',
  cursor: 'pointer',
  backgroundImage:
    'url(' + require('../../../img/backgrounds/handyradio.jpg') + ')',

  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
})

function FlipCard_1() {
  return (
    <div style={{ marginRight: '20px' }}>
      <BackgroundFlipCard_1>
        <DisplayOver>
          {/* <BigTitle></BigTitle> */}
          <Hover>
            {/* <SubTitle></SubTitle> */}
            <Paragraph>
              Installation, Comissioning and Integration Services (Turnkey
              Projects)
            </Paragraph>
            <CTA>View More +</CTA>
          </Hover>
        </DisplayOver>
      </BackgroundFlipCard_1>
    </div>
  )
}

const BackgroundFlipCard_2 = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '320px',
  height: '230px',
  cursor: 'pointer',
  backgroundImage:
    'url(' + require('../../../img/backgrounds/wiredcabling.jpg') + ')',

  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
})

function FlipCard_2() {
  return (
    <div style={{ marginRight: '20px' }}>
      <BackgroundFlipCard_2>
        <DisplayOver>
          {/* <BigTitle></BigTitle> */}
          <Hover>
            {/* <SubTitle></SubTitle> */}
            <Paragraph>
              Supply of ancillary materials (Power Systems, Batteries,
              Grounding, Structured Cabling, Equipment Racks, etc.)
            </Paragraph>
            <CTA>View More +</CTA>
          </Hover>
        </DisplayOver>
      </BackgroundFlipCard_2>
    </div>
  )
}

const BackgroundFlipCard_3 = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '320px',
  height: '230px',
  cursor: 'pointer',
  backgroundImage:
    'url(' + require('../../../img/backgrounds/cabling.jpeg') + ')',

  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
})

function FlipCard_3() {
  return (
    <div>
      <BackgroundFlipCard_3>
        <DisplayOver>
          {/* <BigTitle></BigTitle> */}
          <Hover>
            {/* <SubTitle></SubTitle> */}
            <Paragraph>
              Supply, Design and Installation of Fiber Optic Cables (FOC)
            </Paragraph>
            <CTA>View More +</CTA>
          </Hover>
        </DisplayOver>
      </BackgroundFlipCard_3>
    </div>
  )
}

const BackgroundFlipCard_4 = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '320px',
  height: '230px',
  cursor: 'pointer',
  backgroundImage:
    'url(' + require('../../../img/backgrounds/walkietalkie_case.jpg') + ')',

  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
})

function FlipCard_4() {
  return (
    <div style={{ marginRight: '20px' }}>
      <BackgroundFlipCard_4>
        <DisplayOver>
          {/* <BigTitle></BigTitle> */}
          <Hover>
            {/* <SubTitle></SubTitle> */}
            <Paragraph>
              Supply, Installation and Commissioning of Digital Radio System
              (DMR Conventional, DMR Trunking and TETRA System)
            </Paragraph>
            <CTA>View More +</CTA>
          </Hover>
        </DisplayOver>
      </BackgroundFlipCard_4>
    </div>
  )
}

const BackgroundFlipCard_5 = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '320px',
  height: '230px',
  cursor: 'pointer',
  backgroundImage:
    'url(' + require('../../../img/backgrounds/constructionworker.jpg') + ')',

  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
})

function FlipCard_5() {
  return (
    <div style={{ marginRight: '20px' }}>
      <BackgroundFlipCard_5>
        <DisplayOver>
          {/* <BigTitle></BigTitle> */}
          <Hover>
            {/* <SubTitle></SubTitle> */}
            <Paragraph>
              Structural Design Engineering and Construction (with PCAB License)
            </Paragraph>
            <CTA>View More +</CTA>
          </Hover>
        </DisplayOver>
      </BackgroundFlipCard_5>
    </div>
  )
}

const BackgroundFlipCard_6 = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '320px',
  height: '230px',
  cursor: 'pointer',
  backgroundImage:
    'url(' + require('../../../img/backgrounds/cableladder.jpg') + ')',

  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
})

function FlipCard_6() {
  return (
    <div>
      <BackgroundFlipCard_6>
        <DisplayOver>
          {/* <BigTitle></BigTitle> */}
          <Hover>
            {/* <SubTitle></SubTitle> */}
            <Paragraph>
              Metal Fabrication i.e. cable ladders, antenna brackets, PT mast
              and equipment cabinets.
            </Paragraph>
            <CTA>View More +</CTA>
          </Hover>
        </DisplayOver>
      </BackgroundFlipCard_6>
    </div>
  )
}

function ParallaxContent() {
  return (
    <div>
      <div className='top-pattern'></div>

      <section className='services-content background-opacity'>
        <h2>Our Services</h2>
        <div className='box-content'>
          <div className='box-info'>
            <FlipCard_1 />
            <FlipCard_2 />
            <FlipCard_3 />
          </div>
          <div className='box-info'>
            <FlipCard_4 />
            <FlipCard_5 />
            <FlipCard_6 />
          </div>
          {/* <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Installation, Comissioning and Integration Services (Turnkey Projects)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Supply of ancillary materials (Power Systems, Batteries, Grounding, Structured Cabling, Equipment Racks, etc.)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Supply, Design and Installation of Fiber Optic Cables (FOC)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Supply, Installation and Commissioning of Digital Radio System (DMR Conventional, DMR Trunking and TETRA System)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Structural Design Engineering and Construction (with PCAB License)</p>
                    </div>
                    <div className="box-info">
                        <img src={iconCheck} alt="check icon" width="24" style={{marginRight: '20px'}} />
                        <p>Metal Fabrication i.e. cable ladders, antenna brackets, PT mast and equipment cabinets.</p>
                    </div> */}
        </div>
      </section>
    </div>
  )
}

export class ServicesContent extends Component {
  render() {
    return (
      <div className='services-style'>
        <ParallaxContent />
      </div>
    )
  }
}

export default ServicesContent
