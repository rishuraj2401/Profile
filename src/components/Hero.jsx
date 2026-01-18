import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaChartLine } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef, SiInstagram } from 'react-icons/si'
import './Hero.css'

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rrs2401/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/rishuraj2401', label: 'GitHub' },
    { icon: SiLeetcode, url: 'https://leetcode.com/rishuraj2401/', label: 'LeetCode' },
    { icon: SiCodeforces, url: 'https://codeforces.com/profile/rishuraj2401', label: 'Codeforces' },
    { icon: SiCodechef, url: 'https://www.codechef.com/users/rishuraj_2401', label: 'CodeChef' },
    { icon: SiInstagram, url: 'https://instagram.com/rishu_rajsinha', label: 'Instagram' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-image-container" variants={itemVariants}>
            <motion.div
              className="hero-image"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="https://i.pinimg.com/736x/fa/44/2d/fa442d3d5f5cc68bdcd516282c15e26d.jpg"
                alt="Coding"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400/6366f1/ffffff?text=RRS'
                }}
              />
            </motion.div>
            <motion.div
              className="floating-icon icon-1"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <FaCode />
            </motion.div>
            <motion.div
              className="floating-icon icon-2"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <FaChartLine />
            </motion.div>
          </motion.div>

          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi 👋, I'm{' '}
              <span className="gradient-text">Rishu Raj Sinha</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Backend Software Engineer | Fintech | Distributed Systems
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building scalable fintech APIs and distributed systems with{' '}
              <span className="highlight">1.5+ years</span> of experience.
              Currently working at <span className="highlight">Wealthy</span> on
              wealth management platforms handling financial transactions.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://github.com/rishuraj2401/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="mouse"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

