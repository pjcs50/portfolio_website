const skillCategories = [
  {
    title: 'Technical',
    skills: ['Python [most comfortable]', 'C/C++', 'Arduino', 'Flask', 'SQLite/Postgres', 'Git', 'Basic ML [classification/recs]', 'matplotlib', 'HTML/CSS', 'Sensor integration', 'BOM management', 'Cohort analysis', 'A/B testing']
  },
  {
    title: 'Product & Operations',
    skills: ['Product thinking', 'User interviewing [talked to 100+ users]', 'Rapid prototyping', 'Documentation [learned the hard way]', 'Stakeholder buy-in', 'Ops design']
  },
  {
    title: 'Leadership',
    skills: ['Team leadership [IDEATE Club]', 'Public speaking', 'Project management', 'Mentorship [juniors in club]']
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
                <h2 className="text-heading font-serif mb-8 accent-text">{category.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 accent-bg rounded text-sm border accent-border"
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
