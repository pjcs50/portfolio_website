const awards = [
  'SASMO #1 India, #2 Global [out of 30k+ students]',
  'HKIMO Gold [Hong Kong International Math Olympiad]',
  'IAAC Gold [International Astronomy & Astrophysics Competition]',
  'IYMC Gold [International Youth Math Challenge]',
  'NASA Beamline Top-25/500 [research challenge]',
  'Academic Excellence x3 [school awards for overall performance]',
  'Outstanding JPITE x2 [school tech & innovation awards]',
  'Squash: 3x ISSO Golds [national level]',
  'Squash: SGFI Top-5 [nationals, toughest tournament]',
  'IGCSE Physics subject topper [school]',
  'John Locke finalist [philosophy essay competition]'
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
                className="py-4 border-b accent-border last:border-b-0"
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
