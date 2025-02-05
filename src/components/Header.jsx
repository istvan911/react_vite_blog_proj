import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  //Menü megnyitása
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <li><Link to={'/myposts/1'}>Profilom</Link></li>
            {/*<li><Link to={'/create'}>Poszt létrehozása</Link></li>*/}
            <li><Link to={'/authors'}>Szerzők</Link></li>
            <li><Link to={'/logout'}>Kijelentkezés</Link></li>
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
  