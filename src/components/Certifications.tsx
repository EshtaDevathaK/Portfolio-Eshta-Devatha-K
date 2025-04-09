import { motion } from 'framer-motion';
import { FaAward} from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "Four Months",
      
      
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Apna College",
      date: "Three Months",
      
      
    },
    {
      title: "MERN Stack Development",
      issuer: "Apna College",
      date: "Six Months",
     
      
    },
    {
      title: "UI/UX Developer",
      issuer: "UDEMY",
      date: "One Month",
     
      
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
             
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-blue-500/20">
                  <FaAward className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-secondary text-sm">{cert.issuer}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-secondary text-sm">Duration: {cert.date}</p>
              
              </div>

             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;