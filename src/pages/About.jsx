import { motion } from 'framer-motion'
import { BookOpen, Target, Heart, Lightbulb } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const values = [
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description: "I believe in the power of continuous education and staying curious about the world around me."
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every project I undertake has a purpose—to solve real problems and create meaningful impact."
  },
  {
    icon: Heart,
    title: "Empathy & Collaboration",
    description: "Understanding others' perspectives and working together to achieve common goals."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly seeking creative solutions and embracing new technologies and ideas."
  }
]

export default function About() {
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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A story of passion, perseverance, and the pursuit of excellence.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            {...fadeInUp}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center shadow-soft overflow-hidden">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-sm text-muted-foreground">
                  Replace with your photo
                  <br />
                  <span className="text-xs">(Recommended: 800x800px)</span>
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30" />
          </motion.div>

          {/* Story */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                From a young age, I've been fascinated by <strong>how things work</strong> and
                <strong> why they matter</strong>. This curiosity led me to explore diverse fields,
                from science and technology to art and humanities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Growing up in <strong>[Your City/Background]</strong>, I learned the value of
                hard work, resilience, and community. These values shape everything I do—whether
                it's tackling a complex coding problem, leading a team project, or volunteering
                in my local community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I'm pursuing my passion for <strong>[Your Field of Interest]</strong> with
                the goal of attending a top university where I can continue to grow, learn, and
                contribute to meaningful change. I believe that education is not just about
                acquiring knowledge—it's about using that knowledge to make the world a better place.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-serif mb-4">
            What Drives Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles and values that guide my decisions and actions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Academic Interests */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          {...fadeInUp}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold font-serif mb-6">
            Academic Interests & Future Goals
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm particularly drawn to <strong className="text-foreground">[Your Major/Field]</strong> because
              it sits at the intersection of <strong className="text-foreground">[Interest 1]</strong> and
              <strong className="text-foreground"> [Interest 2]</strong>. I'm excited about the possibility
              of exploring topics like:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-foreground">Topic 1:</strong> Brief description of your interest</li>
              <li><strong className="text-foreground">Topic 2:</strong> Brief description of your interest</li>
              <li><strong className="text-foreground">Topic 3:</strong> Brief description of your interest</li>
              <li><strong className="text-foreground">Topic 4:</strong> Brief description of your interest</li>
            </ul>
            <p>
              Looking ahead, I envision myself <strong className="text-foreground">[Your Career Goal]</strong>,
              leveraging my education and experiences to create solutions that address real-world challenges.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Personal Touch */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl font-bold font-serif mb-6">
            Beyond Academics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            When I'm not studying or working on projects, you can find me:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { emoji: "📚", text: "Reading philosophy" },
              { emoji: "🎵", text: "Playing piano" },
              { emoji: "⚽", text: "Playing sports" },
              { emoji: "🌍", text: "Volunteering" }
            ].map((hobby, index) => (
              <motion.div
                key={hobby.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-card border border-border shadow-soft text-center"
              >
                <div className="text-4xl mb-2">{hobby.emoji}</div>
                <p className="text-sm font-medium">{hobby.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
