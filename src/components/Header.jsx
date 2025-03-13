import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Menü megnyitása
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (window.innerWidth <= 800) {
      setShowLogo(menuOpen);
    }
  };

  // Menü bezárása kattintás után mobil nézetben
  const closeMenu = () => {
    setMenuOpen(false);
    if (window.innerWidth <= 800) {
      setShowLogo(true);
    }
  };

  // Kijelentkezés funkció
  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    window.dispatchEvent(new Event("storage")); // Értesítés más komponenseknek
    closeMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setShowLogo(true);
      } else if (!menuOpen) {
        setShowLogo(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <nav>
      <div className="container nav-container">
        {/*showLogo &&*/ (
          <Link onClick={closeMenu} className="nav-logo" to={'/'}>
            <img className='logo' src="../images/logo.png" alt="Főoldal" />
          </Link>
        )}

        {/* Menü nagyobb képernyőkre */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li onClick={closeMenu}><ThemeToggle /></li>
          {loggedIn && <li><Link to={'/myposts/1'} onClick={closeMenu}>Profilom</Link></li>}
          <li><Link to={'/authors'} onClick={closeMenu}>Szerzők</Link></li>
          {loggedIn ? (
            <li><Link to={'/'} onClick={handleLogout}>Kijelentkezés</Link></li>
          ) : (
            <li><Link to={'/login'} onClick={closeMenu}>Bejelentkezés</Link></li>
          )}
        </ul>

        {/* Menü gomb mobil nézetben */}
        <button className="nav-toggle-button" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
      