import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  achievements: string[];
  github?: string;
  demo?: string;
  image: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Travel Stay Platform",
      description: "A social travel platform enabling users to share and explore travel destinations, AI-powered chatbot for enhanced user interaction",
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "MapBox API"],
      features: [
        "✔ User registration, login, and profile management",
        "✔ Post and explore travel destinations with image uploads",
        "✔ Real-time interactive maps via MapBox API",
        "✔ Responsive UI for all screen sizes",
        "✔ Comment and engagement system for posts"
      ],
      achievements: [
        "✅ Built a RESTful API handling 1000+ requests/day with optimized endpoints",
        "✅ Integrated MapBox for accurate, real-time geolocation tracking with 95% precision",
        "✅ Boosted content interaction by 30% with gallery and Comment and Review System",
        "✅ Improved engagement rate by 25% through UI/UX optimization By Pops Up specific Action as Listing"
      ],
      github: "https://github.com/EshtaDevathaK/TravelStay_Platform",
      demo: "https://travelstay-platform.onrender.com/listings",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
    },
    {
      title: "VidNexus App",
      description: "A video-sharing platform with AI-powered interaction and enriched content discovery.",
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "TailWind Css", "Supabase", " OMDB API"],
      features: [
        "✔ Built REST API with Express and optimized backend",
        "✔ Implemented real-time chatbot for enhanced user interaction",
        "✔ Intuitive TypeScript-powered UI for seamless navigation",
        "✔ Cross-device compatibility for a consistent experience",
      ],
      achievements: [
        "✅ Optimized Supabase queries, improving data retrieval by 40%",
        "✅ Integrated AI chatbot, enhancing engagement and interaction",
        "✅ Implemented OMDB API, enriching content with movie/show details engagement by 25%"
      ],
      github: "https://github.com/EshtaDevathaK/VidNexus-MovieFetching-Platform",
      demo: "https://vedio-streaming-app.vercel.app/",
      image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "React WeatherNow + (Advanced)",
      description: "A culturally immersive weather app with Tamil music, traditional outfit suggestions, and seasonal imagery.",
      techStack: ["React", "TypeScript", "CSS", "OpenWeatherMap API", "YouTube Music"],
      features: [
        "✔ Real-time weather data with fallback mechanisms",
        "✔ Weather-based Tamil music recommendations via YouTube Music",
        "✔ Integrated weather API for real-time data",
        "✔ Multiple forecast views: daily, hourly, and multi-day",
        "✔ Weather analytics and trend visualizations"
      ],
      achievements: [
        "✅ Integrated OpenWeather API with 80% response success rate and accurate geocoding",
        "✅ Fixed 100% of broken music links by implementing dynamic YouTube Music search integration",
        "✅ Improved seasonal image accuracy by 50% using intelligent selection logic",
        "✅ Achieved 70% mobile responsiveness and 70% accessibility score in Lighthouse audit"
      ],
      github: "https://github.com/EshtaDevathaK/React_Modern_WebApplication",
      demo: "https://react-modern-webapplication.onrender.com/",
      image: "https://images.unsplash.com/photo-1570095378004-ce65d6c2d5bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "React Weather (Basic)",
      description: "A dynamic weather app fetching real-time data based on user input.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "OpenWeather API"],
      features: [
        "✔ Live weather search",
        " ✔ Responsive weather card (temp, humidity, conditions)",
        " ✔ OpenWeather API integration",
        "✔ Cross-device compatibility"
      ],
      achievements: [
        "✅ Optimized API calls, reducing load time by 30%",
        "✅ Improved responsiveness for seamless access across devices"
      ],
      github: "https://github.com/EshtaDevathaK/React-Weather-app",
      demo: "https://react-weather-app-v456.onrender.com/",
      image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


    {
      title: "Simson Game",
      description: "An interactive browser-based memory game",
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Smooth gameplay mechanics",
        "Responsive UI for cross-device play"
      ],
      achievements: [
        "Improved game logic, boosting performance by 20%",
        "Strengthened debugging & optimization skills"
      ],
      github: "https://github.com/EshtaDevathaK/Simson-game-project",
      demo: "https://simson-game-project.onrender.com/",
      image: "https://images.unsplash.com/photo-1553481187-be93c21490a9"
    },

    {
      title: "Spotify Clone",
      description: "A responsive music streaming interface inspired by Spotify",
      techStack: ["HTML", "CSS"],
      features: [
        "Responsive & visually appealing UI",
        "Sidebar navigation & music cards"
      ],
      achievements: [
        "Pixel-perfect Spotify-inspired design",
        "Fully responsive for mobile & desktop"
      ],
      github: "https://github.com/EshtaDevathaK/Spotify-Clone",
      demo: "https://spotify-clone-ttq6.onrender.com/",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7"
    },

    {
      title: "Burger Landing Page",
      description: "Interactive burger restaurant landing page with HTML & CSS, featuring a stunning UI.",
      techStack: ["HTML", "CSS"],
      features: [
        "✔ Responsive and attractive layout",
        " ✔ smooth animations",
        " ✔ Well-structured for seamless browsing",

      ],
      achievements: [
        "✅ Eye-catching hover effects and transitions",
        "✅ Fully responsive on all devices"
      ],
      github: "https://github.com/EshtaDevathaK/Spotify-Clone",
      demo: "https://burger-landing-page.onrender.com",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww"
    },

  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-secondary text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
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
                className="bg-tertiary rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
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
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <p className="text-secondary mb-6">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
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
                    <h4 className="text-lg font-semibold mb-3">Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-secondary">
                          <span className="w-2 h-2 bg-blue-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2 text-secondary">
                          <span className="w-2 h-2 bg-purple-500 rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
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