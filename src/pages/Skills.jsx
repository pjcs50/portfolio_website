const skillCategories = [
  {
    title: 'Technical',
    skills: ['Python', 'C/C++', 'Arduino', 'Flask', 'SQLite/Postgres', 'Git', 'Basic ML (classification/recs)', 'matplotlib', 'HTML/CSS', 'Sensor integration', 'BOM management', 'Cohort analysis', 'A/B testing']
  },
  {
    title: 'Product & Operations',
    skills: ['Product thinking', 'User interviewing', 'Rapid prototyping', 'Documentation', 'Stakeholder buy-in', 'Ops design']
  },
  {
    title: 'Leadership',
    skills: ['Team leadership', 'Public speaking', 'Project management', 'Mentorship']
  }
]

export default function Skills() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-display font-serif mb-16">Skills</h1>

          <div className="space-y-16">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-heading font-serif mb-8">{category.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
