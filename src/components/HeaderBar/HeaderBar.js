import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HeaderBar.css'
import NavBar from './NavBar'
const Logo = require('../../images/logo.png')

const HeaderBar = (props) => {
    const navigate = useNavigate();
//   need an if/then statement: if props.image equals certain string, render
//   certain image as a background image. This incorporates the slideshow and
//   lead images into the header instead of being separate


  return (
    <div className='header-bar'>
      <NavBar />
      <img id='logo' src={Logo} alt='Chris Haston Cider'
      onClick={()=>{navigate('/')}}></img>
    </div>
  )
}

export default HeaderBar
