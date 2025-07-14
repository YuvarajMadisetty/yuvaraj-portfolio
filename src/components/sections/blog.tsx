import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PenTool, Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Getting Started with Data Analysis: A Beginner's Guide",
      excerpt: "Learn the fundamentals of data analysis, essential tools, and best practices to kickstart your journey in the field of data science.",
      date: "2024-12-01",
      readTime: "5 min read",
      category: "Data Analysis",
      tags: ["Beginner", "Data Science", "Python"],
      featured: true
    },
    {
      title: "SQL vs NoSQL: Choosing the Right Database for Your Project",
      excerpt: "A comprehensive comparison of SQL and NoSQL databases, helping you make informed decisions for your data projects.",
      date: "2024-11-15",
      readTime: "8 min read",
      category: "Database",
      tags: ["SQL", "Database", "Technology"]
    },
    {
      title: "Power BI Dashboard Design: Best Practices and Tips",
      excerpt: "Create stunning and effective Power BI dashboards with these proven design principles and practical tips.",
      date: "2024-11-02",
      readTime: "6 min read",
      category: "Visualization",
      tags: ["Power BI", "Dashboard", "Design"]
    }
  ];

  const upcomingTopics = [
    "Machine Learning for Beginners",
    "Excel to Python: Making the Transition",
    "Building Your First Data Pipeline",
    "Career Advice for Aspiring Data Analysts",
    "Data Visualization Best Practices"
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="portfolio-gradient bg-clip-text text-transparent">Blog</span> Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my journey in data analysis and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`portfolio-card border-none h-full flex flex-col ${post.featured ? 'ring-2 ring-primary ring-opacity-20' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge className="text-xs bg-gradient-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {post.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs portfolio-transition hover:bg-primary hover:text-primary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full portfolio-transition hover:bg-primary hover:text-primary-foreground group"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Topics */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="portfolio-card border-none">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <PenTool className="h-5 w-5 text-white" />
                </div>
                <span>Upcoming Topics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 portfolio-transition hover:bg-muted">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="portfolio-card border-none">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center portfolio-glow">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Subscribe to get notified about new blog posts, tutorials, and insights about data analysis and technology.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="portfolio-gradient hover:shadow-glow portfolio-bounce w-full"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Subscribe to Newsletter
              </Button>
              
              <div className="flex justify-center space-x-6 mt-6 text-sm text-muted-foreground">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">3</div>
                  <div>Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">5</div>
                  <div>Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">2024</div>
                  <div>Started</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};