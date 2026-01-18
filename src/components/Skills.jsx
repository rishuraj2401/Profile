import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Golang', 'JavaScript', 'C++', 'SQL', 'GraphQL', 'HTML', 'CSS'],
      color: 'var(--primary-color)',
    },
    {
      title: 'Backend & APIs',
      skills: [
        'Django',
        'Django REST Framework',
        'FastAPI',
        'GraphQL',
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'Microservices',
      ],
      color: 'var(--secondary-color)',
    },
    {
      title: 'Databases',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Elasticsearch',
        'MySQL',
        'Redis',
        'Database Optimization',
      ],
      color: 'var(--accent-color)',
    },
    {
      title: 'Financial Tech',
      skills: [
        'Transaction Processing',
        'Order Management',
        'Financial Reports',
        'Payment Flows',
        'Investment Systems',
      ],
      color: '#10b981',
    },
    {
      title: 'Infrastructure & DevOps',
      skills: ['Docker', 'Linux Administration', 'AWS', 'Git', 'CI/CD', 'VM Management'],
      color: '#f59e0b',
    },
    {
      title: 'Data Processing',
      skills: [
        'Kafka',
        'FluentBit',
        'Logstash',
        'OSQuery',
        'Django-RQ',
        'Data Pipelines',
        'ETL Processes',
      ],
      color: '#3b82f6',
    },
    {
      title: 'Real-time Tech',
      skills: [
        'WebSockets',
        'Socket.io',
        'WebRTC',
        'Electron IPC',
        'Real-time Communication',
      ],
      color: '#8b5cf6',
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Redux', 'Redux Toolkit', 'JavaScript ES6+'],
      color: '#ec4899',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-item"
                    style={{ borderColor: category.color }}
                    whileHover={{ scale: 1.1, backgroundColor: category.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

