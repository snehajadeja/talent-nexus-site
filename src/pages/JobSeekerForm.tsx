import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const JobSeekerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    experience: "",
    skills: "",
    message: ""
  });

  const jobCategories = [
    "Hospitality",
    "Medical/Healthcare", 
    "Home Care",
    "Office Staff",
    "Project Handling",
    "Customer Service",
    "Food & Beverage",
    "Housekeeping",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend/email service
    console.log("Job seeker form data:", formData);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-sm">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden xs:inline">Back to Home</span>
              <span className="xs:hidden">Back</span>
            </Button>
          </Link>
          <img 
            src="/lovable-uploads/9aa767a6-cd22-4e17-9820-f078bcaa81a0.png" 
            alt="Grace Logo" 
            className="h-10 sm:h-12 w-auto"
          />
        </div>

        <Card className="bg-gradient-card border-primary/20 animate-fade-in">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Job Seeker Application
            </CardTitle>
            <p className="text-sm sm:text-base text-muted-foreground">
              Tell us about yourself and your career aspirations
            </p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Personal Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Job Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-1 years)</SelectItem>
                    <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                    <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior (5-10 years)</SelectItem>
                    <SelectItem value="expert">Expert (10+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Key Skills & Qualifications</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  placeholder="List your relevant skills, certifications, and qualifications..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your career goals, preferred work schedule, or any other relevant information..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full gap-2 text-sm sm:text-base py-3 sm:py-4">
                <Send className="h-4 w-4" />
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobSeekerForm;