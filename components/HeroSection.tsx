import Link from 'next/link';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={`${styles.headline} ${styles.fadeIn}`}>Discover the Wonders of Ceylon</h1>
        <p className={`${styles.subheading} ${styles.fadeIn}`} style={{ animationDelay: '1s' }}>Where nature and adventure unite</p>
        <p className={`${styles.animatedText} ${styles.fadeIn}`} style={{ animationDelay: '2s' }}>Experience the beauty of the island</p>
        <Link href="/booking">
          <button className={`${styles.ctaButton} ${styles.btn}`}>Book now</button>
        </Link>
      </div>
      <div className={styles.scrollPrompt}>
        <span className={styles.arrowDown}></span>
      </div>
    </section>
  );
};

export default HeroSection;