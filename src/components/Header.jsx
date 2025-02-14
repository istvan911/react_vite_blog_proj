import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  //Menü megnyitása
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  //800 pixel alatt a menü automatikus bezárása
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="container nav-container">
          <Link className="nav-logo" to={'/'}>
            <h3>Főoldal</h3>
          </Link>

          {/* Menu for larger screens */}
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li><ThemeToggle></ThemeToggle></li>
            <li><Link to={'/myposts/1'}>Profilom</Link></li>
            <li><Link to={'/create'}>Poszt létrehozása</Link></li>
            <li><Link to={'/authors'}>Szerzők</Link></li>
            <li>{loggedIn ? <Link to={'/logout'}>Kijelentkezés</Link> : <Link to={'/login'}>Bejelentkezés</Link>}</li>
          </ul>

          {/* Menu toggle button */}
          <button className="nav-toggle-button" onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
}
  