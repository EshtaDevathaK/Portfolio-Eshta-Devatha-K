import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar style on scroll
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-primary/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Portfolio
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "About", "Projects", "Certifications", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link hover:text-blue-500 transition-colors"
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
                link.href = "/Resume-24.pdf";
                link.download = "Resume-24.pdf";
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

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          className={`md:hidden overflow-hidden bg-primary/90 backdrop-blur-sm absolute left-0 right-0 top-full border-t border-gray-200/20`}
        >
          <div className="flex flex-col gap-4 p-6">
            {["Home", "About", "Projects", "Certifications", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-lg hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-white w-fit mt-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Resume-24.pdf";
                link.download = "Resume-24.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FiDownload />
              Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;