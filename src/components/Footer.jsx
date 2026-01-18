import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef, SiInstagram } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/rrs2401/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/rishuraj2401', label: 'GitHub' },
    { icon: SiLeetcode, url: 'https://leetcode.com/rishuraj2401/', label: 'LeetCode' },
    { icon: SiCodeforces, url: 'https://codeforces.com/profile/rishuraj2401', label: 'Codeforces' },
    { icon: SiCodechef, url: 'https://www.codechef.com/users/rishuraj_2401', label: 'CodeChef' },
    { icon: SiInstagram, url: 'https://instagram.com/rishu_rajsinha', label: 'Instagram' },
    { icon: FaEnvelope, url: 'mailto:rishuraj2401sinha@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3>Rishu Raj Sinha</h3>
            <p>Backend Software Engineer | Fintech | Distributed Systems</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={social.label}
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            © {currentYear} Rishu Raj Sinha. Built with React & Framer Motion.
          </p>
          <p className="footer-links">
            <a href="https://github.com/rishuraj2401/resume" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            {' | '}
            <a href="https://portfolio-e66s.vercel.app/" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

