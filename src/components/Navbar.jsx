import { NavLink } from 'react-router-dom'

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
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="nav-logo">Srikanth Yasam</NavLink>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              <NavLink
                to={l.path}
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/contact" className="nav-cta">Hire Me</NavLink>
      </div>
    </nav>
  )
}
