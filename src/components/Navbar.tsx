import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar style on scroll
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              {item}
            </Link>
          ))}
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-white"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Resume4.pdf"; // Path to your actual file name
    link.download = "Resume4.pdf"; // This sets the default download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <FiDownload />
  Resume
</motion.button>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;