import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaVideo, FaCode } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'CodeMeet - Technical Interview Platform',
      description:
        'Real-time video calling platform with integrated code execution environments. Features live video interviews, collaborative coding, and handles 50+ daily assessments.',
      tech: ['Socket.io', 'WebRTC', 'React.js', 'Node.js', 'CodeMirror'],
      liveUrl: 'https://codemeet1.vercel.app/',
      githubUrl: 'https://github.com/rishuraj2401/INTV',
      featured: true,
      icon: FaVideo,
    },
    {
      title: 'GoAsk - Community Q&A Platform',
      description:
        'Scalable backend API built with Golang for community-driven Q&A. Features user authentication, question management, and RESTful API design.',
      tech: ['Golang', 'MongoDB', 'Docker', 'React.js'],
      githubUrl: 'https://github.com/rishuraj2401/go-ask',
      featured: true,
      icon: FaCode,
    },
    {
      title: 'College Gate-Pass System',
      description:
        'Digital gate-pass management system reducing manual processes by 90%. Streamlined approval workflow with real-time notifications.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      liveUrl: 'https://mygatepass.vercel.app/',
      githubUrl: 'https://github.com/rishuraj2401/Gate-Pass',
      featured: true,
      icon: FaCode,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-icon">
                  <Icon />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

