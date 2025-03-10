import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

return (
    <footer className="bg-tertiary py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Portfolio
            </h3>
            <p className="text-secondary text-sm">
              Building digital experiences with code and creativity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-secondary hover:text-white transition-colors cursor-pointer"
          >
                    {item}
                  </Link>
                </li>
              ))}
      </ul>
</div>

    <div>
      <h4 className="font-semibold mb-4">Connect</h4>
        <div className="flex space-x-4">
          <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-secondary hover:text-white transition-colors"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href="tel:+1234567890"
                className="text-secondary hover:text-white transition-colors"
              >
                <FiPhone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FiArrowUp className="w-5 h-5" />
              Back to Top
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-secondary text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;