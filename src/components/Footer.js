import './Footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Magic lake</h1>
          <p>Choose your Favourite destination</p>
        </div>
        <div>
          <a href="https://www.facebook.com/magiclakecamp">
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href="https://www.instagram.com/magic.lake.camp/">
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default Footer