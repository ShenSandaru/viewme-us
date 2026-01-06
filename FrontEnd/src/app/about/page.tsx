import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.headerSection}>
        <h1 className={styles.title}>Making Travel Simpler, Smarter, and Hassle-Free</h1>
        <p className={styles.subheading}>ViewMe-US is your independent travel comparison site.</p>
        <button className={styles.ctaButton}>Explore Tours</button>
      </section>
      <section className={styles.introductionSection}>
        <h2 className={styles.subtitle}>Introduction</h2>
        <p className={styles.text}>
          At ViewMe-US, our mission is to provide unforgettable travel experiences that showcase the natural beauty and cultural richness of Ceylon. We are passionate about creating unique and personalized tours that cater to the diverse interests of our clients.
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-tourist-woman-with-map-old-port-liguria-italy_1303-18559.jpg"
            alt="Introduction"
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.achievementsSection}>
        <h2 className={styles.subtitle}>Key Achievements</h2>
        <div className={styles.achievements}>
          <div className={styles.achievement}>
            <h3 className={styles.achievementNumber}>83 million+</h3>
            <p className={styles.achievementText}>travel rates analyzed</p>
          </div>
          <div className={styles.achievement}>
            <h3 className={styles.achievementNumber}>399</h3>
            <p className={styles.achievementText}>companies compared</p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="https://cdn.pixabay.com/photo/2020/09/24/03/50/achievement-5597527_960_720.png"
            alt="Achievements"
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.missionSection}>
        <h2 className={styles.subtitle}>Our Mission and Values</h2>
        <p className={styles.text}>
          We are committed to transparency, independence, and exceptional customer service. Our goal is to make travel planning simpler and more enjoyable for everyone.
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="https://cdn.pixabay.com/photo/2020/06/03/10/41/quality-5254406_640.png"
            alt="Mission"
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.callToActionSection}>
        <h2 className={styles.subtitle}>Ready to Explore?</h2>
        <button className={styles.ctaButton}>Get Started</button>
      </section>
    </main>
  );
}