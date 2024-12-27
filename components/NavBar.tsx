"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.logo} ${isOpen ? styles.hidden : ''}`}>
        <Link href="/">
          <img src="https://i.ibb.co/x7wfz0B/view-me-high-resolution-logo-transparent.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li>
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className={pathname === '/' ? styles.active : ''}
          >
            <span className={styles.linkText}>Home</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/destinations" 
            onClick={handleLinkClick}
            className={pathname === '/destinations' ? styles.active : ''}
          >
            <span className={styles.linkText}>Destinations</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/tours" 
            onClick={handleLinkClick}
            className={pathname === '/tours' ? styles.active : ''}
          >
            <span className={styles.linkText}>Tours</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            onClick={handleLinkClick}
            className={pathname === '/about' ? styles.active : ''}
          >
            <span className={styles.linkText}>About</span>
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            onClick={handleLinkClick}
            className={pathname === '/contact' ? styles.active : ''}
          >
            <span className={styles.linkText}>Contact</span>
          </Link>
        </li>

        <div className={styles.authButtons}>
          <Link href="/login" className={styles.loginBtn} onClick={handleLinkClick}>
            <svg viewBox="0 0 24 24" className={styles.arr2} xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
            <span className={styles.text}>Login</span>
            <span className={styles.circle}></span>
            <svg viewBox="0 0 24 24" className={styles.arr1} xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;