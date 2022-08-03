import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu, FiInstagram } from "react-icons/fi"
import './NavBar.css'

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <nav className='navbar'>
      <button id="menu"
        onClick={handleToggle}>
        {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>
      <ul className={`menu-nav ${navbarOpen ? " show-menu" : ""}`}>
         {/* Don't forget to add an onClick that closes menu! */}
        <li>The Craftsman</li>
        <li>The Farm</li>
        <li>The Apples</li>
        <li>The Ciders</li>
        <li>Gallery</li>
       </ul>
       <button onClick={()=>window.open('https://www.instagram.com/c.haston.cider/','_blank')}
       className={`insta ${navbarOpen ? " show-insta" : ""}`}> 
       <FiInstagram style={{ width: "40px", height: "40px" }} /></button>
    </nav>
  )
}

export default NavBar
