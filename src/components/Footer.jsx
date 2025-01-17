import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-container">
        <h2 className='footer-contact'>Lépj kapcsolatba velünk</h2>
        <ul className='footer-ul'>
          <li className='footer-li'>
            <a 
            target='blank'
            href="https://www.instagram.com/">
            <FaInstagram /> Instagram
            </a>
          </li>
          <li className='footer-li'>
            <a 
            target='blank'
            href="https://www.facebook.com/">
            <FaFacebook /> Facebook
            </a>
          </li>
          <li className='footer-li'>
            <a 
            target='blank'
            href="https://discord.com/">
            <FaDiscord /> Discord
            </a>
          </li>
          <li className='footer-li'>
            <a 
            target='blank' 
            href="https://github.com/">Egyéb</a>
          </li>
        </ul>
        <div className="copyright-text">
          © {currentYear} Nagy István. Minden jog fenntartva.
        </div>
      </div>
    </>
  );
}
