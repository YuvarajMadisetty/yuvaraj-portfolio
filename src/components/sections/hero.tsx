import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

export const HeroSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/YuvarajMadisetty",
      icon: Github,
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/yuvaraj-madisetty-359639254",
      icon: Linkedin,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Yuvaraj_says_hello/",
      icon: Code,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={profilePlaceholder}
              alt="Yuvaraj Madisetty"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary portfolio-glow portfolio-transition hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 portfolio-transition group-hover:opacity-30"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground portfolio-transition">

            <span className="block portfolio-gradient bg-clip-text text-transparent">
              Yuvaraj Madisetty
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Aspiring Developer | Engineering Student
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about solving real-world problems through data-driven insights.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  asChild
                  className="portfolio-card hover:bg-primary hover:text-primary-foreground portfolio-bounce"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="hidden sm:inline">{link.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="portfolio-gradient hover:shadow-glow portfolio-bounce"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="portfolio-card hover:bg-primary hover:text-primary-foreground portfolio-bounce"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary portfolio-transition"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};