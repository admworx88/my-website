import './App.css';
import {
  Navbar,
  Hero,
  SocialLinks,
  Portfolio,
  Education,
  About,
  Contacts,
  Footer,
} from '../src/components/Index';

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
