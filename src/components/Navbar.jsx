import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>Srikanth.</NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              <NavLink to={l.path} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contact" className="nav-cta desktop-only">Hire Me</NavLink>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile">
          {links.map(l => (
            <NavLink
              key={l.label}
              to={l.path}
              className={({ isActive }) => isActive ? 'nav-mobile-link nav-active' : 'nav-mobile-link'}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-hero-primary" style={{ textAlign: 'center', marginTop: '8px' }} onClick={() => setOpen(false)}>
            Hire Me
          </NavLink>
        </div>
      )}
    </nav>
  )
}
