import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary min-h-screen"
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;