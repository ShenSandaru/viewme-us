import styles from './tours.module.css';
import { tours } from '@/data/tours';

export default function Tours() {
  return (
    <main className={styles.tours}>
      <h1 className={styles.title}>Our Tours</h1>
      <p className={styles.description}>Discover the best tours we offer in Ceylon.</p>
      <div className={styles.tourList}>
        {tours.map((tour, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.card2}>
                <img src={tour.imageSrc} alt={tour.title} className={styles.tourImage} />
                <h2 className={styles.tourTitle}>{tour.title}</h2>
                <p className={styles.tourDescription}>{tour.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}