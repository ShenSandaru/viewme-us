"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <li><Link href="/">Home</Link></li>
        <li><Link href="/destinations">Destinations</Link></li>
        <li><Link href="/tours">Tours</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;