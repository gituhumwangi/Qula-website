import React, { useState, useEffect } from 'react';
import './Navbar.css';
import icon from '/home/dennis/personal-projects/cfcana-page/src/assets/Nutrition Images/icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 575);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img
        src='https://tse2.mm.bing.net/th/id/OIG2.JGEWq7GazMT8Nndg50Ke?pid=ImgGn'
        alt='Qula Logo'
        className='logo'
      />
      <ul className={`nav-links ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-120} duration={500} onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='team-section' smooth={true} offset={-75} duration={500} onClick={toggleMenu}>
            Team
          </Link>
        </li>
        <li>
          <Link to='contactSection' smooth={true} offset={-75} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <img src={icon} alt='menu-icon' className='icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
