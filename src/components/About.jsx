import profileImg from '../assets/profile.jpg'

const info = [
  { label: 'Name', value: 'Srikanth Yasam' },
  { label: 'Location', value: 'Hyderabad, Telangana, India' },
  { label: 'Status', value: 'Graduate (B.Tech AIML)' },
  { label: 'Focus', value: 'AI & Machine Learning' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src={profileImg} alt="Srikanth Yasam" />
          </div>
          <div className="about-text">
            <h3>AI & ML Graduate | Mallareddy University</h3>
            <p>
              I'm a graduate specializing in Artificial Intelligence and Machine Learning.
              With a strong academic foundation and practical experience, I'm passionate about leveraging
              technology to solve real-world problems and exploring innovative applications of AI and ML.
            </p>
            <p>
              I'm proficient in Python with a solid understanding of object-oriented programming,
              Data Structures & Algorithms, and hands-on experience building responsive web interfaces
              with HTML and CSS. I'm always eager to collaborate with peers and professionals to work
              on impactful projects.
            </p>
            <div className="about-info">
              {info.map(i => (
                <div className="info-item" key={i.label}>
                  <div className="label">{i.label}</div>
                  <div className="value">{i.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
