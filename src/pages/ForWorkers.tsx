import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Users, Star, Shield, Smartphone } from "lucide-react";

const ForWorkers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Average $35-75/hour",
      details: "Higher rates than traditional job platforms with flexible scheduling"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you want",
      details: "Choose your own schedule and accept jobs that fit your availability"
    },
    {
      icon: Users,
      title: "Steady Work",
      description: "Regular customer base",
      details: "Build relationships with repeat customers in your local area"
    },
    {
      icon: Star,
      title: "Build Reputation",
      description: "Ratings & reviews",
      details: "Showcase your skills and build trust with verified customer feedback"
    }
  ];

  const requirements = [
    "Valid ID and background check",
    "Basic tools and transportation",
    "Smartphone with GPS",
    "2+ years of handyman experience",
    "Insurance coverage (we can help)",
    "Professional attitude"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Apply Online",
      description: "Submit your application with work samples and references"
    },
    {
      step: "2",
      title: "Get Verified",
      description: "Complete background check and skills assessment"
    },
    {
      step: "3",
      title: "Start Earning",
      description: "Receive job notifications and start helping local customers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join Our <span className="bg-gradient-hero bg-clip-text text-transparent">Worker Network</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Turn your handyman skills into a thriving business. Connect with customers who need your expertise 
              and earn more with flexible scheduling.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 shadow-button">
              Apply to Join Network
            </Button>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <div className="text-lg font-bold text-secondary mb-2">{benefit.description}</div>
                    <p className="text-sm text-muted-foreground">{benefit.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Earnings Showcase */}
          <div className="bg-gradient-to-r from-success/5 to-secondary/5 rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">$2,850</div>
                <div className="text-muted-foreground">Average monthly earnings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">4.3</div>
                <div className="text-muted-foreground">Jobs per day average</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">92%</div>
                <div className="text-muted-foreground">Worker satisfaction rate</div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="p-8">
                    <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Requirements</h2>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <Shield className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="w-6 h-6 mr-2 text-primary" />
                  Worker App Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Real-time job notifications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">GPS navigation to customers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Instant payment processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Customer chat support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Earnings tracking</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of skilled professionals earning more with flexible schedules. 
              Apply now and start receiving job requests in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-button">
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForWorkers;