import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, FileText, Calendar, MapPin, GraduationCap, Briefcase, Award, Code } from "lucide-react";

export const ResumeSection = () => {
  const resumeHighlights = [
    {
      category: "Education",
      icon: GraduationCap,
      items: [
        {
          title: "Bachelor of Technology - Computer Science Engineering",
          institution: "University Name",
          period: "2021 - 2025",
          details: "Relevant Coursework: Data Structures, Algorithms, Database Systems, Statistics"
        }
      ]
    },
    {
      category: "Experience",
      icon: Briefcase,
      items: [
        {
          title: "Developer Intern",
          institution: "Various Project",
          period: "Summer 2024",
          details: "Analyzed customer data, created dashboards, improved reporting efficiency by 10%"
        },
        {
          title: "Java Developer - Freelance",
          institution: "Various Projects",
          period: "2023 - Present",
          details: "Built android and web applications."
        }
      ]
    },
    {
      category: "Key Projects",
      icon: Code,
      items: [
        {
          title: " Portfollio Dashboard",
          institution: "Personal Project",
          period: "2025",
          details: "Java, Html - Comprehensive sales data visualization"
        },
        {
          title: "Carpolling",
          institution: "Academic Project",
          period: "2024-2025",
          details: "Java, Mysql, Html, Spring"
        }
      ]
    },
    {
      category: "Certifications",
      icon: Award,
      items: [
        {
          title: "Infosys Springboard",
          institution: "Online",
          period: "2023",
          details: "Database and SQL"
        },
        {
          title: "Great Learning",
          institution: "Online",
          period: "2023",
          details: "Java Programming"
        },
        {
            title: "Great Learning",
            institution: "Online",
            period: "2022",
            details: "My SQL Basics"
        }
      ]
    }
  ];

  const skills = [
    "Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Java", "JavaScript", 
    "Git", "Azure Databricks", "Statistical Analysis", "Data Visualization"
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="portfolio-gradient bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my education, experience, and technical skills.
          </p>
        </div>

        {/* Download Resume Card */}
        <Card className="portfolio-card border-none max-w-2xl mx-auto mb-16">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center portfolio-glow">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Download Resume</h3>
              <p className="text-muted-foreground">
                Get the complete PDF version of my resume with detailed information about my experience and projects.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="portfolio-gradient hover:shadow-glow portfolio-bounce"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="portfolio-card hover:bg-primary hover:text-primary-foreground portfolio-bounce"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview Online
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Last updated: December 2024 • PDF Format • 2 pages
            </p>
          </CardContent>
        </Card>

        {/* Resume Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resumeHighlights.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <Card key={sectionIndex} className="portfolio-card border-none">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span>{section.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {item.period}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{item.institution}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary */}
        <Card className="portfolio-card border-none">
          <CardHeader>
            <CardTitle className="text-center">Technical Skills Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm portfolio-card hover:bg-primary hover:text-primary-foreground portfolio-transition cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This resume showcases my journey from a computer science student to an aspiring data analyst. 
                It highlights my technical skills, relevant projects, and certifications that demonstrate my 
                capability to contribute effectively in data-driven roles.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};