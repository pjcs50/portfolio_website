import { motion } from 'framer-motion'
import { Code, Wrench, Palette, Brain, Database, Globe } from 'lucide-react'
import { Badge } from '../components/ui/Badge'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// Placeholder skills data - Replace with your actual skills
const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "TensorFlow", level: "Beginner" },
      { name: "Django", level: "Intermediate" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Docker", level: "Beginner" },
      { name: "AWS", level: "Beginner" },
      { name: "Figma", level: "Intermediate" }
    ]
  },
  {
    category: "Design & Creative",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "UI/UX Design", level: "Intermediate" },
      { name: "Adobe Photoshop", level: "Intermediate" },
      { name: "Adobe Illustrator", level: "Beginner" },
      { name: "Figma", level: "Advanced" },
      { name: "Canva", level: "Advanced" },
      { name: "Video Editing", level: "Intermediate" }
    ]
  },
  {
    category: "Soft Skills",
    icon: Brain,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Leadership" },
      { name: "Team Collaboration" },
      { name: "Public Speaking" },
      { name: "Problem Solving" },
      { name: "Project Management" },
      { name: "Critical Thinking" },
      { name: "Communication" }
    ]
  },
  {
    category: "Languages",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Intermediate" },
      { name: "French", level: "Beginner" }
    ]
  }
]

const getLevelColor = (level) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
    case 'Intermediate':
      return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
    case 'Beginner':
      return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20'
    case 'Native':
      return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
    default:
      return 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20'
  }
}

export default function Skills() {
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
            Skills & <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through countless hours of learning, practice, and
            real-world application.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">{category.category}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      {skill.level && (
                        <Badge
                          variant="outline"
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          {...fadeInUp}
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Always Learning</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly expanding my skillset through
              online courses, personal projects, and hands-on experimentation. My approach to learning
              is iterative—I learn by doing, failing, and improving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Currently Learning",
                items: ["Machine Learning", "Cloud Computing", "Advanced Data Structures"]
              },
              {
                title: "Next on My List",
                items: ["Blockchain", "Cybersecurity", "Mobile Development"]
              },
              {
                title: "Learning Resources",
                items: ["Coursera", "MIT OCW", "YouTube Tutorials"]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications (Optional) */}
        <motion.div
          {...fadeInUp}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Python for Data Science",
                provider: "Coursera",
                date: "2024"
              },
              {
                name: "Web Development Bootcamp",
                provider: "Udemy",
                date: "2023"
              },
              {
                name: "Introduction to AI",
                provider: "MIT OpenCourseWare",
                date: "2023"
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                <Badge variant="secondary" className="text-xs">{cert.date}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
