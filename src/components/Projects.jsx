import { useState } from 'react'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'

const projects = [
  {
    emoji: '🎓',
    title: 'Real-Time Attendance Monitoring',
    short: 'Automated attendance using facial recognition with CNN and OpenCV.',
    desc: 'Marking attendance manually is time-consuming, prone to errors, and vulnerable to proxy attendance, especially in large classrooms. This project proposes an automated attendance management system using facial recognition to address these challenges. The system employs Convolutional Neural Networks (CNN) to train facial datasets and uses OpenCV with the Viola-Jones algorithm for face detection. Key steps include capturing, extracting, matching, and comparing facial features, with the Eigenfaces algorithm enhancing recognition accuracy. The proposed system aims to save time, eliminate manual errors, and improve efficiency in educational institutions.',
    tags: ['Python', 'Deep Learning', 'CNN', 'OpenCV', 'Viola-Jones', 'Eigenfaces'],
    github: 'https://github.com/Srikanth0518',
    live: '#',
  },
  {
    emoji: '✍️',
    title: 'Auto Correction Features Using NLP',
    short: 'Text correction engine with 85% accuracy using Weighted Edit Distance.',
    desc: 'Developed a text correction engine that increased input accuracy by 85% using the Weighted Edit Distance algorithm. Handled over 500+ unique error cases through dynamic weighting for insertions, deletions, and substitutions. Built a dictionary-based comparison logic achieving an average correction latency of under 2 seconds per input. Tuned operation weights based on test cases, boosting prediction precision by 25%.',
    tags: ['Python', 'NLP', 'Edit Distance Algorithm', 'Dynamic Programming'],
    github: 'https://github.com/Srikanth0518',
    live: '#',
  },
  {
    emoji: '🔊',
    title: 'Real-Time Dangerous Sound Detection System',
    short: 'AI audio monitoring that detects threats and sends emergency alerts.',
    desc: 'Built an intelligent real-time audio monitoring system that detects dangerous environmental sounds using deep learning models and instantly sends emergency alerts via SMS and email. The system continuously listens to live audio through a microphone or analyzes uploaded WAV files, classifies sounds using Google\'s YAMNet model (pre-trained on 2M+ audio clips), and triggers automated notifications when threats like gunshots, explosions, sirens, or screaming are detected. The application features a clean web interface built with Streamlit, supports multiple AI model architectures (1D-CNN, 2D-CNN, LSTM) for comparison, and includes IP-based location tracking to provide context in emergency alerts.',
    tags: ['Python', 'TensorFlow', 'YAMNet', 'CNN', 'LSTM', 'MFCC', 'Streamlit', 'Twilio API', 'Librosa'],
    github: 'https://github.com/Srikanth0518',
    live: '#',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects-grid">
          {projects.map(p => (
            <div className="project-card" key={p.title} onClick={() => setSelected(p)} style={{ cursor: 'pointer' }}>
              <div className="project-img">{p.emoji}</div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links" onClick={e => e.stopPropagation()}>
                  <a href={p.github} target="_blank" rel="noreferrer"><FiGithub /> Code</a>
                  {p.live !== '#' && <a href={p.live} target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="proj-modal" onClick={() => setSelected(null)}>
          <div className="proj-modal-box" onClick={e => e.stopPropagation()}>
            <button className="proj-close" onClick={() => setSelected(null)}><FiX /></button>
            <div className="proj-modal-emoji">{selected.emoji}</div>
            <h2>{selected.title}</h2>
            <p className="proj-modal-desc">{selected.desc}</p>
            <div className="project-tags" style={{ marginBottom: '24px' }}>
              {selected.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
            </div>
            <div className="proj-modal-links">
              <a href={selected.github} target="_blank" rel="noreferrer" className="btn-primary"><FiGithub /> View Code</a>
              {selected.live !== '#' && (
                <a href={selected.live} target="_blank" rel="noreferrer" className="btn-outline"><FiExternalLink /> Live Demo</a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
