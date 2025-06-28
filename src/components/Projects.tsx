import { Github, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Microservices Platform",
      description: "A scalable e-commerce platform built with Spring Boot microservices architecture, featuring user management, product catalog, order processing, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Redis", "Kafka"],
      githubUrl: "https://github.com/Chaiudbbhd/microservice-ecommerce.git",
      liveUrl: "https://cymbal-shops.retail.cymbal.dev/",
      status: "Completed",
      featured: true,
      date: "2024"
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "A full-stack chat application with WebSocket integration, featuring real-time messaging, file sharing, and user presence indicators.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624",
      techStack: ["React", "Spring Boot", "WebSocket", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Chaiudbbhd/chat-app.git",
      liveUrl: "https://chat-app1-vert.vercel.app/login",
      status: "In Progress",
      featured: false,
      date: "2025"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A comprehensive project management tool with team collaboration features, task tracking, and reporting dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      techStack: ["React", "Spring Boot", "PostgreSQL", "Spring Security"],
      githubUrl: "https://github.com/Chaiudbbhd/task-manager",
      liveUrl: "https://lpk-task.netlify.app/",
      status: "Completed",
      featured: true,
      date: "2024"
    },
    {
      id: 4,
      title: "Disease Prediction AI Model",
      description: "Machine learning model for disease prediction based on symptoms, integrated with a React frontend for easy user interaction.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      techStack: ["Python", "React", "TensorFlow", "Flask", "PostgreSQL"],
      githubUrl: "https://github.com/Chaiudbbhd/prediction-ai-ml.git",
      liveUrl: "https://github.com/Chaiudbbhd/prediction-ai-ml.git",
      status: "Completed",
      featured: false,
      date: "2024"
    },
    {
      id: 5,
      title: "File Sharing P2P Network",
      description: "Peer-to-peer file sharing application using WebRTC for direct browser-to-browser communication without server storage.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      techStack: ["React", "WebRTC", "Node.js", "Socket.io"],
      githubUrl: "https://github.com/Chaiudbbhd/Peer2Peer.git",
      liveUrl: "https://jmcker.github.io/Peer-to-Peer-Cue-System/",
      status: "Completed",
      featured: false,
      date: "2023"
    },
    {
      id: 6,
      title: "Blog CMS Platform",
      description: "Content management system for blogs with markdown support, user authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      techStack: ["React", "Spring Boot", "MySQL", "JWT", "Cloudinary"],
      githubUrl: "https://github.com/Voice-of-Java-Dev/frontend.git",
      liveUrl: "https://voices-of-java-dev.onrender.com/",
      status: "Completed",
      featured: true,
      date: "2025"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating full-stack development skills and innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar size={16} />
                      {project.date}
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full">
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="mb-4 text-sm">
                    {project.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full text-xs">
                          <Github size={14} className="mr-1" />
                          Code
                        </Button>
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full text-xs">
                          Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
