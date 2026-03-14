const education = [
  {
    icon: '🎓',
    degree: 'Bachelor of Technology — AI & Machine Learning',
    institution: 'Mallareddy University',
    period: '2021 – 2025',
    grade: '8.4 CGPA',
    tags: ['Python', 'Machine Learning', 'Deep Learning', 'DSA', 'Web Development'],
  },
  {
    icon: '🏫',
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College, Kuntloor',
    period: '',
    grade: '95%',
    tags: [],
  },
  {
    icon: '🏫',
    degree: 'Secondary School (SSC)',
    institution: 'Vignan High School',
    period: '',
    grade: '9.7 GPA',
    tags: [],
  },
]

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">My <span>Education</span></h2>
        <div className="edu-list">
          {education.map((e, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">{e.icon}</div>
              <div className="edu-body">
                <div className="edu-top">
                  <div>
                    <h3>{e.degree}</h3>
                    <p className="edu-inst">{e.institution}</p>
                    {e.period && <p className="edu-period">{e.period}</p>}
                  </div>
                  <span className="edu-grade">{e.grade}</span>
                </div>
                {e.tags.length > 0 && (
                  <div className="timeline-tags" style={{ marginTop: '14px' }}>
                    {e.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
