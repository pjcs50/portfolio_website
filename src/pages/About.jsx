export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing border-b border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-display font-serif mb-16">About</h1>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              I'm Prakhar, a student in Jaipur, India. I build systems that bridge technical innovation and practical implementation. My work spans student analytics, energy systems, and social impact projects [all centered on understanding why technically sound solutions sometimes fail in real-world contexts].
            </p>

            <p>
              I started with pure physics and engineering, drawn to the elegance of problems with clear solutions. Building HeatScape (a cooling system for construction workers) changed that perspective. The design worked technically but failed to account for workplace culture and dignity concerns [workers didn't want to wear something that made them look different]. That experience taught me that effective engineering requires understanding human behavior, economic constraints, and social systems as much as thermodynamics.
            </p>

            <p>
              Currently working on TopperTrack [predictive analytics for student outcomes], Annapurna [food rescue logistics], and environmental monitoring tools through IDEATE STEM Club. Each project explores the intersection of technical capability and adoption barriers. I'm particularly interested in energy storage systems and renewable infrastructure - areas where materials science, data modeling, and policy implementation converge.
            </p>

            <p>
              My summer internship at Marriott International reinforced my interest in computational research. Working on energy optimization showed me how data-driven approaches can accelerate system improvement. I realized I genuinely enjoy the process of translating research insights into scalable products [not just publishing papers].
            </p>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-8 accent-text">What's Next</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I see myself pursuing research in computational materials science and energy systems, with a focus on developing scalable solutions for renewable energy infrastructure. My interest in this field solidified during my work on energy storage challenges and grid optimization problems in India [we have a ton of solar capacity but storage is terrible].
            </p>

            <p>
              At university, I plan to study physics and data science to build the technical foundation for materials modeling and systems analysis. I'm particularly interested in battery technology research and grid-scale energy storage - areas where computational design can accelerate materials discovery and deployment.
            </p>

            <p>
              Beyond research, I hope to bridge the gap between laboratory breakthroughs and real-world implementation. Working on projects like HeatScape and Annapurna taught me that technical solutions need to account for human behavior, economic constraints, and infrastructure realities [the stuff they don't teach you in physics class]. I'm drawn to the intersection of engineering, policy, and adoption barriers.
            </p>

            <p>
              Long-term, I see myself either leading research in energy materials at a university or national lab, or founding a company that commercializes breakthrough battery technologies. The goal is to develop systems that work technically AND scale practically - particularly in developing countries where energy access remains inconsistent despite significant renewable generation capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-8 accent-text">Beyond Work</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Competitive squash',
              'Cycling around Jaipur',
              'Exploring restaurants',
              'Watching cricket [huge Kohli fan]',
              'Side coding projects',
              'Reading physics papers'
            ].map((interest) => (
              <div key={interest} className="text-muted-foreground">
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
