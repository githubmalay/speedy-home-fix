import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Clock, Star, DollarSign, Wrench, Phone, MessageSquare } from "lucide-react";

const WorkerDashboard = () => {
  const nearbyJobs = [
    {
      id: 1,
      type: "Plumbing",
      description: "Kitchen tap leaking, needs quick fix",
      location: "Downtown Area",
      distance: "0.3 miles",
      urgency: "urgent",
      budget: "$75-100",
      timePosted: "2 min ago",
      customerRating: 4.8
    },
    {
      id: 2,
      type: "Furniture",
      description: "IKEA wardrobe assembly needed",
      location: "Midtown",
      distance: "0.7 miles", 
      urgency: "today",
      budget: "$60-80",
      timePosted: "8 min ago",
      customerRating: 4.9
    },
    {
      id: 3,
      type: "Electrical",
      description: "Ceiling fan not working, possible wiring issue",
      location: "Suburbs",
      distance: "1.2 miles",
      urgency: "flexible",
      budget: "$90-120",
      timePosted: "15 min ago",
      customerRating: 4.7
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "emergency": return "destructive";
      case "urgent": return "secondary";
      case "today": return "primary";
      default: return "muted";
    }
  };

  return (
    <section id="worker-dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Worker Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder-worker.jpg" />
                  <AvatarFallback className="text-xl bg-primary text-primary-foreground">JD</AvatarFallback>
                </Avatar>
                <CardTitle>John Davis</CardTitle>
                <CardDescription>Verified Handyman</CardDescription>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="w-4 h-4 text-secondary fill-current" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(127 reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">43</div>
                    <div className="text-sm text-muted-foreground">Jobs This Month</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">$2,340</div>
                    <div className="text-sm text-muted-foreground">Month Earnings</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium">Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Plumbing</Badge>
                    <Badge variant="outline">Electrical</Badge>
                    <Badge variant="outline">Furniture</Badge>
                    <Badge variant="outline">Painting</Badge>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Availability</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      Online
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Update Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Jobs Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Nearby Jobs</h2>
              <Badge variant="outline" className="bg-secondary/10 text-secondary">
                <MapPin className="w-3 h-3 mr-1" />
                3 jobs within 2 miles
              </Badge>
            </div>
            
            <div className="space-y-4">
              {nearbyJobs.map((job) => (
                <Card key={job.id} className="shadow-card hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Wrench className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{job.type}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {job.location} • {job.distance}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {job.timePosted}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge variant={getUrgencyColor(job.urgency) as any} className="mb-2">
                          {job.urgency}
                        </Badge>
                        <div className="text-lg font-bold text-foreground">{job.budget}</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-secondary fill-current" />
                        <span className="text-sm font-medium">{job.customerRating}</span>
                        <span className="text-sm text-muted-foreground">customer rating</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" className="shadow-button">
                          <Phone className="w-4 h-4 mr-1" />
                          Accept Job
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkerDashboard;