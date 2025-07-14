import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, BarChart3, Brain, ShoppingCart, TrendingUp } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Carpooling Android Application",
      description: "An Android application designed to connect commuters for shared rides, reducing travel costs and environmental impact. Features user authentication, ride matching, and real-time communication.",
      technologies: ["Java", "Android Studio", "Firebase", "Google Maps API"],
      github: "https://github.com/YuvarajMadisetty",
      demo: "#",
      icon: ShoppingCart,
      color: "bg-green-500"
    },
    {
      title: "Database Management System",
      description: "Comprehensive database project implementing various SQL operations, stored procedures, and data management techniques learned through coursework and certifications.",
      technologies: ["SQL", "MySQL", "Database Design"],
      github: "https://github.com/YuvarajMadisetty",
      demo: "#",
      icon: Database,
      color: "bg-blue-500"
    },
    {
      title: "Java Programming Projects",
      description: "Collection of Java programming projects demonstrating object-oriented programming concepts, data structures, and algorithm implementations for practical problem-solving.",
      technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
      github: "https://github.com/YuvarajMadisetty",
      demo: "#",
      icon: Brain,
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="portfolio-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating programming skills, database management, and Android development experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="portfolio-card border-none h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 ${project.color} rounded-lg`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs portfolio-transition hover:bg-primary hover:text-primary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="flex-1 portfolio-transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="flex-1 portfolio-transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            asChild
            className="portfolio-gradient hover:shadow-glow portfolio-bounce"
          >
            <a href="https://github.com/YuvarajMadisetty" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};