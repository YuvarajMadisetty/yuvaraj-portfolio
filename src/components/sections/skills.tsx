import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, Settings, Users } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "SQL", level: 80, color: "bg-green-500" },
        { name: "Java", level: 75, color: "bg-orange-500" },
        { name: "JavaScript", level: 60, color: "bg-yellow-500" },
        { name: "HTML", level: 70, color: "bg-red-500" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: [

        { name: "Excel", level: 90, color: "bg-green-600" },
        { name: "SQL Server", level: 80, color: "bg-blue-600" },
        { name: "Power BI", level: 85, color: "bg-purple-500" },
        { name: "Azure Databricks", level: 65, color: "bg-cyan-500" },
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: BarChart3,
      skills: [
        { name: "Pandas", level: 80, color: "bg-indigo-500" },
        { name: "NumPy", level: 75, color: "bg-teal-500" },
        { name: "PySpark", level: 60, color: "bg-orange-600" },
      ]
    },
    {
      title: "Devops Tools",
      icon: Settings,
      skills: [
          { name: "IntelliJ", level: 70, color: "bg-red-600" },
        { name: "Git", level: 80, color: "bg-gray-600" },
        { name: "GitHub", level: 85, color: "bg-gray-700" },
        { name: "VS Code", level: 90, color: "bg-blue-400" },
        { name: "Android Studio", level: 65, color: "bg-green-400" },
      ]
    }
  ];

  const softSkills = [
    "Communication",
    "Teamwork", 
    "Problem-Solving",
    "Critical Thinking",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Analytical Thinking"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="portfolio-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="portfolio-card border-none">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <Card className="portfolio-card border-none">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span>Soft Skills</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm portfolio-card hover:bg-primary hover:text-primary-foreground portfolio-transition cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <Card className="portfolio-card border-none max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Skills Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                My technical skill set spans across data analysis, software development, and database management. 
                I'm proficient in Python for data manipulation and analysis, SQL for database operations, and 
                various visualization tools like Power BI. I continuously expand my knowledge in emerging 
                technologies like Azure Databricks and PySpark to stay current with industry trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};