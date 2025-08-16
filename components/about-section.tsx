import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Firebase",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "Git",
  "Agile",
  "UI/UX Design",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate mobile app developer with over 5 years of experience creating innovative solutions for
              iOS and Android platforms. My expertise spans across native and cross-platform development, with a strong
              focus on user experience and performance optimization.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              I believe in writing clean, maintainable code and staying up-to-date with the latest mobile development
              trends and technologies. My goal is to transform complex ideas into simple, elegant mobile experiences
              that users love.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Mobile-First Approach</h3>
                    <p className="text-sm text-muted-foreground">Designing for mobile from the ground up</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Performance Optimization</h3>
                    <p className="text-sm text-muted-foreground">Building fast, efficient applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">🎨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">User Experience Focus</h3>
                    <p className="text-sm text-muted-foreground">Creating intuitive, delightful interfaces</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
