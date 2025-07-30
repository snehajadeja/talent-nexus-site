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

const RecruiterForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    jobTitle: "",
    category: "",
    location: "",
    salaryRange: "",
    jobType: "",
    requirements: "",
    description: ""
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

  const jobTypes = [
    "Full-time",
    "Part-time", 
    "Contract",
    "Temporary",
    "Remote",
    "Hybrid"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend/email service
    console.log("Recruiter form data:", formData);
    toast({
      title: "Job Posted Successfully!",
      description: "Your job posting has been submitted for review.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
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

        <Card className="bg-gradient-card border-primary/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Post a Job Opening
            </CardTitle>
            <p className="text-muted-foreground">
              Find the perfect candidates for your organization
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    required
                    placeholder="Your company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                    required
                    placeholder="HR contact name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="hr@company.com"
                  />
                </div>
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
              </div>

              {/* Job Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    required
                    placeholder="e.g. Registered Nurse"
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

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    required
                    placeholder="City, State"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type *</Label>
                  <Select value={formData.jobType} onValueChange={(value) => handleInputChange("jobType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salaryRange">Salary Range</Label>
                <Input
                  id="salaryRange"
                  value={formData.salaryRange}
                  onChange={(e) => handleInputChange("salaryRange", e.target.value)}
                  placeholder="e.g. $45,000 - $60,000 annually"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements & Qualifications *</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => handleInputChange("requirements", e.target.value)}
                  required
                  placeholder="List required education, experience, certifications, skills..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                  placeholder="Describe the role, responsibilities, and what makes this opportunity great..."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Post Job Opening
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecruiterForm;