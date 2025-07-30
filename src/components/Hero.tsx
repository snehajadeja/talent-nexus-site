import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Building, Briefcase } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-center">
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/9aa767a6-cd22-4e17-9820-f078bcaa81a0.png" 
            alt="Grace Hospitality Logo" 
            className="h-16 w-auto animate-glow-pulse"
          />
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Find Your Perfect
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Career Match
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Connecting talented professionals with exceptional opportunities in hospitality, healthcare, and beyond
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-in">
            <div className="group">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/job-seeker")}
                className="w-full h-32 flex-col gap-4 text-lg"
              >
                <Users className="h-8 w-8" />
                <span>I'm a Job Seeker</span>
              </Button>
              <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Find your dream job
              </p>
            </div>

            <div className="group">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/recruiter")}
                className="w-full h-32 flex-col gap-4 text-lg"
              >
                <Building className="h-8 w-8" />
                <span>I'm a Recruiter</span>
              </Button>
              <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Hire top talent
              </p>
            </div>

            <div className="group">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/departments")}
                className="w-full h-32 flex-col gap-4 text-lg"
              >
                <Briefcase className="h-8 w-8" />
                <span>View Departments</span>
              </Button>
              <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore job categories
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center">
        <p className="text-muted-foreground">
          © 2024 Grace Hospitality & Manpower Supply. Connecting careers, building futures.
        </p>
      </footer>
    </div>
  );
};

export default Hero;