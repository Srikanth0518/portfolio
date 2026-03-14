import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb1"></div>
      <div className="hero-orb hero-orb2"></div>
      <div className="container hero-container">

        {/* Left */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> Open to opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm<br />
            <span className="hero-name">Srikanth Yasam</span>
          </h1>

          <div className="hero-role">
            <span>AI</span> & <span>ML Engineer</span>
          </div>

          <p className="hero-desc">
            Graduate in AI & ML from Mallareddy University. I build intelligent systems —
            from healthcare chatbots to real-time sound detection — using Python, Deep Learning & NLP.
          </p>

          <div className="hero-btns">
            <Link to="/projects" className="btn-hero-primary">
              View My Work <FiArrowRight />
            </Link>
            <a href="/resume.pdf" download="Srikanth_Yasam_Resume.pdf" className="btn-hero-outline">
              <FiDownload /> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Srikanth0518" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/srikanth-yasam-b7555523b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:srikanthyasam947@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-img-wrap">
          <div className="hero-img-ring"></div>
          <div className="hero-img-ring2"></div>
          <img src={profileImg} alt="Srikanth Yasam" className="hero-img" />
          <div className="hero-float-badge badge-top">
            🤖 AI Engineer
          </div>
          <div className="hero-float-badge badge-bottom">
            🎓 B.Tech AIML
          </div>
        </div>

      </div>


    </section>
  )
}
