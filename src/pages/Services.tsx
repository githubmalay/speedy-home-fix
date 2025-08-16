import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Droplets, PaintBucket, Hammer, Settings, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Plumbing",
      description: "Leaky taps, blocked drains, toilet repairs",
      price: "From $45",
      features: ["Emergency repairs", "Pipe installations", "Leak detection", "Drain cleaning"]
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Light fixtures, outlets, switches, fans",
      price: "From $55",
      features: ["Light installations", "Outlet repairs", "Switch replacements", "Fan mounting"]
    },
    {
      icon: PaintBucket,
      title: "Painting",
      description: "Touch-ups, small rooms, furniture painting",
      price: "From $35",
      features: ["Wall touch-ups", "Furniture refinishing", "Small room painting", "Color matching"]
    },
    {
      icon: Hammer,
      title: "Carpentry",
      description: "Furniture assembly, shelf mounting, door repairs",
      price: "From $40",
      features: ["Furniture assembly", "Shelf installation", "Door adjustments", "Cabinet repairs"]
    },
    {
      icon: Settings,
      title: "Appliance Repair",
      description: "Small appliances, installations, troubleshooting",
      price: "From $50",
      features: ["Appliance diagnosis", "Minor repairs", "Installation help", "Maintenance tips"]
    },
    {
      icon: Wrench,
      title: "General Maintenance",
      description: "Home maintenance, odd jobs, quick fixes",
      price: "From $30",
      features: ["General repairs", "Maintenance tasks", "Quick fixes", "Home improvements"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From quick fixes to small installations, our verified handymen handle all your home repair needs. 
              Most jobs completed within 2 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="text-2xl font-bold text-secondary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Request Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Something Else?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't see your specific repair need listed? Our handymen handle a wide variety of tasks. 
              Just describe your problem and we'll match you with the right professional.
            </p>
            <Button size="lg" className="shadow-button">
              Post Custom Request
            </Button>
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">Same Day</div>
                <div className="text-muted-foreground">Most repairs completed within hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">Fixed Price</div>
                <div className="text-muted-foreground">No hidden fees or surprise charges</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">Guaranteed</div>
                <div className="text-muted-foreground">100% satisfaction guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;