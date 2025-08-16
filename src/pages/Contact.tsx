import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "24/7 Customer Support"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "support@homefixnow.com",
      subtitle: "We respond within 1 hour"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Main Street, Suite 100",
      subtitle: "Downtown Business District"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 6AM-10PM",
      subtitle: "Sat-Sun: 8AM-8PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="bg-gradient-hero bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? Need help? Our support team is here 24/7 to assist you with any 
              issues or inquiries about our handyman services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 1 hour.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your question or issue..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full shadow-button">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're a customer needing repairs or a handyman looking to join our network, 
                  we're here to help. Choose the best way to reach us.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-lg text-foreground font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-card bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">Emergency Repairs?</h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent repair requests, use our app for fastest response
                  </p>
                  <Button variant="outline" className="w-full">
                    Open Emergency Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">How quickly can I get help?</h3>
                  <p className="text-muted-foreground">
                    Most handymen can arrive within 1 hour of your request, with average response time of 47 minutes.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Are your workers insured?</h3>
                  <p className="text-muted-foreground">
                    Yes, all our handymen are fully insured and background-checked for your peace of mind.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What if I'm not satisfied?</h3>
                  <p className="text-muted-foreground">
                    We offer a 100% satisfaction guarantee. If you're not happy, we'll make it right.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">How do I pay?</h3>
                  <p className="text-muted-foreground">
                    Payment is secure and handled through the app after job completion. We accept all major cards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;