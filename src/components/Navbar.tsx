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
        {/* ✅ Maintain Responsiveness Here (Logo should not shrink too much on small screens) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Portfolio
        </motion.div>

         {/* ✅ Maintain Flex-Wrap for Navbar Items (Ensures options wrap properly on small screens) */}
         <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base">
          {["Home", "About", "Projects", "Certifications", "Contact"].map((item) => (
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

           {/* ✅ Ensure Button Stays in Place (Avoid overlapping text on small screens) */}
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-3 sm:px-4 py-2 rounded-full text-white text-sm sm:text-base"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Resume5.pdf";
              link.download = "Resume5.pdf";
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