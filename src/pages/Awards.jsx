import { motion } from 'framer-motion'
import { Trophy, Award, Star, BookOpen, Users, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// Placeholder awards data - Replace with your actual awards
const awardsData = {
  academic: [
    {
      title: "National Merit Scholar Finalist",
      organization: "National Merit Scholarship Corporation",
      date: "2024",
      description: "Top 1% of PSAT test takers nationwide",
      icon: BookOpen
    },
    {
      title: "AP Scholar with Distinction",
      organization: "College Board",
      date: "2024",
      description: "Average score of 3.5+ on all AP Exams, with scores of 3 or higher on five or more exams",
      icon: Award
    },
    {
      title: "Science Fair - 1st Place",
      organization: "Regional Science & Engineering Fair",
      date: "2023",
      description: "Environmental Science category - IoT Energy Monitoring System",
      icon: Star
    },
    {
      title: "Honor Roll - All Semesters",
      organization: "High School Name",
      date: "2021-2024",
      description: "Maintained 4.0 GPA throughout high school",
      icon: Sparkles
    }
  ],
  athletic: [
    {
      title: "Varsity Team Captain",
      organization: "School Soccer Team",
      date: "2023-2024",
      description: "Led team to regional championships, recognized for leadership and sportsmanship",
      icon: Trophy
    },
    {
      title: "All-Conference Selection",
      organization: "State Athletic Association",
      date: "2023",
      description: "Selected as one of the top players in the conference",
      icon: Award
    }
  ],
  leadership: [
    {
      title: "Student Government President",
      organization: "High School Name",
      date: "2023-2024",
      description: "Led initiatives that improved student engagement and campus sustainability",
      icon: Users
    },
    {
      title: "Founder - Tech Club",
      organization: "High School Name",
      date: "2022",
      description: "Established coding club with 50+ active members, organized hackathons and workshops",
      icon: Star
    },
    {
      title: "Community Service Award",
      organization: "Local Youth Council",
      date: "2023",
      description: "Recognized for 300+ hours of volunteer service",
      icon: Award
    }
  ],
  competitions: [
    {
      title: "Hackathon Winner",
      organization: "Regional Tech Hackathon",
      date: "2024",
      description: "1st place for AI-powered educational platform",
      icon: Trophy
    },
    {
      title: "Math Olympiad - State Qualifier",
      organization: "State Mathematics Association",
      date: "2023",
      description: "Top 50 in state competition",
      icon: Star
    },
    {
      title: "Debate Tournament - Finalist",
      organization: "State Debate League",
      date: "2023",
      description: "Advanced to state finals in Lincoln-Douglas debate",
      icon: Award
    }
  ]
}

const categories = [
  {
    key: 'academic',
    title: 'Academic Excellence',
    description: 'Recognition for outstanding academic achievements',
    color: 'from-blue-500 to-cyan-500',
    icon: BookOpen
  },
  {
    key: 'athletic',
    title: 'Athletic Achievements',
    description: 'Success in sports and physical competition',
    color: 'from-green-500 to-emerald-500',
    icon: Trophy
  },
  {
    key: 'leadership',
    title: 'Leadership & Service',
    description: 'Making a difference in my community',
    color: 'from-purple-500 to-pink-500',
    icon: Users
  },
  {
    key: 'competitions',
    title: 'Competitions & Contests',
    description: 'Excellence in various academic competitions',
    color: 'from-orange-500 to-red-500',
    icon: Star
  }
]

export default function Awards() {
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
            Awards & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition earned through dedication, hard work, and a commitment to excellence
            in academics, athletics, and community service.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { label: "Academic Awards", value: awardsData.academic.length },
            { label: "Athletic Honors", value: awardsData.athletic.length },
            { label: "Leadership Roles", value: awardsData.leadership.length },
            { label: "Competition Wins", value: awardsData.competitions.length }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards by Category */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              {...fadeInUp}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awardsData[category.key].map((award, index) => (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all border-l-4" style={{ borderLeftColor: `hsl(var(--primary))` }}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{award.title}</CardTitle>
                            <CardDescription className="text-sm">
                              {award.organization}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {award.date}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {award.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          {...fadeInUp}
          className="mt-20 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-3xl p-8 md:p-12"
        >
          <Trophy className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Beyond the Awards</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            While these recognitions are meaningful, what matters most is the journey—the late nights
            studying, the teamwork, the failures that taught resilience, and the passion that drives
            me to keep pushing forward. Each award represents not just an achievement, but a lesson
            learned and a step toward my goals.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
