import React, { Component } from 'react'
import './HeaderContent.scss'
import imgBranchOffice from '../../../img/branch-office.jpg'

export class HeaderContent extends Component {
  render() {
    return (
      <div className='header-style background-opacity'>
        <div className='box-content'>
          <p className='slogan'>DELIVERING SYSTEMS</p>
          <p className='sub-slogan'>FOR MISSION CRITICAL CHALLENGESSSSSSSS</p>
        </div>

        <div className='down-pattern'></div>
      </div>
    )
  }
}

export default HeaderContent
