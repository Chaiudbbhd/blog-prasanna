import { Code, LayoutDashboard, Database, Settings, TerminalSquare, Layers3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <TerminalSquare className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring Security", level: 85 },
        { name: "Hibernate/JPA", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "Microservices", level: 80 },
        { name: "Maven/Gradle", level: 85 },
        { name: "JUnit/Mockito", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <LayoutDashboard className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 84 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 82 },
        { name: "Bootstrap", level: 85 },
        { name: "Redux", level: 75 },
        { name: "ShadCN UI", level: 80 }
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Jenkins", level: 60 },
        { name: "CI/CD", level: 65 }
      ]
    }
  ];

  const techStack = [
    "Java", "Spring Boot", "Spring Security", "Hibernate", "REST APIs", "Microservices",
    "React.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap",
    "PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS", "Git", "Jenkins",
    "Maven", "Gradle", "JUnit", "Mockito", "CI/CD"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
