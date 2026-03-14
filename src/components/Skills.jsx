const skills = [
  {
    category: 'Programming',
    tags: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
  },
  {
    category: 'AI & Machine Learning',
    tags: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'NumPy', 'Pandas', 'Scikit-learn'],
  },
  {
    category: 'Web Development',
    tags: ['HTML5', 'CSS3', 'Responsive Design', 'JavaScript'],
  },
  {
    category: 'Tools & Platforms',
    tags: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Google Colab'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-grid">
          {skills.map(s => (
            <div className="skill-card" key={s.category}>
              <h3>{s.category}</h3>
              <div className="skill-tags">
                {s.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
