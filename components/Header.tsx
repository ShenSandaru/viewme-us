"use client";

import { useState } from 'react';
import '../styles/Header.module.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">ViewMe-US</div>
      <div className={`navMenu ${menuOpen ? 'show' : ''}`}>
        <a href="/">Home</a>
        <a href="/tours">Tours</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="hamburgerMenu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default NavBar;