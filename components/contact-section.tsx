import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Sanwal Khan - Best Mobile App Developer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have an idea for iOS or Android? I'm <strong>Sanwal Khan</strong>,{" "}
            <strong>Flutter developer</strong> and <strong>expert in mobile engineering</strong> at{" "}
            <strong>DeveloperTech</strong>. Let's connect to build your app and transform your vision into a
            high-performing mobile experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">khansanwal922@gmail.com</p>
                    <p className="text-xs text-muted-foreground">
                      Reach out directly for project inquiries & collaboration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Phone className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+92 3074494175</p>
                    <p className="text-xs text-muted-foreground">Available for calls & consultations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageCircle className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">Quick queries & support</p>
                    <p className="text-xs text-muted-foreground">
                      Chat with <strong>Flutter Developer Sanwal Khan</strong> instantly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Tell me about your project..." className="min-h-32" />
              <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
