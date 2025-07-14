import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

export const CertificatesSection = () => {
  const certificates = [
    {
      title: "Database and SQL",
      issuer: "Infosys Springboard",

      description: "Comprehensive training on database concepts, SQL fundamentals, and advanced database management techniques for real-world applications.",
      skills: ["SQL", "Database Design", "Data Manipulation", "Query Optimization", "RDBMS"],
      link: "#",
      verified: true,
      color: "bg-blue-500"
    },
    {
      title: "Java Programming",
      issuer: "Great Learning",

      description: "Complete Java programming course covering object-oriented programming concepts, core Java features, and application development.",
      skills: ["Java", "OOP", "Core Java", "Programming Fundamentals", "Application Development"],
      link: "#",
      verified: true,
      color: "bg-orange-500"
    },
    {
      title: "MySQL Basics",
      issuer: "Great Learning",

      description: "Foundational course on MySQL database management, covering basic SQL operations, database design, and data manipulation techniques.",
      skills: ["MySQL", "SQL Queries", "Database Management", "Data Operations"],
      link: "#",
      verified: true,
      color: "bg-green-500"
    },
    {
      title: "C Programming",
      issuer: "Brilliant Computer Education",

      description: "Fundamental C programming course covering programming logic, data structures, algorithms, and problem-solving techniques.",
      skills: ["C Programming", "Data Structures", "Algorithms", "Problem Solving", "Programming Logic"],
      link: "#",
      verified: true,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="portfolio-gradient bg-clip-text text-transparent">Certificates</span> & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in data analysis and related technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="portfolio-card border-none">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${cert.color} rounded-lg`}>
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                      </div>
                    </div>
                  </div>
                  {cert.verified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Issued: {cert.date}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs portfolio-transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="w-full portfolio-transition hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Journey */}
        <div className="mt-16">
          <Card className="portfolio-card border-none max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center portfolio-glow">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  These certifications represent my commitment to professional development and 
                  mastering the tools essential for modern data analysis.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">Skills Validated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <div className="text-sm text-muted-foreground">Latest Cert</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};