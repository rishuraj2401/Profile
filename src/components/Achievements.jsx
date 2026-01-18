import { motion } from 'framer-motion'
import { FaTrophy, FaGraduationCap, FaAward, FaCode, FaMedal } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: FaCode,
      title: '350+ LeetCode Problems Solved',
      description: 'Consistent problem-solving practice',
      link: 'https://leetcode.com/rishuraj2401/',
      color: '#f59e0b',
    },
    {
      icon: FaGraduationCap,
      title: 'IIT-JEE Advanced 2020',
      description: 'Top 2% Rank',
      color: '#10b981',
    },
    {
      icon: FaAward,
      title: 'ONGC Merit Scholarship',
      description: '2020-21 Academic Excellence',
      color: '#3b82f6',
    },
    {
      icon: FaTrophy,
      title: 'Facebook Hacker Cup 2022',
      description: 'Round 1 Qualifier (Rank 5009)',
      color: '#8b5cf6',
    },
    {
      icon: FaMedal,
      title: 'B.Tech in Computer Science',
      description: 'CPI: 8.03/10.0',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const content = (
              <motion.div
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                style={{ '--accent-color': achievement.color }}
              >
                <div className="achievement-icon" style={{ color: achievement.color }}>
                  <Icon />
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </motion.div>
            )

            return achievement.link ? (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {content}
              </motion.a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

