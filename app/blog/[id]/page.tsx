"use client"

import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    content: `
      <p>In the rapidly evolving world of mobile app development, choosing the right technology stack is crucial for success. As a mobile app developer with over 5 years of experience, I've worked extensively with both native development (Swift for iOS, Kotlin for Android) and cross-platform solutions, particularly Flutter. Today, I want to share why Flutter has become my preferred choice and why it's superior to native development in most scenarios.</p>

      <h2>1. Single Codebase, Multiple Platforms</h2>
      <p>The most compelling advantage of Flutter is its ability to create applications for both iOS and Android using a single codebase. This means:</p>
      <ul>
        <li><strong>Reduced Development Time:</strong> Instead of writing separate code for iOS and Android, developers can write once and deploy everywhere.</li>
        <li><strong>Consistent User Experience:</strong> The same UI components and business logic ensure consistency across platforms.</li>
        <li><strong>Easier Maintenance:</strong> Bug fixes and feature updates only need to be implemented once.</li>
      </ul>

      <h2>2. Performance That Rivals Native</h2>
      <p>One of the biggest misconceptions about Flutter is that it sacrifices performance for convenience. In reality, Flutter's performance is remarkably close to native applications:</p>
      <ul>
        <li><strong>Dart Compilation:</strong> Flutter compiles to native ARM code, eliminating the performance penalty of interpreted languages.</li>
        <li><strong>Skia Graphics Engine:</strong> Flutter uses Google's Skia graphics library, the same engine used in Chrome and Android.</li>
        <li><strong>60fps Animations:</strong> Flutter is designed to deliver smooth 60fps animations out of the box.</li>
      </ul>

      <h2>3. Cost-Effective Development</h2>
      <p>From a business perspective, Flutter offers significant cost advantages:</p>
      <ul>
        <li><strong>Reduced Team Size:</strong> One Flutter team can replace separate iOS and Android teams.</li>
        <li><strong>Faster Time-to-Market:</strong> Single codebase means faster development and deployment.</li>
        <li><strong>Lower Maintenance Costs:</strong> Maintaining one codebase is significantly cheaper than maintaining two.</li>
      </ul>

      <h2>4. Rich Ecosystem and Google Support</h2>
      <p>Flutter benefits from Google's backing and a rapidly growing ecosystem:</p>
      <ul>
        <li><strong>Comprehensive Widget Library:</strong> Flutter provides a rich set of customizable widgets.</li>
        <li><strong>Strong Community:</strong> Active community contributing packages and solutions.</li>
        <li><strong>Regular Updates:</strong> Google consistently releases updates with new features and improvements.</li>
      </ul>

      <h2>5. Developer Experience</h2>
      <p>Flutter offers an exceptional developer experience:</p>
      <ul>
        <li><strong>Hot Reload:</strong> See changes instantly without losing app state.</li>
        <li><strong>Excellent Tooling:</strong> Great IDE support with VS Code and Android Studio.</li>
        <li><strong>Comprehensive Documentation:</strong> Well-documented APIs and extensive learning resources.</li>
      </ul>

      <h2>When to Choose Native Development</h2>
      <p>While Flutter is superior in most cases, native development still has its place:</p>
      <ul>
        <li>Apps requiring cutting-edge platform-specific features</li>
        <li>Performance-critical applications like games</li>
        <li>Apps with complex platform-specific integrations</li>
      </ul>

      <h2>Conclusion</h2>
      <p>As someone who has built over 100 mobile applications, I can confidently say that Flutter represents the future of mobile app development. Its combination of performance, developer experience, and cost-effectiveness makes it the superior choice for most mobile app projects.</p>

      <p>The mobile development landscape is shifting towards cross-platform solutions, and Flutter is leading this transformation. For businesses looking to build high-quality mobile applications efficiently and cost-effectively, Flutter is the clear winner.</p>

      <p>If you're considering Flutter for your next mobile app project, I'd be happy to discuss how it can benefit your specific use case. Feel free to reach out via WhatsApp to explore how we can bring your mobile app vision to life using Flutter.</p>
    `,
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  const handleWhatsAppContact = () => {
    const message = `Hi Sanwal Khan! I read your blog post about "${post.title}" and I'm interested in discussing Flutter development for my project.`
    const whatsappUrl = `https://wa.me/923074494175?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Blog</span>
            </Link>
            <div className="flex items-center gap-2">
              <Image
                src="/images/company-logo.png"
                alt="DeveloperTech Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-primary">DeveloperTech</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${post.color} py-20 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl mb-8 text-white/90">{post.excerpt}</p>

            <div className="flex items-center justify-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90" onClick={handleWhatsAppContact}>
                Discuss Flutter Development
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-none prose prose-lg prose-gray dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/images/company-logo.png"
                      alt="Sanwal Khan"
                      width={60}
                      height={60}
                      className="rounded-full object-contain"
                    />
                    <div>
                      <h3 className="font-bold">Sanwal Khan</h3>
                      <p className="text-sm text-muted-foreground">Director at DeveloperTech</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mobile app developer with 5+ years of experience in Flutter and native development.
                  </p>
                  <Button className="w-full" onClick={handleWhatsAppContact}>
                    Contact for Projects
                  </Button>
                </CardContent>
              </Card>

              {/* Related Topics */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Related Topics</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Flutter Development
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Cross-platform
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Mobile Apps
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Native Development
                    </Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Performance
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Need a Flutter App?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to build your next mobile app with Flutter? Let's discuss your project requirements.
                  </p>
                  <Button className="w-full" onClick={handleWhatsAppContact}>
                    Start Your Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
