"use client";
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/styles/DestinationDetail.module.css';
import { Destination } from '@/data/destinations';
import { destinationService } from '@/services/destinationService';

export default function DestinationDetail() {
  const router = useRouter();
  const params = useParams();
  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    const { slug } = params;
    if (slug) {
      destinationService.getById(slug as string).then((foundDestination) => {
        if (foundDestination) {
          setDestination(foundDestination);
        }
      });
    }
  }, [params]);

  if (!destination) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        ← Back
      </button>
      
      <img 
        src={destination.imageSrc} 
        alt={destination.title} 
        className={styles.heroImage} 
      />
      
      <h1 className={styles.title}>{destination.title}</h1>
      <p className={styles.description}>{destination.fullDescription}</p>
      
      <div className={styles.infoGrid}>
        {destination.highlights.map((highlight, index) => (
          <div key={index} className={styles.infoCard}>
            <h3 className={styles.infoTitle}>{highlight.title}</h3>
            <p className={styles.infoText}>{highlight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}