import React from 'react';
import './header.css';
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/logo.png'



function Header() {
  return (
    <header className='header'>
      <div>
            <img className='logo' src={Logo} alt='logo kasa' />
      </div>
      <Navbar />
      
    </header>
  )
}

export default Header
