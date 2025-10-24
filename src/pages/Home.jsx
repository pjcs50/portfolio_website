import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {/* Name and Title */}
            <div className="space-y-6">
              <h1 className="text-display font-serif">
                Prakhar Jain
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                I build products that survive real users: workers on sites, hotel ops teams, students studying at 2 a.m. I love physics, data/information science, and how people think — psychology, neuroscience, behavioral economics.
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:prakhar.jain377@gmail.com" className="link-underline">
                  prakhar.jain377@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jaipur, India</span>
              </div>
              <a
                href="https://linkedin.com/in/prakhar-jain-3654702b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                LinkedIn
              </a>
            </div>

            {/* Education */}
            <div className="pt-8 border-t border-border">
              <h2 className="text-sm font-medium mb-4">Education</h2>
              <div className="space-y-2">
                <h3 className="text-lg font-serif">Jayshree Periwal International School</h3>
                <p className="text-muted-foreground">
                  IB Diploma, May 2026
                </p>
                <p className="text-sm text-muted-foreground">
                  Physics HL, Computer Science HL, Mathematics AA HL, Economics HL, English A SL, Hindi B SL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-serif mb-16">Selected Work</h2>

          <div className="space-y-16">
            {/* TopperTrack */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">TopperTrack</h3>
              <p className="text-muted-foreground">AI tutor for SAT/JEE</p>
              <p className="leading-relaxed">
                A study buddy that plans your day, generates notes and flashcards from textbooks, and tracks progress. Led a 4-student team to build the plan engine, focus loop, and cohort dashboards. Ran a pilot with Allen (Jaipur) reaching 1,700+ students.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium group"
              >
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* HeatScape */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">HeatScape</h3>
              <p className="text-muted-foreground">Cooling helmet for workers</p>
              <p className="leading-relaxed">
                Passive-cooling helmet with sub-₹500 BOM. 4-week, 3-site pilot cut heatstroke reports by ~40%. Secured BRPLK pilot for 3,000 units valued at $10k.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium group"
              >
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Annapurna */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Annapurna</h3>
              <p className="text-muted-foreground">Hotel surplus to meals</p>
              <p className="leading-relaxed">
                Connected Marriott GM and four nearby hotels with Akshaya Patra to rescue untouched banquet trays. 20k+ meals delivered since launch.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium group"
              >
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-sm font-medium mb-4">Experience</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Marriott International — Energy & Operations Intern</li>
                <li>FLEECA Automotive — R&D Intern (TPMS)</li>
                <li>ChipSor — Embedded & Product Intern</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Recognition</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>SASMO #1 India, #2 Global</li>
                <li>NASA Beamline Top-25/500</li>
                <li>Squash: 3× ISSO Golds, SGFI Top-5</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="px-6 py-3 border border-border rounded hover:bg-accent transition-colors text-sm font-medium"
            >
              More about me
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 bg-foreground text-background rounded hover:opacity-90 transition-opacity text-sm font-medium"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
