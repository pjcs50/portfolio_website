const awards = [
  'SASMO #1 India, #2 Global',
  'HKIMO Gold',
  'IAAC Gold',
  'IYMC Gold',
  'NASA Beamline Top-25/500',
  'Academic Excellence ×3',
  'Outstanding JPITE ×2',
  'Squash: 3× ISSO Golds',
  'Squash: SGFI Top-5',
  'IGCSE Physics subject topper',
  'John Locke finalist'
]

export default function Awards() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-display font-serif mb-16">Awards</h1>

          <div className="space-y-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="py-4 border-b border-border last:border-b-0"
              >
                <p className="text-lg">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
