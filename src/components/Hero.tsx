import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import ishtaPhoto from '../assets/ishta.jpg'; // adjust the path as needed

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/eshta-devatha-k-060b0b319/',
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      url: 'https://github.com/EshtaDevathaK?tab=repositories',
    },
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      url: 'mailto:your.eshtadevatha06@gmail.com',
    },
    {
      name: 'Phone',
      icon: <FiPhone className="w-6 h-6" />,
      url: 'tel:+918610956686',
    },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="absolute inset-0"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                'Hi, I\'m Eshta Devatha',
                1000,
                'Full-Stack Developer',
                1000,
                'Passionate about Coding',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            />
          </h1>
          
          <p className="text-secondary text-lg mb-8">
            Transforming ideas into elegant, scalable solutions through code.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-tertiary p-3 rounded-full hover:bg-white/10 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block"
        >
          <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8">
          <img src={ishtaPhoto} alt="Developer" className="w-full h-full object-cover rounded-3xl"/>

            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;