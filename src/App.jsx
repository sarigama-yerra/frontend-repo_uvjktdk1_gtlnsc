import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { AboutSection, RosterSection, MatchesSection, GallerySection, ContactSection } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <RosterSection />
      <MatchesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
