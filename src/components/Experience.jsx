import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Wealthy',
      position: 'Software Development Engineer',
      period: 'October 2025 - Present',
      location: 'Remote',
      description: [
        'Building backend systems for wealth management platform using Golang, Python Django, FastAPI, and GraphQL',
        'Developing transaction processing systems for Mutual Funds, PMS, and Fixed Deposits',
        'Implementing automated report generation pipelines for financial schemes with real-time data aggregation',
        'Architecting GraphQL APIs for efficient multi-product data querying',
        'Optimizing database queries and implementing caching for financial data retrieval',
      ],
      technologies: ['Golang', 'Python', 'Django', 'FastAPI', 'GraphQL', 'PostgreSQL'],
    },
    {
      company: 'COSGRID Networks',
      position: 'System Development Engineer',
      period: 'April 2024 - October 2025',
      location: 'Remote',
      description: [
        'Built RESTful APIs for ZTNA desktop applications serving 100+ enterprise users',
        'Designed multi-tenant web filtering system with dynamic policy enforcement (500+ users)',
        'Developed log processing pipelines handling 500GB+ daily data using Elasticsearch',
        'Implemented VPN infrastructure (IPSec, WireGuard) and network security solutions',
        'Integrated real-time communication systems using WebSockets and Kafka message queues',
      ],
      technologies: ['Python', 'Django', 'FastAPI', 'Elasticsearch', 'Kafka', 'WebSockets'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="position">{exp.position}</span>
                </div>
                <div className="experience-meta">
                  <span className="period">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

