import { Card, CardContent } from "@/components/ui/card";
import { Camera, Search, Wrench, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Post Your Problem",
      description: "Describe what needs fixing and upload photos. Takes less than 2 minutes.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Get Matched",
      description: "Our system instantly matches you with 2-3 nearby verified handymen.",
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "Choose & Schedule", 
      description: "Compare quotes, ratings, and ETAs. Pick your preferred handyman.",
      color: "text-success"
    },
    {
      icon: CheckCircle,
      title: "Get It Fixed",
      description: "Track arrival in real-time. Pay securely after the job is complete.",
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How HomeFix Now Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From problem to solution in under an hour. It's that simple.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="shadow-card hover:shadow-lg transition-all duration-200 h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="bg-muted/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 transform translate-y-2" />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Average time from request to handyman arrival: 47 minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;