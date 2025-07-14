import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, User, Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="portfolio-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey, education, and aspirations in data analysis and computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <Card className="portfolio-card border-none">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Computer Science Engineering student with a keen interest in data analysis. 
                  I love transforming raw data into meaningful insights that can drive decision-making and solve 
                  real-world problems. My analytical mindset and technical skills help me approach challenges 
                  with a data-driven perspective.
                </p>
              </CardContent>
            </Card>

            <Card className="portfolio-card border-none">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Bachelor of Technology - Computer Science Engineering</h4>
                    <p className="text-sm text-muted-foreground">Currently pursuing | Expected Graduation: 2025</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Focused on core computer science fundamentals while specializing in data structures &
                    algorithms, database management, and data analysis techniques. Actively participating 
                    in coding platforms and Developing projects.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card border-none">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Career Goals</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  My goal is to become a skilled Programmer who can bridge the gap between complex data
                  and actionable insights. I aspire to work in challenging environments where I
                  can apply machine learning, statistical analysis, and data visualization to drive 
                  strategic decisions and create meaningful impact.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Resume Section */}
          <div className="space-y-6">
            <Card className="portfolio-card border-none text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center portfolio-glow">
                    <Download className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Resume</h3>
                  <p className="text-muted-foreground">
                    Download my complete resume to learn more about my experience, 
                    projects, and technical skills.
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="portfolio-gradient hover:shadow-glow portfolio-bounce w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Last updated: December 2024
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="portfolio-card border-none text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">1+</div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </CardContent>
              </Card>
              <Card className="portfolio-card border-none text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="portfolio-card border-none text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
              <Card className="portfolio-card border-none text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};