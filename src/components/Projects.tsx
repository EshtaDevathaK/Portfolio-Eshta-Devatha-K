import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaBehance,
} from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  achievements: string[];

  github?: string;
  demo?: string;
  behance?: string;

  image: string;
}
interface GraphicDesign {
  title: string;
  tool: string;
  image: string;
  description?: string;
}

const Projects = () => {

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);


    const [selectedDesign, setSelectedDesign] =
  useState<GraphicDesign | null>(null);

  // =========================
  // UI/UX CASE STUDIES
  // =========================

  const uiuxProjects: Project[] = [

    {
      title: "Zoom AI Companion",

      description:
        "An AI-powered meeting assistant designed to simplify meeting experiences through smart summaries, interactive learning, and guided navigation features.",

      techStack: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "User Flow",
        "Visual Design",
        "Information Architecture",
      ],

      features: [
        "✔ Designed 10+ modern and interactive meeting experience screens",
        "✔ Introduced Smart Catch-Up feature for quick meeting understanding",
        "✔ Designed Mini Map navigation for simplified content exploration",
        "✔ Created Quiz-based interaction flow for better user engagement",
        "✔ Built clean and user-friendly responsive interface layouts",
      ],

      achievements: [
        "✅ Improved meeting accessibility through guided and structured UI flows",
        "✅ Simplified complex meeting information using visual hierarchy principles",
        "✅ Enhanced user engagement with interactive AI-powered features",
        "✅ Focused on intuitive navigation and modern user experience patterns",
      ],

      behance: "https://www.behance.net/gallery/248676095/Case-study-Zoom-AI-Companion-Panel",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
{
  title: "Subscription Management Tool",

  description:
    "A smart subscription management platform designed to simplify subscription tracking, renewal understanding, and user decision-making through AI-powered guidance, contextual insights, and streamlined management workflows.",

  techStack: [
    "Figma",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "User Flow",
    "Dashboard Design",
    "Information Architecture",
  ],

  features: [
    "✔ Designed granular subscription cards combining user data, renewal status, and actions in a unified interface",
    "✔ Created AI-assisted renewal flow with contextual guidance before redirecting users to subscription platforms",
    "✔ Introduced categorized insight panels explaining renewal importance, subscription benefits, and usage awareness",
    "✔ Designed integrated AI support assistant for real-time user queries during subscription management",
    "✔ Built modern dashboard layouts focused on visibility, clarity, and subscription organization",
  ],

  achievements: [
    "✅ Simplified complex subscription management workflows using structured UI hierarchy",
    "✅ Improved renewal clarity through AI-powered contextual guidance and insight-based interaction design",
    "✅ Enhanced user decision-making with centralized subscription visibility and management flows",
    "✅ Focused on reducing subscription confusion through intuitive dashboard architecture and guided UX patterns",
  ],

  behance: "https://www.behance.net/gallery/248675481/Case-study-Subscribtion-Management-Tool",

  image:
    "https://images.unsplash.com/photo-1551434678-e076c223a692",
},

  ];

  // =========================
  // DEVELOPMENT PROJECTS
  // =========================

  const developmentProjects: Project[] = [

    {
      title: "Travel Stay Platform",

      description:
        "A social travel platform enabling users to share and explore travel destinations with interactive experiences and responsive UI.",

      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MapBox API",
      ],

      features: [
        "✔ User registration, login, and profile management",
        "✔ Post and explore travel destinations with image uploads",
        "✔ Real-time interactive maps via MapBox API",
        "✔ Responsive UI for all screen sizes",
        "✔ Comment and engagement system for posts",
      ],

      achievements: [
        "✅ Built optimized RESTful APIs for scalable performance",
        "✅ Integrated MapBox for accurate real-time geolocation experience",
        "✅ Improved user interaction with gallery and review systems",
        "✅ Enhanced engagement through responsive UI improvements",
      ],

      github:
        "https://github.com/EshtaDevathaK/TravelStay_Platform",

      demo:
        "https://travelstay-platform.onrender.com/listings",

      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    },

    {
      title: "VidNexus App",

      description:
        "A video-sharing platform with AI-powered interaction and enriched content discovery.",

      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Supabase",
        "OMDB API",
      ],

      features: [
        "✔ Built REST API with Express and optimized backend",
        "✔ Implemented real-time chatbot for enhanced user interaction",
        "✔ Intuitive UI for seamless navigation",
        "✔ Cross-device compatibility for consistent experience",
      ],

      achievements: [
        "✅ Optimized Supabase queries improving retrieval speed",
        "✅ Integrated AI chatbot enhancing user engagement",
        "✅ Enriched content experience using OMDB API",
      ],

      github:
        "https://github.com/EshtaDevathaK/VidNexus-MovieFetching-Platform",

      demo:
        "https://vedio-streaming-app.vercel.app/",

      image:
        "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg",
    },

    {
      title: "React WeatherNow +",

      description:
        "A culturally immersive weather application with music integration and dynamic seasonal experiences.",

      techStack: [
        "React",
        "TypeScript",
        "CSS",
        "OpenWeatherMap API",
        "YouTube Music",
      ],

      features: [
        "✔ Real-time weather data integration",
        "✔ Weather-based music recommendations",
        "✔ Multiple forecast views",
        "✔ Responsive cross-device interface",
      ],

      achievements: [
        "✅ Improved API handling and weather accuracy",
        "✅ Fixed broken music integrations dynamically",
        "✅ Enhanced mobile responsiveness and accessibility",
      ],

      github:
        "https://github.com/EshtaDevathaK/React_Modern_WebApplication",

      demo:
        "https://react-modern-webapplication.onrender.com/",

      image:
        "https://images.unsplash.com/photo-1570095378004-ce65d6c2d5bb",
    },

    {
      title: "Spotify Clone",

      description:
        "A responsive music streaming interface inspired by Spotify.",

      techStack: [
        "HTML",
        "CSS",
      ],

      features: [
        "✔ Responsive modern UI",
        "✔ Music cards and sidebar navigation",
      ],

      achievements: [
        "✅ Pixel-perfect responsive design",
        "✅ Improved frontend layout structuring skills",
      ],

      github:
        "https://github.com/EshtaDevathaK/Spotify-Clone",

      demo:
        "https://spotify-clone-ttq6.onrender.com/",

      image:
        "https://images.unsplash.com/photo-1611339555312-e607c8352fd7",
    },

  ];

  // =========================
  // GRAPHIC DESIGN SHOWCASE
  // =========================

const graphicDesigns: GraphicDesign[] = [

  {
    title: "Perfume Poster",
    tool: "Photoshop",
    description:
      "Luxury perfume advertisement poster with premium dark aesthetic styling.",
    image: "/posters/poster1.jpg",
  },
  {
  title: "Alchemist Perfume Poster – Version 2",
  tool: "Photoshop",

  description:
    "Premium luxury perfume poster designed with cinematic lighting, elegant typography, and rich dark-tone visual aesthetics focused on sophisticated product presentation.",

  image: "/posters/poster4.jpg",
},

  {
    title: "2 Minute Maggie Poster",
    tool: "Photoshop",
    description:
      "Creative fast-food promotional poster with modern typography and layout.",
    image: "/posters/poster2.jpg",
  },

  {
    title: "We Are Hiring Poster",
    tool: "Photoshop",
    description:
      "Corporate hiring poster designed for social media recruitment campaigns.",
    image: "/posters/poster3.jpg",
  },


];

  return (

    <section id="projects" className="py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* MAIN HEADING */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>

        {/* ========================= */}
        {/* UI/UX CASE STUDIES */}
        {/* ========================= */}

        <div className="mb-24">

          <h3 className="text-3xl font-semibold mb-3">
            UI/UX Case Studies
          </h3>

          <p className="text-secondary mb-8 max-w-2xl leading-7">
            Product-focused UI/UX projects crafted with user-centered design,
            interaction thinking, wireframing, and modern visual experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {uiuxProjects.map((project, index) => (

              <motion.div
                key={project.title}

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}

                viewport={{ once: true }}

                className="bg-tertiary rounded-2xl overflow-hidden cursor-pointer group border border-pink-500/10 hover:border-pink-500/40 transition-all duration-300"

                onClick={() => setSelectedProject(project)}
              >

                <div className="relative h-52 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm mb-5 leading-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* ========================= */}
        {/* DEVELOPMENT PROJECTS */}
        {/* ========================= */}

        <div className="mb-24">

          <h3 className="text-3xl font-semibold mb-3">
            Development Projects
          </h3>

          <p className="text-secondary mb-8 max-w-2xl leading-7">
            Frontend and full-stack projects focused on responsive design,
            scalable architecture, APIs, and interactive user experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {developmentProjects.map((project, index) => (

              <motion.div
                key={project.title}

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}

                viewport={{ once: true }}

                className="bg-tertiary rounded-2xl overflow-hidden cursor-pointer group border border-blue-500/10 hover:border-blue-500/40 transition-all duration-300"

                onClick={() => setSelectedProject(project)}
              >

                <div className="relative h-52 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm mb-5 leading-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

{/* ========================= */}
{/* GRAPHIC DESIGN SHOWCASE */}
{/* ========================= */}

<div className="mt-24">

  <h3 className="text-3xl font-semibold mb-3">
    Graphic Design Showcase
  </h3>

  <p className="text-secondary mb-8 max-w-2xl leading-7">
    A collection of posters, branding visuals,
    social media creatives, and digital artwork
    focused on strong visual storytelling.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {graphicDesigns.map((design, index) => (

      <motion.div
        key={design.title}

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}

        viewport={{ once: true }}

        whileHover={{
          y: -5,
        }}

        onClick={() => setSelectedDesign(design)}

        className="group cursor-pointer relative overflow-hidden rounded-2xl border border-purple-500/10 hover:border-purple-500/40 transition-all duration-300 aspect-square"
      >

        <img
          src={design.image}
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">

          <div>
            <h4 className="text-white font-semibold text-sm">
              {design.title}
            </h4>

            <p className="text-gray-300 text-xs">
              {design.tool}
            </p>
          </div>

        </div>

      </motion.div>

    ))}

  </div>

</div>

        {/* ========================= */}
        {/* MODAL */}
        {/* ========================= */}

        <AnimatePresence>
           {selectedDesign && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"

      onClick={() => setSelectedDesign(null)}
    >

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}

        onClick={(e) => e.stopPropagation()}

        className="bg-tertiary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
      >

        <div className="p-5">

          {/* TOP */}
          <div className="flex justify-between items-center mb-5">

            <div>

              <h3 className="text-2xl font-bold">
                {selectedDesign.title}
              </h3>

              <p className="text-secondary text-sm mt-1">
                Created with {selectedDesign.tool}
              </p>

            </div>

            <button
              onClick={() => setSelectedDesign(null)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>

          </div>

          {/* FULL IMAGE */}
          <div className="w-full flex justify-center mb-6">

            <img
              src={selectedDesign.image}
              alt={selectedDesign.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl"
            />

          </div>

          {/* DESCRIPTION */}
          <p className="text-secondary leading-7 text-center max-w-2xl mx-auto">
            {selectedDesign.description}
          </p>

        </div>

      </motion.div>

    </motion.div>

  )}

          {selectedProject && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"

              onClick={() => setSelectedProject(null)}
            >

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}

                className="bg-tertiary rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10"

                onClick={(e) => e.stopPropagation()}
              >

                <div className="p-6">

                  <div className="flex justify-between items-center mb-6">

                    <h3 className="text-2xl font-bold">
                      {selectedProject.title}
                    </h3>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <FaTimes className="w-6 h-6" />
                    </button>

                  </div>

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-secondary mb-6 leading-7">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">

                    <h4 className="text-lg font-semibold mb-3">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="mb-6">

                    <h4 className="text-lg font-semibold mb-3">
                      Features
                    </h4>

                    <ul className="space-y-3">

                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-secondary"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full" />
                          {feature}
                        </li>
                      ))}

                    </ul>

                  </div>

                  <div className="mb-8">

                    <h4 className="text-lg font-semibold mb-3">
                      Achievements
                    </h4>

                    <ul className="space-y-3">

                      {selectedProject.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-secondary"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full" />
                          {achievement}
                        </li>
                      ))}

                    </ul>

                  </div>

                  <div className="flex flex-wrap gap-4">

                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}

                    {selectedProject.behance && (
                      <a
                        href={selectedProject.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
                      >
                        <FaBehance />
                        Behance Case Study
                      </a>
                    )}

                  </div>

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
};

export default Projects;