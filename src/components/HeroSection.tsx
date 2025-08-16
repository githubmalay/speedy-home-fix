import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Shield, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-handyman.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Fixed within 1 Hour
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Home Problems?
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Fixed Fast.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with verified local handymen who can arrive within an hour. 
              From leaky taps to broken chairs - get it fixed today, not next week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-6 shadow-button hover:shadow-lg transition-all">
                Request Repair Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Become a Worker
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Verified Workers</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">&lt;1hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="shadow-card overflow-hidden">
              <img 
                src={heroImage} 
                alt="Professional handyman at work" 
                className="w-full h-[500px] object-cover"
              />
            </Card>
            
            {/* Floating cards */}
            <Card className="absolute -bottom-4 -left-4 p-4 bg-gradient-card shadow-card">
              <div className="flex items-center space-x-3">
                <div className="bg-success/10 p-2 rounded-full">
                  <MapPin className="w-4 h-4 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-sm">John M.</div>
                  <div className="text-xs text-muted-foreground">2 min away</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -top-4 -right-4 p-4 bg-gradient-card shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">47</div>
                <div className="text-xs text-muted-foreground">Jobs Today</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;