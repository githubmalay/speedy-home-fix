import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin, Clock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    issue: "",
    description: "",
    urgency: "",
    location: "",
    contact: "",
    photos: [] as File[]
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We're matching you with nearby handymen. You'll hear back within 5 minutes.",
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newPhotos].slice(0, 3) // Max 3 photos
      }));
    }
  };

  return (
    <section id="request-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Request a Fix</CardTitle>
            <CardDescription className="text-lg">
              Tell us what needs fixing and we'll connect you with the right handyman
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="issue">What needs fixing?</Label>
                <Select value={formData.issue} onValueChange={(value) => setFormData(prev => ({...prev, issue: value}))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plumbing">🔧 Plumbing (leaks, clogs, taps)</SelectItem>
                    <SelectItem value="electrical">⚡ Electrical (switches, outlets, lights)</SelectItem>
                    <SelectItem value="furniture">🪑 Furniture (assembly, repair)</SelectItem>
                    <SelectItem value="appliances">📱 Appliances (fans, AC, small repairs)</SelectItem>
                    <SelectItem value="walls">🏠 Walls & Paint (holes, touch-ups)</SelectItem>
                    <SelectItem value="other">🔨 Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Describe the problem</Label>
                <Textarea 
                  id="description"
                  placeholder="e.g., Kitchen tap is dripping constantly, tried tightening but still leaks..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="urgency">How urgent?</Label>
                  <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({...prev, urgency: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">🚨 Emergency (ASAP)</SelectItem>
                      <SelectItem value="urgent">⏰ Urgent (within 1 hour)</SelectItem>
                      <SelectItem value="today">📅 Today</SelectItem>
                      <SelectItem value="flexible">🕐 Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Your location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="location"
                      placeholder="Enter your address"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact number</Label>
                <Input 
                  id="contact"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.contact}
                  onChange={(e) => setFormData(prev => ({...prev, contact: e.target.value}))}
                />
              </div>

              <div className="space-y-2">
                <Label>Photos (optional but helpful)</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground mb-2">Upload up to 3 photos</p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => document.getElementById('photo-upload')?.click()}
                  >
                    Choose Photos
                  </Button>
                  {formData.photos.length > 0 && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      {formData.photos.length} photo(s) selected
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-1">What happens next?</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• We'll match you with 2-3 nearby verified handymen</li>
                    <li>• You'll receive quotes and ETAs within 5 minutes</li>
                    <li>• Choose your preferred worker and confirm</li>
                    <li>• Track their arrival in real-time</li>
                  </ul>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6 shadow-button">
                <Clock className="w-5 h-5 mr-2" />
                Find My Handyman Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequestForm;