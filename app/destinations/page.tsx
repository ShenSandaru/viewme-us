"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Destination.module.css';
import Navbar from '../../components/NavBar';
import SearchBar from './SearchBar';
import toursStyles from '../../styles/Tours.module.css'; // Import tours styles

const fetchDestinations = async () => {
  // Simulate an API call
  return [
    {
      title: "Sigiriya",
      description: "Explore the ancient rock fortress.",
      imageSrc: "https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lnaXJpeWElMjByb2NrfGVufDB8fDB8fHww",
      slug: "sigiriya",
    },
    {
      title: "Ella",
      description: "Experience the scenic beauty of Ella.",
      imageSrc: "https://as2.ftcdn.net/v2/jpg/05/34/17/55/1000_F_534175590_YIY7EbZcpimUANbDXR3KLVgdKHWA1qWb.jpg",
      slug: "ella",
    },
    {
      title: "Kandy",
      description: "Discover the cultural capital of Sri Lanka.",
      imageSrc: "https://media.istockphoto.com/id/502631824/photo/temple-of-the-tooth-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=2ltjIh94gedLEJ0rgu8djEXhrfatIcVBZCH6WVr3z0k=",
      slug: "kandy",
    },
    {
      title: "Galle",
      description: "Visit the historic Galle Fort.",
      imageSrc: "https://i.pinimg.com/736x/9d/fc/50/9dfc50132b29d1bf72379a1bb6acd744.jpg",
      slug: "galle",
    },
    {
      title: "Nuwara Eliya",
      description: "Enjoy the cool climate of Nuwara Eliya.",
      imageSrc: "https://lakesidecottages.lk/wp-content/uploads/2022/06/Best-Places-To-Visit-In-Nuwara-Eliya.jpg",
      slug: "nuwara-eliya",
    },
    {
      title: "Yala",
      description: "Experience wildlife at Yala National Park.",
      imageSrc: "https://media.istockphoto.com/id/1489566726/photo/leopard-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=kIHqKhwO_JCq94l7yg8zkZuY-v-BbiaaRxr-giy97w4=",
      slug: "yala",
    },
  ];
};

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [destinations, setDestinations] = useState<{ title: string; description: string; imageSrc: string; slug: string; }[]>([]);

  useEffect(() => {
    const getDestinations = async () => {
      const data = await fetchDestinations();
      setDestinations(data);
    };

    getDestinations();
  }, []);

  const filteredDestinations = destinations.filter(destination =>
    destination.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className={`${styles.destination} ${toursStyles.mobileResponsive}`}> {/* Apply responsive class */}
        <h1 className={styles.title}>Our Destinations</h1>
        <p className={styles.description}>Explore our popular destinations.</p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className={`${styles.destinationList} ${toursStyles.gridResponsive}`}> {/* Apply responsive grid */}
          {filteredDestinations.map((destination, index) => (
            <div key={index} className={styles.cardWrapper}>
              <Link href={`/destinations/${destination.slug}`}>
                <div className={styles.card}>
                  <img src={destination.imageSrc} alt={destination.title} className={styles.destinationImage} />
                  <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{destination.title}</h2>
                    <p className={styles.cardDescription}>{destination.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.mapContainer}>
          {/* Google Map integration */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b1f0b1f0b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </>
  );
}