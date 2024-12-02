import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from 'react-router-dom';
import header from './header.module.scss';
// import fvlLogo from '../../Image/Home/FVL_Logo.png';
// import tplLogo from '../../Image/Home/TPL_Logo.png';
// import fvlLogo from '../../Image/Home/FVL_Vien.png';
// import tplLogo from '../../Image/Home/TPL_Vien.png';
import fvlLogo from '../../Image/Logo/FVL_half_white.png';
import tplLogo from '../../Image/Logo/TPL_half_white.png';
// import fvlLogo from '../../Image/Logo/FVL_all_White.png';
// import tplLogo from '../../Image/Logo/TPL_all_White.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  const navbarList = [
    { to: 'Solutions', name: 'What we do' },
    { to: 'AboutUs', name: 'Who we are ' },
    { to: 'Outsourcing', name: 'What we think' },
    { to: 'Careers', name: 'Careers' },
    { to: 'Contact', name: 'Contact us' },
  ];

  //  Handle scroll event to change navbar background color
  const handleScroll = () => {
    if (window.scrollY > 50) { // Change 50 to the scroll position you want
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={`navbar navbar-dark navbar-expand-lg sticky-top ${header.navbarBackground} ${isScrolled ? `${header.navbarScrolled}` : ''}`}>
      <div className="container-fluid">
        <div className={header.logo}>
          <NavLink to='/'><img src={fvlLogo} alt="Logo FVL" className={header.logoFVL} /></NavLink>
          <NavLink to='/'><img src={tplLogo} alt="Logo TPL" className={header.logoTPL} /></NavLink>
        </div>
        <button
          className="navbar-toggler bg-none border-0"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navbarList.map((navbarItem, index) => (
              <li className={`nav-item ${header.navItem} `} key={index}>
                <NavLink
                  to={navbarItem.to}
                  className={({ isActive }) =>
                    isActive ? `${header.active} ${header.navLink} nav-link` : `nav-link ${header.navLink}`
                  }
                  onClick={handleLinkClick}
                >
                  {navbarItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
