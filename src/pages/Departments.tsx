import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Heart, Home, Building, Clipboard, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Departments = () => {
  const departments = [
    {
      title: "Hospitality",
      icon: Building,
      description: "Hotels, restaurants, event management, and tourism services",
      roles: ["Hotel Managers", "Restaurant Staff", "Event Coordinators", "Concierge", "Housekeeping"]
    },
    {
      title: "Medical/Healthcare",
      icon: Heart,
      description: "Healthcare professionals and medical support staff",
      roles: ["Registered Nurses", "Medical Assistants", "Lab Technicians", "Therapists", "Healthcare Aides"]
    },
    {
      title: "Home Care",
      icon: Home,
      description: "In-home care and support services for families",
      roles: ["Caregivers", "Home Health Aides", "Companions", "Personal Care Assistants", "Nurses"]
    },
    {
      title: "Office Staff",
      icon: Users,
      description: "Administrative and professional office positions",
      roles: ["Administrative Assistants", "Data Entry", "Receptionists", "Office Managers", "Coordinators"]
    },
    {
      title: "Project Handling",
      icon: Clipboard,
      description: "Project management and coordination roles",
      roles: ["Project Managers", "Coordinators", "Supervisors", "Team Leaders", "Quality Control"]
    },
    {
      title: "Customer Service",
      icon: Phone,
      description: "Customer support and service representatives",
      roles: ["Call Center Agents", "Customer Support", "Help Desk", "Client Relations", "Technical Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <img 
            src="/lovable-uploads/9aa767a6-cd22-4e17-9820-f078bcaa81a0.png" 
            alt="Grace Logo" 
            className="h-12 w-auto"
          />
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Departments
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of job categories and find the perfect career path for your skills and interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
          {departments.map((dept, index) => (
            <Card 
              key={dept.title} 
              className="bg-gradient-card border-primary/20 hover:shadow-primary transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <dept.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {dept.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">
                  {dept.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Common Roles:</h4>
                  <ul className="space-y-1">
                    {dept.roles.map((role) => (
                      <li key={role} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/job-seeker">
              <Button variant="gradient" size="lg" className="gap-2">
                <Users className="h-4 w-4" />
                Apply for Jobs
              </Button>
            </Link>
            <Link to="/recruiter">
              <Button variant="hero" size="lg" className="gap-2">
                <Building className="h-4 w-4" />
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;