import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import SocialLinks from '../src/components/SocialLinks';
import Portfolio from '../src/components/Portfolio';
import Education from '../src/components/Education';
import About from '../src/components/About';
import Contacts from '../src/components/Contacts';
import Footer from '../src/components/Footer';

export default function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Hero />
      <SocialLinks />
      <About />
      <Education />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}
