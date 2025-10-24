import ImageGallery from '../components/ImageGallery'

const projects = [
  {
    id: 'toppertrack',
    title: 'TopperTrack',
    subtitle: 'AI tutor for SAT/JEE',
    backstory: 'Late-night study, no mentors, scattered resources. I interviewed 32 students, mapped pain points, and trained tools on ~20 years of past papers, topper notes, and books.',
    role: 'Led a 4-student team; built the plan engine, focus loop (Pomodoro, XP, leaderboard), source-linked notes, cohort dashboards; ran a pilot with Allen (Jaipur).',
    outcomes: '1,700+ students used pilot cohorts. Documented feature set and results.',
    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=675&fit=crop'
    ]
  },
  {
    id: 'heatscape',
    title: 'HeatScape',
    subtitle: 'Cooling helmet for workers',
    backstory: 'Peltier prototypes failed — 2-hour battery life and neck strain. Workers asked the obvious: who will charge this on site? Solar-Peltier was heavier and mocked.',
    role: 'Switched to bamboo liner + fast-wick layer for evaporative cooling; jharokha-inspired vents placed by modeled convection; drip guards; quick-swap liners.',
    outcomes: '4-week, 3-site pilot cut heatstroke reports ~40% (20→12). Secured BRPLK pilot: $10k for 3,000 units; pitched 12 firms.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=675&fit=crop'
    ]
  },
  {
    id: 'marriott',
    title: 'Marriott International',
    subtitle: 'Energy & Operations Intern (Jaipur)',
    backstory: 'New property, high electricity costs; reduce load without hurting guest experience.',
    role: 'Zoned load map (AHUs/FCUs, lighting, BOH, kitchens, lifts); motion/door sensors and lux meters; CCTV footfall; occupancy-gated lighting/HVAC with hysteresis and deadbands; widened setpoints (≈23–25°C); pre-cool windows; noncritical load-shed with overrides.',
    outcomes: '~13% electricity reduction; smoother peaks; documented on resume and application.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=675&fit=crop'
    ]
  },
  {
    id: 'fleeca',
    title: 'FLEECA Automotive',
    subtitle: 'R&D Intern (TPMS)',
    backstory: 'Extend tire-sensor life; reduce field battery swaps.',
    role: 'Wheel-hub test rig; speed/load sweeps; tuned mechanical preload and rectifier; profiled output ripple; debugged MCU sleep/wake; wrote bench scripts.',
    outcomes: '~40% battery-health improvement in extended testing; fewer maintenance trips.',
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=675&fit=crop'
    ]
  },
  {
    id: 'chipsor',
    title: 'ChipSor',
    subtitle: 'Embedded & Product Intern (AQI wearable)',
    backstory: 'Hyperlocal air-quality with actionable prompts.',
    role: 'Calibrated sensors; filtered humidity drift; firmware alerts; minimal mobile UI; server/API to the app; tuned thresholds via hallway/road tests to curb kitchen/traffic false positives.',
    outcomes: 'Stable readings across humidity swings; 30-day recalibration cadence.',
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop'
    ]
  },
  {
    id: 'annapurna',
    title: 'Annapurna',
    subtitle: 'Hotel surplus to meals',
    backstory: 'Kitchen policy meant untouched banquet trays were binned nightly.',
    role: 'Connected Marriott GM + four nearby hotels with Akshaya Patra; wrote a QA SOP (probe temps, seals, time labels, 3-hour cutoff), WhatsApp dispatch, temp-controlled van; borderline trays → compost/feed.',
    outcomes: 'Daily pickups stabilized; 20k+ meals delivered since that summer; operations documented across partner hotels.',
    images: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=675&fit=crop'
    ]
  },
  {
    id: 'ideate',
    title: 'IDEATE STEM Club',
    subtitle: 'President',
    backstory: 'Built junior–senior mentorship, weekly Kanban, and safety briefings; secured lab access and in-kind parts.',
    role: 'Mentored teams (e.g., HEPA-UVC "CleanBox" mini-hood, PM2.5 campus mapper, smart irrigation mini-plot) to demo-day with handoff docs.',
    outcomes: 'Established sustainable club structure with knowledge transfer across cohorts.',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=675&fit=crop'
    ]
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-display font-serif mb-8">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A collection of work exploring the intersection of technical capability and real-world adoption.
          </p>
        </div>
      </section>

      {/* Projects */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {projects.map((project, index) => (
          <section key={project.id} className={index === 0 ? 'py-24' : 'py-16 border-t border-border'}>
            {/* Title */}
            <div className="mb-12">
              <h2 className="text-title font-serif mb-2">{project.title}</h2>
              <p className="text-lg text-muted-foreground">{project.subtitle}</p>
            </div>

            {/* Gallery */}
            <div className="mb-12">
              <ImageGallery images={project.images} alt={project.title} />
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium mb-3">Backstory</h3>
                <p className="text-muted-foreground leading-relaxed">{project.backstory}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">What I Did</h3>
                <p className="text-muted-foreground leading-relaxed">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Outcomes</h3>
                <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
