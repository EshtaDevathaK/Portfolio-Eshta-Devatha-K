import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiCanva,
  SiFramer,
} from 'react-icons/si';

const About = () => {

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
    { name: 'Adobe XD', icon: <SiAdobexd className="text-[#FF61F6]" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator className="text-[#FF9A00]" /> },
    { name: 'Canva', icon: <SiCanva className="text-[#00C4CC]" /> },
    { name: 'Framer', icon: <SiFramer className="text-white" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  const education = [
    {
      degree: "Masters in Information Technology",
      institution: "Sri Krishna Arts and Science College",
      period: "2024 – 2026",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Sri Sarada Niketan College for Arts and Science for Women",
      period: "2021 – 2024",
      cgpa: "7.2",
    },
  ];

  const softSkills = [
    "User-Centered Thinking",
    "Creativity",
    "Communication",
    "Team Collaboration",
    "Problem Solving",
    "Visual Storytelling",
    "Quick Learning",
    "Time Management",
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

          {/* HEADING */}
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>

              {/* ABOUT TEXT */}
              <p className="text-secondary text-lg leading-8 mb-8">
                I’m a UI/UX Website Designer passionate about creating visually
                engaging, user-friendly, and meaningful digital experiences.
                I specialize in designing modern website interfaces, intuitive
                user flows, and interactive experiences that combine creativity
                with usability. With knowledge of frontend technologies, I also
                understand how designs translate into real-world responsive
                websites and products.
              </p>

              {/* EDUCATION */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-5">
                  Education
                </h3>

                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="mb-4 bg-tertiary p-5 rounded-2xl border border-white/5"
                  >

                    <h4 className="text-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>

                    <p className="text-secondary">
                      {edu.institution}
                    </p>

                    <p className="text-sm text-secondary mt-1">
                      {edu.period}
                    </p>

                    {edu.cgpa && (
                      <p className="text-sm text-secondary mt-1">
                        CGPA : {edu.cgpa}
                      </p>
                    )}

                  </motion.div>
                ))}
              </div>

              {/* INTERNSHIP */}
              <div>

                <h3 className="text-2xl font-semibold mb-5">
                  Internship Experience
                </h3>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-tertiary p-5 rounded-2xl border border-white/5"
                >

                  <h4 className="text-lg font-semibold text-white mb-1">
                    UI/UX & Visual Design Intern
                  </h4>

                  <p className="text-secondary">
                    Marma Fintech
                  </p>

                  <p className="text-sm text-secondary mt-1 mb-4">
                    Nov 2025 – Apr 2026
                  </p>

                  <ul className="space-y-3 text-sm text-secondary leading-7">

                    <li>
                      • Contributed to crypto gaming and fantasy cricket
                      product features through end-to-end UI design.
                    </li>

                    <li>
                      • Designed splash screens, onboarding flows,
                      early access screens, and core user experiences.
                    </li>

                    <li>
                      • Created 25+ custom avatars to improve product
                      personalization and engagement.
                    </li>

                    <li>
                      • Collaborated with developers to deliver
                      implementation-ready UI components and maintain
                      design consistency.
                    </li>

                  </ul>

                </motion.div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* SKILLS */}
              <h3 className="text-2xl font-semibold mb-6">
                Design & Website Tools
              </h3>

              <div className="grid grid-cols-3 gap-5">

                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-3 bg-tertiary p-5 rounded-2xl border border-white/5"
                  >

                    <div className="text-4xl">
                      {skill.icon}
                    </div>

                    <span className="text-sm text-secondary text-center">
                      {skill.name}
                    </span>

                  </motion.div>
                ))}

              </div>

              {/* SOFT SKILLS */}
              <div className="mt-10">

                <h3 className="text-2xl font-semibold mb-5">
                  Soft Skills
                </h3>

                <ul className="grid grid-cols-2 gap-4">

                  {softSkills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-secondary"
                    >

                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

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