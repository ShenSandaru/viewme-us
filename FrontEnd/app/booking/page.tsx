"use client";
import React, { useState } from 'react';
import styles from './Booking.module.css';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowConfirmation(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
      setFormData({ name: '', email: '', date: '', message: '' });
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      {showConfirmation && (
        <div className={styles.confirmation}>
          <div className={styles.confirmationContent}>
            <h3>Booking Confirmed!</h3>
            <p>Thank you for your booking request, {formData.name}!</p>
            <p>We will contact you shortly at {formData.email}</p>
          </div>
        </div>
      )}
      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Book Your Adventure<span className={styles.blinkingDot}>.</span></h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.formSubmitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
}