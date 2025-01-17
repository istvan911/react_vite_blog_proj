import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect to close the menu if screen width is greater than 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false); // Automatically close the menu
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="container nav-container">
          <Link className="nav-logo" to={'/'}>
            <h3>Logo</h3>
          </Link>

          {/* Menu for larger screens */}
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li><Link to={'/myposts/1'}>Profilom</Link></li>
            <li><Link to={'/create'}>Poszt létrehozása</Link></li>
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
  