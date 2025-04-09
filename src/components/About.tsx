import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express.js', icon: <SiExpress className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  const education = [
    {
      degree: "Masters in Information Technology",
      institution: "Sri Krishna Arts and Science College",
      period: "2024–2026",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Sri Sarada Niketan College for Arts and Science for Women",
      period: "2021–2024",
      cgpa: "7.2",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-secondary text-lg mb-6">
                I'm a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating user-friendly applications. My journey in tech has
                equipped me with both technical expertise and problem-solving skills.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-4 bg-tertiary p-4 rounded-lg"
                  >
                    <h4 className="text-lg font-medium text-white">{edu.degree}</h4>
                    <p className="text-secondary">{edu.institution}</p>
                    <p className="text-sm text-secondary">{edu.period}</p>
                    {edu.cgpa && <p className="text-sm text-secondary">CGPA: {edu.cgpa}</p>}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 bg-tertiary p-4 rounded-lg"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <span className="text-sm text-secondary">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    "Project Management",
                    "Quick Learning",
                    "Teamwork",
                    "Leadership",
                    "Critical Thinking",
                    "Time Management",
                    "Communication",
                    "Problem Solving",
                  ].map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-secondary"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;