import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Why Flutter is Superior to Native Development: A Comprehensive Analysis",
    excerpt:
      "Discover why Flutter has become the preferred choice for mobile app development, offering better performance, faster development cycles, and cost-effective solutions compared to native development.",
    category: "Mobile Development",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    image: "/blog-flutter-vs-native.png",
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
  },
  {
    id: 2,
    title: "Firebase Integration Best Practices for Flutter Apps",
    excerpt:
      "Learn the most effective ways to integrate Firebase services into your Flutter applications for authentication, database, and cloud functions.",
    category: "Flutter",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    image: "/blog-firebase-flutter.png",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    id: 3,
    title: "Building Scalable Mobile Apps: Architecture Patterns",
    excerpt:
      "Explore proven architecture patterns that help create maintainable and scalable mobile applications using Flutter and modern development practices.",
    category: "Architecture",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    image: "/blog-architecture-patterns.png",
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on mobile app development, Flutter, and the latest industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${post.color} p-6 relative`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10">
                  <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
                    {post.category}
                  </Badge>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=192&width=384&query=${encodeURIComponent(post.title)}`
                      }}
                    />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <Button className="w-full group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              View All Blog Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
