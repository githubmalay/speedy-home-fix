import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Shield, value: "2,500+", label: "Verified Workers" },
    { icon: Clock, value: "47min", label: "Avg Response Time" },
    { icon: Award, value: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">HomeFix Now</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing home repairs by connecting homeowners with skilled local handymen 
              who can arrive within an hour. No more waiting days for simple fixes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                HomeFix Now was born from a simple frustration: why does it take days to fix a leaky tap? 
                We realized that skilled handymen were everywhere, but there was no efficient way to connect 
                them with people who needed quick repairs.
              </p>
              <p className="text-muted-foreground mb-4">
                Our platform bridges this gap by creating an instant connection between homeowners and 
                verified local repair professionals. We've streamlined the entire process from problem 
                identification to job completion.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve thousands of customers across the country, with an average 
                response time of under an hour and a 99% customer satisfaction rate.
              </p>
            </div>
            <div>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Mission</h3>
                  <p className="text-muted-foreground text-center text-lg">
                    "To make home repairs as easy as ordering a ride. Every homeowner deserves quick, 
                    reliable access to skilled repair professionals when they need them most."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose HomeFix Now?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">100% Verified</h3>
                  <p className="text-muted-foreground">
                    Every handyman is background-checked, insured, and rated by real customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Most repairs are completed within 2 hours of your initial request.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quality Guaranteed</h3>
                  <p className="text-muted-foreground">
                    All work comes with our satisfaction guarantee and follow-up support.
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

export default About;