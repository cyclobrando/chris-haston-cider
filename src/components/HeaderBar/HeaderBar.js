import React from 'react'
import './HeaderBar.css'
const Logo = require('../../images/logo.png')

const HeaderBar = (props) => {
//   need an if/then statement: if props.image equals certain string, render
//   certain image as a background image. This incorporates the slideshow and
//   lead images into the header instead of being separate

//   Also consider whether hamburger menu will drop down or come from left, 
//   pushing image to the right


  return (
    <div className='header-bar'>
      <img id='logo' src={Logo} alt='Chris Haston Cider'></img>
    </div>
  )
}

export default HeaderBar
