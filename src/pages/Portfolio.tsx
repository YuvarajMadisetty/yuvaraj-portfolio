import { useState, useEffect } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ResumeSection } from '@/components/sections/resume';
import { CertificatesSection } from '@/components/sections/certificates';
import { BlogSection } from '@/components/sections/blog';
import { ContactSection } from '@/components/sections/contact';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'certificates', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Content Sections with spacing */}
      <main className="pt-24"> {/* Add padding-top to clear space from fixed nav */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <CertificatesSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/YuvarajMadisetty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary portfolio-transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yuvaraj-madisetty-359639254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary portfolio-transition"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/Yuvaraj_says_hello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary portfolio-transition"
              >
                LeetCode
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Yuvaraj Madisetty. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-xs text-muted-foreground">
              Passionate about data analysis and solving real-world problems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
