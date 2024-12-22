import { useEffect, useRef } from 'react';
import Header from './Header';

const MainSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('error', (e) => {
        console.error('Error loading video:', e);
      });
    }
  }, []);

  return (
    <section className="main-section">
      <Header />
      <video className="background-video" autoPlay muted loop ref={videoRef}>
        <source src="/videos/main%20video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Explore the sights of the Azores</h1>
        <p>A place where nature and adventure unite</p>
        <button>Book now</button>
      </div>
      <button className="scroll-button">&#8595;</button>
      <div className="carousel-buttons">
        <button>&#8592;</button>
        <button>&#8594;</button>
      </div>
    </section>
  );
};

export default MainSection;
