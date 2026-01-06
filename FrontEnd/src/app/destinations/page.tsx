"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Destination.module.css';
import { Destination } from '@/data/destinations';
import { destinationService } from '@/services/destinationService';
import SearchBar from '@/components/SearchBar';

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [destinationsList, setDestinationsList] = useState<Destination[]>([]);

  useEffect(() => {
    destinationService.getAll().then(setDestinationsList);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredDestinations = destinationsList.filter((dest: Destination) =>
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