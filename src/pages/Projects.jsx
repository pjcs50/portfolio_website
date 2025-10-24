import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import ImageGallery from '../components/ImageGallery'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// Placeholder project data - Replace with your actual projects
const projects = [
  {
    id: 1,
    title: "AI-Powered Study Assistant",
    description: "Developed a machine learning application that helps students organize their study materials and provides personalized learning recommendations.",
    role: "Lead Developer & Designer",
    timeline: "June 2024 - August 2024",
    challenges: "Implementing NLP algorithms, creating an intuitive UI, managing large datasets",
    achievements: "Used by 500+ students, 4.8/5 rating on the app store, featured in school newsletter",
    technologies: ["Python", "TensorFlow", "React", "Firebase"],
    images: [
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
    ],
    links: {
      github: "https://github.com/yourusername/project",
      demo: "https://demo.example.com"
    }
  },
  {
    id: 2,
    title: "Community Impact Tracker",
    description: "Built a web platform to help local non-profits track volunteer hours, donations, and community engagement metrics.",
    role: "Full-Stack Developer",
    timeline: "January 2024 - April 2024",
    challenges: "Data visualization, user authentication, mobile responsiveness",
    achievements: "Adopted by 3 local organizations, tracked 1000+ volunteer hours, improved reporting efficiency by 60%",
    technologies: ["Node.js", "Express", "MongoDB", "Chart.js"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
    ],
    links: {
      github: "https://github.com/yourusername/project",
    }
  },
  {
    id: 3,
    title: "Sustainable Campus Initiative",
    description: "Created an IoT system to monitor energy usage across school buildings and provide actionable insights for reducing carbon footprint.",
    role: "Team Lead & Hardware Engineer",
    timeline: "September 2023 - December 2023",
    challenges: "Sensor integration, data transmission, creating meaningful visualizations",
    achievements: "Reduced school energy consumption by 15%, won regional science fair, presented to school board",
    technologies: ["Arduino", "Raspberry Pi", "Python", "React Dashboard"],
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop"
    ],
    links: {
      github: "https://github.com/yourusername/project"
    }
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of work that showcases my passion for solving real-world problems
            through technology and innovation.
          </p>
        </motion.div>

        {/* Projects Timeline */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.timeline}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button size="sm" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Image Gallery */}
                  <ImageGallery
                    images={project.images}
                    alt={project.title}
                  />

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">My Role</h3>
                        <p className="text-muted-foreground">{project.role}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <h3 className="text-lg font-semibold mb-2">Impact & Achievements</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.achievements}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub for additional projects and contributions.
          </p>
          <Button size="lg" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit My GitHub
            </a>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
