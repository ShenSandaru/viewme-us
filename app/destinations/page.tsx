"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Destination.module.css';
import { destinations, Destination } from '../data/destinations';
import SearchBar from '../../components/SearchBar';

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredDestinations = destinations.filter((dest: Destination) =>
    dest.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className={styles.destination}>
      <h1 className={styles.title}>Destinations</h1>
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleReset={handleReset}
        handleImageUpload={() => {}}
      />

      <div className={styles.destinationList}>
        {filteredDestinations.map((dest: Destination) => (
          <Link key={dest.id} href={`/destinations/${dest.id}`}>
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <img
                  src={dest.imageSrc}
                  alt={dest.title}
                  className={styles.destinationImage}
                />
                <h2 className={styles.cardTitle}>{dest.title}</h2>
                <p className={styles.cardDescription}>{dest.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}