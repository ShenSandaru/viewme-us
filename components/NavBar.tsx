"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.logo} ${isOpen ? styles.hidden : ''}`}>
        <Link href="/">ViewMe</Link>
      </div>
      
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link href="/destinations" onClick={handleLinkClick}>Destinations</Link></li>
        <li><Link href="/tours" onClick={handleLinkClick}>Tours</Link></li>
        <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;