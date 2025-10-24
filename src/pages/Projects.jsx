import ImageGallery from '../components/ImageGallery'

const projects = {
  startups: [
    {
      id: 'toppertrack',
      title: 'TopperTrack',
      subtitle: 'AI tutor for SAT/JEE',
      role: 'Founder & Lead Developer',
      timeline: 'Grade 10-12 | 15 hr/week',
      backstory: 'Late-night study sessions with no mentors and scattered resources. I interviewed 32 students across coaching centers in Jaipur, mapped their pain points, and realized the problem wasn\'t content availability - it was personalization and accountability.',
      work: 'Built an AI tutor that adapts to each user\'s learning style, time constraints, and confidence levels. Led a 4-student team to develop the study plan engine, focus loop (Pomodoro timer, XP system, leaderboard), auto-generated notes and flashcards from textbooks, source-linked explanations, and cohort dashboards for group accountability. Trained models on ~20 years of past papers, topper notes, and reference books. Ran a pilot program with Allen (Jaipur).',
      outcomes: 'Scaled to 1,700+ users across JEE and SAT prep cohorts. Documented complete feature set, user retention metrics, and learning outcome improvements.',
      images: [
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=675&fit=crop',
        'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&h=675&fit=crop',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'heatscape',
      title: 'HeatScape',
      subtitle: 'Cooling helmet for construction workers',
      role: 'Co-Founder & Product Lead',
      timeline: 'Grade 10-12 | 10 hr/week',
      backstory: 'Peltier-based prototypes failed spectacularly. Two-hour battery life. Neck strain from weight. Workers asked the obvious question: "Who will charge this on a construction site?" When I suggested solar panels, they laughed - heavier equipment defeats the purpose. That feedback loop taught me more than any textbook.',
      work: 'Completely redesigned approach. Switched to passive evaporative cooling using bamboo liner + fast-wicking fabric layer. Modeled airflow patterns and placed jharokha-inspired vents based on convection simulations. Added drip guards and quick-swap liners for hygiene. Went from superglued prototypes to a certified model through endless iteration and worker feedback.',
      outcomes: '4-week, 3-site pilot cut heatstroke incidents ~40% (20→12 cases). Secured BRPLK pilot contract worth $10k for 3,000 units. Pitched to 12 construction firms. Learned that product-market fit matters more than technical elegance.',
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=675&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=675&fit=crop'
      ]
    }
  ],

  research: [
    {
      id: 'oxford-iit',
      title: 'Bamboo-Graphene Nanocomposite Research',
      subtitle: 'Collaboration with Oxford PhD & IIT Guwahati',
      role: 'Student Researcher & Intern',
      timeline: 'Grade 11-12 | 10 hr/week, 30 weeks',
      backstory: 'Started by cold-emailing researchers working on sustainable aerospace materials. Got connected with Hina Ajmal (Oxford PhD) and Rahul Patwa (IIT Guwahati Materials). They gave me a shot.',
      work: 'Engineered bamboo-based graphene nanocomposite ~10% lighter than traditional carbon fiber for aerospace applications. Characterized mechanical properties, ran tensile tests, optimized bamboo pyrolysis parameters. Separately, developed ML model for waste classification to improve recycling efficiency in manufacturing contexts.',
      outcomes: 'Published research on ML waste classification. Presented composite findings at materials science symposium. Learned how to fail fast in a lab setting.',
      images: [
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=675&fit=crop',
        'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&h=675&fit=crop'
      ]
    }
  ],

  internships: [
    {
      id: 'marriott',
      title: 'Marriott International',
      subtitle: 'Energy Strategy & Sustainability Intern',
      role: 'Paid Student Intern',
      timeline: 'Grade 10 | Summer, 35 hr/week, 8 weeks',
      backstory: 'New Jaipur property. High electricity bills. Management mandate: reduce load without hurting guest experience. Classic constraint optimization problem.',
      work: 'Created zoned energy load map (AHUs, FCUs, lighting, back-of-house, kitchens, elevators). Installed motion/door sensors and lux meters. Analyzed CCTV footage for occupancy patterns. Implemented occupancy-gated lighting and HVAC with hysteresis loops and deadbands to prevent oscillation. Widened temperature setpoints (23-25°C range). Added pre-cooling schedules for high-occupancy windows. Built override system for non-critical load shedding during peak demand.',
      outcomes: '~13% electricity reduction in first quarter. Smoother demand curves reduced peak penalties. Algorithm adopted by Marriott APAC sustainability plan for 2026 rollout.',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=675&fit=crop',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'fleeca',
      title: 'FLEECA Automotive',
      subtitle: 'R&D Intern - TPMS Battery Optimization',
      role: 'Paid Intern',
      timeline: 'Grade 11 | 15 hr/week, 8 weeks',
      backstory: 'Tire pressure monitoring sensors die too fast. Field battery swaps are expensive and annoying. Can we harvest energy from the wheel itself?',
      work: 'Built wheel-hub test rig to simulate real driving conditions. Ran speed and load sweeps on piezoelectric energy harvester. Tuned mechanical preload and rectifier circuits. Profiled output voltage ripple. Debugged MCU sleep/wake behavior to minimize parasitic drain. Wrote bench test automation scripts in Python.',
      outcomes: '~40% battery health improvement in extended testing. Fewer maintenance cycles. Prototype data confirmed path to 300%+ battery life extension.',
      images: [
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'chipsor',
      title: 'ChipSor',
      subtitle: 'Embedded & Product Intern - AQI Wearable',
      role: 'Intern',
      timeline: 'Grade 10-12 | 1 hr/week, 40 weeks',
      backstory: 'Air quality apps show city-wide averages. Useless when you need hyperlocal, real-time data while walking through traffic vs. a park.',
      work: 'Prototyped wearable AI air quality band for localized pollution feedback. Calibrated PM2.5/PM10 sensors. Filtered humidity drift that was causing false readings. Wrote firmware alert system. Built minimal mobile UI. Designed server API for data logging. Tuned threshold algorithms via real-world testing (hallways vs. roads vs. kitchens) to eliminate false positives from cooking and traffic patterns.',
      outcomes: 'Stable readings across humidity swings. 30-day recalibration cadence. Learned to work within hardware power and size constraints.',
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop'
      ]
    }
  ],

  social: [
    {
      id: 'annapurna',
      title: 'Annapurna',
      subtitle: 'Hotel surplus to meals',
      role: 'Founder',
      timeline: 'Grade 11-12 | 8 hr/week, 20 weeks',
      backstory: 'Working at Marriott, I watched untouched banquet trays get binned every night due to kitchen policy. Food that could feed dozens was going to waste. Had to do something.',
      work: 'Connected Marriott GM and four nearby hotels with Akshaya Patra NGO. Wrote complete QA/safety SOP (probe thermometer temps, tamper seals, time labels, 3-hour pickup cutoff). Set up WhatsApp dispatch coordination. Arranged temperature-controlled van logistics. Borderline/questionable items diverted to compost or animal feed instead of landfill.',
      outcomes: 'Daily pickups stabilized. 20,000+ meals delivered since launch. Gained 2 pounds of muscle from lifting food boxes. Operations manual now used across partner hotels.',
      images: [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=675&fit=crop',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'nanhe-kadam',
      title: 'Nanhe Kadam & Raksha NGOs',
      subtitle: 'Digital Operations & Mentorship',
      role: 'Volunteer',
      timeline: 'Grade 11 | Summer, 20 hr/week, 8 weeks',
      backstory: 'These NGOs were doing incredible work but had almost no digital presence. Donations were limited to local networks. Kids had no structured learning support.',
      work: 'Digitized donation workflows and social media operations. Created content calendar, designed posts, managed community engagement. Grew combined following from 200 to 5,000+. Mentored 75 underprivileged children in basic computer skills and English. Hosted weekly educational events and activity sessions.',
      outcomes: 'Boosted donation inflow by connecting with wider donor base. Kids showed measurable improvement in digital literacy. Built sustainable volunteer pipeline for ongoing support.',
      images: [
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'jain-temple',
      title: 'Jain Temple Community Service',
      subtitle: 'Weekly volunteering with grandmother',
      role: 'Volunteer',
      timeline: 'Ongoing',
      backstory: 'Weekend mornings with my grandmother at the temple. Simple work, but meaningful.',
      work: 'Temple clean-up, food distribution logistics, organizing kids\' activities during festivals. Learned the value of showing up consistently for community, even when the work isn\'t glamorous.',
      outcomes: 'Became part of the temple\'s core volunteer group. Built relationships across generations. Found grounding in routine service.',
      images: [
        'https://images.unsplash.com/photo-1544571074-5b7d1e8c3f43?w=1200&h=675&fit=crop'
      ]
    }
  ],

  ideate: [
    {
      id: 'ideate-leadership',
      title: 'IDEATE STEM Club',
      subtitle: 'President & Founder of Mentorship System',
      role: 'President',
      timeline: 'Grade 11-12 | 6 hr/week, 28 weeks',
      backstory: 'The club existed, but knowledge died with each graduating batch. Junior students had no guidance. Projects lacked documentation. Needed systematic knowledge transfer.',
      work: 'Built junior-senior mentorship pipeline. Implemented weekly Kanban boards for project tracking. Created safety briefing protocols for lab work. Secured dedicated lab access and in-kind parts from local suppliers. Member of Rocket Science Youth Association - helped launch 2nd highest altitude sounding rocket by students in India.',
      outcomes: 'Mentored teams through full project lifecycle with proper handoff documentation. Established sustainable structure that survived founder graduation. Created culture of documentation and knowledge sharing.',
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'jaldhaara',
      title: 'Project Jaldhaara',
      subtitle: 'Biosand water filters for rural communities',
      role: 'Lead, IDEATE Club Initiative',
      timeline: 'Grade 11',
      backstory: 'Visited rural villages outside Jaipur. Saw families using contaminated water. Waterborne diseases were common. Commercial filters were too expensive.',
      work: 'Raised awareness about water conservation and waterborne diseases. Engineered low-cost biosand filters using locally available materials. Installed 50+ filters in villages lacking clean drinking water infrastructure. Trained community members on maintenance and operation.',
      outcomes: 'Provided clean water access to 200+ families. Reduced reported cases of waterborne illness in pilot villages. Documented construction process for replication by other groups.',
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=675&fit=crop',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'vayu',
      title: 'Project Vayu',
      subtitle: 'Low-cost AQI monitors',
      role: 'Founder, IDEATE Club',
      timeline: 'Grade 11-12',
      backstory: 'Jaipur air quality varies dramatically by neighborhood and time. Existing monitors cost hundreds of dollars. People needed hyperlocal, mobile pollution data.',
      work: 'Built ~$5 Air Quality Index monitors using PMS5003 sensors, ESP32 microcontrollers, and OLED displays. Created mobile mesh network for real-time data sharing. Developed simple mobile app for pollution mapping. Distributed monitors to volunteers across Jaipur.',
      outcomes: 'Helped 100+ users make safer health decisions in high-risk zones. Mapped pollution hotspots around schools and hospitals. Data used by local environmental groups for advocacy.',
      images: [
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'cleanbox',
      title: 'CleanBox',
      subtitle: 'HEPA-UVC mini air purification hood',
      role: 'Mentor, IDEATE Club',
      timeline: 'Grade 11',
      backstory: 'Electronics assembly creates particulate matter. Lab needed localized clean air zones for sensitive work.',
      work: 'Mentored junior team to build HEPA-UVC filtration hood for benchtop use. Designed airflow patterns. Selected appropriate UV-C wavelength for pathogen inactivation. Built adjustable fan speed controller.',
      outcomes: 'Deployed in school electronics lab. Reduced dust contamination during PCB assembly. Team presented at school science fair.',
      images: [
        'https://images.unsplash.com/photo-1615799998603-7c6270a45196?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'pm25-mapper',
      title: 'PM2.5 Campus Mapper',
      subtitle: 'School air quality monitoring',
      role: 'Mentor, IDEATE Club',
      timeline: 'Grade 12',
      backstory: 'School campus has different pollution levels near roads vs. gardens vs. cafeteria. Needed data to advocate for better ventilation.',
      work: 'Mentored team to build mobile PM2.5 sensor cart. Mapped pollution levels across entire campus at different times of day. Created heatmap visualizations. Presented findings to administration.',
      outcomes: 'Identified high-pollution zones. Administration improved ventilation in affected classrooms. Data used to plan outdoor activity schedules.',
      images: [
        'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=1200&h=675&fit=crop'
      ]
    },
    {
      id: 'smart-irrigation',
      title: 'Smart Irrigation System',
      subtitle: 'Automated campus garden watering',
      role: 'Mentor, IDEATE Club',
      timeline: 'Grade 11',
      backstory: 'School garden was being over-watered, wasting water. Needed automated soil-moisture-based system.',
      work: 'Mentored team to build soil moisture sensor array with automated valve control. Programmed Arduino-based controller. Designed simple scheduling interface. Installed in school garden as pilot.',
      outcomes: 'Reduced water usage by estimated 40%. Garden health improved with consistent moisture levels. System still running after 2 years.',
      images: [
        'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=675&fit=crop'
      ]
    }
  ],

  family: [
    {
      id: 'family-care',
      title: 'Family Responsibilities',
      subtitle: 'Caring for aunt\'s children',
      role: 'Tutor & Caretaker',
      timeline: 'Ongoing | Weekends',
      backstory: 'My aunt was preparing for medical entrance exams - a grueling process that required uninterrupted focus. Someone needed to step in.',
      work: 'Most weekends, I cared for her two young children (ages 5 and 8). The role constantly shifted: tutor for the older child\'s homework, babysitter for the younger one\'s endless energy, mediator for sibling conflicts, snack provider, story reader. Four-hour commitment every weekend. Provided additional learning support while managing the chaos of two kids with completely different needs and attention spans.',
      outcomes: 'Aunt successfully cleared her entrance exams. Kids showed academic improvement and we built genuine relationships. I learned patience I didn\'t know I had. Discovered that managing two kids\' conflicting demands is harder than any coding problem I\'ve faced. Developed ability to context-switch rapidly and respond to different needs with empathy and focus.',
      images: [
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=675&fit=crop'
      ]
    }
  ]
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-display font-serif mb-8">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Startups, research, social impact, and everything in between. Work that explores technical capability, real-world adoption, and human behavior.
          </p>
        </div>
      </section>

      {/* Startups & Products */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-16">Startups & Products</h2>
          {projects.startups.map((project, index) => (
            <div key={project.id} className={index > 0 ? 'mt-24 pt-16 border-t border-border' : ''}>
              <div className="mb-8">
                <h3 className="text-title font-serif mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">{project.role} • {project.timeline}</p>
              </div>

              <div className="mb-12">
                <ImageGallery images={project.images} alt={project.title} />
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-3">Backstory</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.backstory}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">What I Built</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.work}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Outcomes</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-16">Research</h2>
          {projects.research.map((project) => (
            <div key={project.id}>
              <div className="mb-8">
                <h3 className="text-title font-serif mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">{project.role} • {project.timeline}</p>
              </div>

              <div className="mb-12">
                <ImageGallery images={project.images} alt={project.title} />
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-3">Backstory</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.backstory}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Research Work</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.work}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Outcomes</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internships */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-16">Internships</h2>
          {projects.internships.map((project, index) => (
            <div key={project.id} className={index > 0 ? 'mt-24 pt-16 border-t border-border' : ''}>
              <div className="mb-8">
                <h3 className="text-title font-serif mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">{project.role} • {project.timeline}</p>
              </div>

              <div className="mb-12">
                <ImageGallery images={project.images} alt={project.title} />
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-3">Context</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.backstory}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Work</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.work}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Impact</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-16">Social Impact & Community</h2>
          {projects.social.map((project, index) => (
            <div key={project.id} className={index > 0 ? 'mt-24 pt-16 border-t border-border' : ''}>
              <div className="mb-8">
                <h3 className="text-title font-serif mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">{project.role} • {project.timeline}</p>
              </div>

              <div className="mb-12">
                <ImageGallery images={project.images} alt={project.title} />
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-3">Why This Matters</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.backstory}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">What I Did</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.work}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Impact</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IDEATE Club Projects */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-16">IDEATE STEM Club Projects</h2>
          {projects.ideate.map((project, index) => (
            <div key={project.id} className={index > 0 ? 'mt-24 pt-16 border-t border-border' : ''}>
              <div className="mb-8">
                <h3 className="text-title font-serif mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">{project.role} • {project.timeline}</p>
              </div>

              <div className="mb-12">
                <ImageGallery images={project.images} alt={project.title} />
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-3">Context</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.backstory}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Work</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.work}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Outcomes</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Family Responsibilities */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-16">Family & Responsibilities</h2>
          {projects.family.map((project) => (
            <div key={project.id}>
              <div className="mb-8">
                <h3 className="text-title font-serif mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">{project.role} • {project.timeline}</p>
              </div>

              <div className="mb-12">
                <ImageGallery images={project.images} alt={project.title} />
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-3">Context</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.backstory}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">What This Involved</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.work}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">What I Learned</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
