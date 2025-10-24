import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// Placeholder blog posts - Replace with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Journey to Building My First AI Model",
    excerpt: "A reflection on the challenges, learnings, and breakthroughs I experienced while developing my first machine learning project.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Python"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Why Leadership Isn't About Being in Charge",
    excerpt: "Lessons learned from leading student government and what true leadership means to me.",
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Leadership",
    tags: ["Leadership", "Personal Growth", "Reflection"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Sustainability in Tech: My Vision for the Future",
    excerpt: "How technology can be leveraged to create a more sustainable world, and why it matters to our generation.",
    date: "February 10, 2024",
    readTime: "6 min read",
    category: "Environment",
    tags: ["Sustainability", "Technology", "Future"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Balancing Academics, Sports, and Personal Projects",
    excerpt: "Time management strategies that helped me excel in school while pursuing my passions.",
    date: "January 22, 2024",
    readTime: "5 min read",
    category: "Productivity",
    tags: ["Time Management", "Student Life", "Tips"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "What I Learned from Failure",
    excerpt: "My biggest setbacks and how they shaped who I am today—a personal reflection on resilience.",
    date: "December 18, 2023",
    readTime: "7 min read",
    category: "Personal Growth",
    tags: ["Resilience", "Growth Mindset", "Reflection"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "The Intersection of Art and Technology",
    excerpt: "Exploring how creativity and technical skills combine to create meaningful innovation.",
    date: "November 30, 2023",
    readTime: "4 min read",
    category: "Creativity",
    tags: ["Art", "Technology", "Innovation"],
    image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=400&fit=crop"
  }
]

const categories = ["All", "Technology", "Leadership", "Environment", "Productivity", "Personal Growth", "Creativity"]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

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
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thoughts, reflections, and insights on technology, leadership, and life as a student.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          {...fadeInUp}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            {...fadeInUp}
            className="mb-16"
          >
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {filteredPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-fit group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="group p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          {...fadeInUp}
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Want to be notified when I publish new articles? Follow my journey and get updates
            on my latest projects and thoughts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

// Import useState at the top of the file
import { useState } from 'react'
