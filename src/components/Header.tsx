import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <Wrench className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">HomeFix Now</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/for-workers" className="text-muted-foreground hover:text-foreground transition-colors">
            For Workers
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Worker Login
          </Button>
          <Button variant="default" size="sm" className="shadow-button">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;