import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// Replace these with your EmailJS credentials
const SERVICE_ID  = 'service_epijghr'
const TEMPLATE_ID = 'template_yutp8qr'
const PUBLIC_KEY  = 'd3WIdCpC9EjuBAk_7'

const contactItems = [
  { icon: <FiMail />, label: 'Email', value: 'srikanthyasam947@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+91 6302482226' },
  { icon: <FiMapPin />, label: 'Location', value: 'Hyderabad, Telangana, India' },
]

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
            <div className="contact-items">
              {contactItems.map(c => (
                <div className="contact-item" key={c.label}>
                  <div className="icon">{c.icon}</div>
                  <div className="detail">
                    <div className="label">{c.label}</div>
                    <div className="value">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input id="from_name" name="from_name" type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input id="from_email" name="from_email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>

            <button type="submit" className="btn-hero-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : <><FiSend /> Send Message</>}
            </button>

            {status === 'success' && (
              <p className="form-success">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
