import styles from '../../styles/Booking.module.css';

export default function Booking() {
  return (
    <main className={styles.booking}>
      <h1 className={styles.title}>Book Your Adventure in Ceylon</h1>
      <p className={styles.description}>Fill out the form below to book your trip.</p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input type="date" id="date" className={styles.input} required />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </main>
  );
}