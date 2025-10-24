import { Mail, MapPin } from 'lucide-react'

const links = [
  { name: 'Email', href: 'mailto:prakhar.jain377@gmail.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/prakhar-jain-3654702b9/' },
  { name: 'GitHub', href: 'https://github.com/pjcs50' },
  { name: 'Kaggle', href: 'https://kaggle.com/prakharjain50/code' },
  { name: 'Linktree', href: 'https://linktr.ee/prakharjainn' }
]

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-display font-serif mb-16">Contact</h1>

          <div className="space-y-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-lg">
                <Mail className="w-5 h-5 accent-text" />
                <a
                  href="mailto:prakhar.jain377@gmail.com"
                  className="link-underline accent-text-hover"
                >
                  prakhar.jain377@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-lg">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>Jaipur, India</span>
              </div>
            </div>

            {/* Links */}
            <div className="pt-8 border-t accent-border">
              <h2 className="text-sm font-medium mb-6 accent-text">Links</h2>
              <div className="space-y-4">
                {links.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg link-underline accent-text-hover"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div className="pt-8 border-t accent-border">
              <p className="text-muted-foreground mb-4">Want the full picture? [resume has everything in one place]</p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
