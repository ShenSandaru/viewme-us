import DestinationCard from "../components/DestinationCard";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import Header from "../components/Header";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}