import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaServer, FaChartBar } from 'react-icons/fa'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Fintech APIs',
      description: 'Building high-performance financial APIs',
    },
    {
      icon: FaServer,
      title: 'Distributed Systems',
      description: 'Scalable backend architectures',
    },
    {
      icon: FaDatabase,
      title: 'Transaction Processing',
      description: 'Financial transaction flows',
    },
    {
      icon: FaChartBar,
      title: 'Report Generation',
      description: 'Automated report generation systems',
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
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-intro">
              Backend Software Engineer with <strong>1.5+ years</strong> of experience building{' '}
              <span className="highlight">fintech APIs</span>,{' '}
              <span className="highlight">distributed systems</span>, and{' '}
              <span className="highlight">scalable backend architectures</span>.
            </p>
            <p>
              Currently working at <strong>Wealthy</strong> on wealth management platform handling
              financial transactions for Mutual Funds, PMS, and Fixed Deposits.
            </p>
            <p>
              Previously built <strong>Zero Trust Network Access (ZTNA)</strong> systems processing{' '}
              <strong>500GB+ daily data</strong> with <strong>99.9% uptime</strong>.
            </p>
          </motion.div>

          <motion.div className="highlights-grid" variants={itemVariants}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  className="highlight-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="highlight-icon">
                    <Icon />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

