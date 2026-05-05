import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/eshta-devatha-k-060b0b319/',
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      url: 'https://github.com/EshtaDevathaK?tab=repositories',
      description: 'Check out my code repositories'
    },
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      url: 'mailto:eshtadevatha06@gmail.com',
      description: 'Send me an email'
    },
    {
      name: 'Phone',
      icon: <FiPhone className="w-6 h-6" />,
      url: 'tel:+918610956686',
      description: 'Call me directly'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-tertiary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects and explore new opportunities.
            Feel free to reach out through any of these channels!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center p-6 bg-tertiary rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {link.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
              <p className="text-secondary text-sm text-center">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;