"use client";
import React, { useState } from 'react';
import styles from '@/styles/Login.module.css';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your login logic here
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form} id="form">
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.formSubmitBtn}>Login</button>
        </form>
        <div className={styles.forgotPass}>
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
        <div className={styles.signupOption}>
          <span>New here? </span>
          <Link href="/login/signup">Sign Up</Link>
        </div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}