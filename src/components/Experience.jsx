export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>AI Intern</h3>
                  <p className="company">Dhanush Healthcare Systems · Internship</p>
                  <p className="meta">Aug 2025 – Present · 8 mos &nbsp;·&nbsp; Hyderabad, Telangana, India · On-site</p>
                </div>
                <span className="badge-active">Current</span>
              </div>
              <ul className="timeline-points">
                <li>
                  Developed an AI-powered healthcare chatbot with multilingual text and voice interaction,
                  implementing real-time medical conversation using <strong>Whisper V3</strong> (speech-to-text)
                  and <strong>ElevenLabs / Google TTS</strong> (text-to-speech).
                </li>
                <li>
                  Integrated a <strong>GPT-based AI model</strong> for smart symptom analysis, emotion detection,
                  and intelligent responses, with file upload support to analyze medical documents (PDFs/images).
                </li>
                <li>
                  Built AI-powered clinical dynamic auto-population of form fields using <strong>Whisper</strong> (multi-language:
                  Hindi, English, Telugu, mixed) and <strong>LLaMA 3.3</strong>, extracting structured patient care
                  insights from real-time doctor-patient conversations.
                </li>
                <li>
                  Developed a real-time patient registration system using <strong>OpenAI GPT Realtime API</strong>,
                  dynamically populating form fields (name, age, contact, medical history) as users speak —
                  enabling seamless audio-to-form conversion with instant field validation and submission.
                </li>
              </ul>
              <div className="timeline-tags">
                <span>Python</span>
                <span>Artificial Intelligence</span>
                <span>Whisper V3</span>
                <span>GPT</span>
                <span>LLaMA 3.3</span>
                <span>ElevenLabs</span>
                <span>OpenAI API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
