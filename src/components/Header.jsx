import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  // Menü megnyitása
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (window.innerWidth <= 800) {
      setShowLogo(menuOpen);
    }
  };

  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  // 800 pixel alatt a logó megjelenítésének kezelése a menü állapotától függően
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setShowLogo(true);
      } else if (!menuOpen) {
        setShowLogo(true);
      }
    };

    handleResize(); // Meghívás kezdeti állapot frissítéséhez
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <nav>
      <div className="container nav-container">
        {showLogo && (
          <Link className="nav-logo" to={'/'}>
            <img className='logo' src="../public/images/logo.png" alt="Főoldal" />
          </Link>
        )}

        {/* Menü nagyobb képernyőkre */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><ThemeToggle /></li>
          <li><Link to={'/myposts/1'}>Profilom</Link></li>
          <li><Link to={'/create'}>Poszt létrehozása</Link></li>
          <li><Link to={'/authors'}>Szerzők</Link></li>
          <li>{loggedIn ? <Link to={'/logout'}>Kijelentkezés</Link> : <Link to={'/login'}>Bejelentkezés</Link>}</li>
        </ul>

        {/* Menü gomb mobil nézetben */}
        <button className="nav-toggle-button" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}