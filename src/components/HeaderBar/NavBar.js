import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <nav className='navbar'>
      <button
        onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
        <ul className={`menu-nav ${navbarOpen ? " show-menu" : ""}`}>
            {/* Don't forget to add an onClick that closes menu! */}
            <li>The Craftsman</li>
            <li>The Farm</li>
            <li>The Apples</li>
            <li>The Ciders</li>
            <li>Gallery</li>
        </ul>
    </nav>
  )
}

export default NavBar
