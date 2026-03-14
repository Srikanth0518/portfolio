import { useState } from 'react'
import certDhanush from '../assets/cert.jpg'
import { FiExternalLink } from 'react-icons/fi'

const certs = [
  {
    img: certDhanush,
    title: 'Internship Certificate',
    issuer: 'Dhanush Healthcare Systems',
    date: 'February 3, 2026',
    pdf: null,
  },
  {
    img: null,
    title: 'Cyber Surakshit Certificate',
    issuer: 'Cisco',
    date: '',
    pdf: '/certcisco.pdf',
  },
  {
    img: null,
    title: 'NeuraSplash',
    issuer: '',
    date: '',
    pdf: '/certneura.pdf',
  },
]

export default function Certifications() {
  const [preview, setPreview] = useState(null)

  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title">My <span>Certifications</span></h2>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div
              className="cert-card"
              key={i}
              onClick={() => c.pdf ? window.open(c.pdf, '_blank') : setPreview(c)}
            >
              <div className="cert-img-wrap">
                {c.img
                  ? <><img src={c.img} alt={c.title} /><div className="cert-overlay">🔍 View</div></>
                  : <div className="cert-placeholder">
                      <span>📄</span>
                      <p>Click to open PDF</p>
                    </div>
                }
              </div>
              <div className="cert-info">
                <h3>{c.title}</h3>
                {c.issuer && <p className="cert-issuer">{c.issuer}</p>}
                {c.date && <p className="cert-date">{c.date}</p>}
                {c.pdf && (
                  <p className="cert-pdf-link"><FiExternalLink size={12} /> View Certificate</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <div className="cert-modal" onClick={() => setPreview(null)}>
          <div className="cert-modal-box" onClick={e => e.stopPropagation()}>
            <button className="cert-close" onClick={() => setPreview(null)}>✕</button>
            <img src={preview.img} alt={preview.title} />
            <p>{preview.title} — {preview.issuer}</p>
          </div>
        </div>
      )}
    </section>
  )
}
