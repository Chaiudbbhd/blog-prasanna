// src/components/Hero.tsx
import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sun, Moon, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-16 dark:from-background dark:to-muted/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-4xl font-bold dark:text-black dark:from-primary/80 dark:to-primary/60">
              LPK
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Lakshmi Prasanna Kumar
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Java Developer | React Enthusiast | Tech Blogger
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with Java Spring Boot and React. I love sharing
            knowledge through technical blogs and contributing to open-source projects. Currently exploring AI/ML
            integration in web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
  <a
    href="/Lakshmi_Prasanna_Kumar_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <FileDown size={20} />
    Resume
  </a>
</Button>

            <Button
              variant="outline"
              size="lg"
              onClick={toggleTheme}
              className="transition-all duration-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
          </div>

          <div className="flex gap-6 justify-center mb-12">
            <motion.a
              href="https://github.com/Chaiudbbhd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform"
            >
              <Github size={28} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/prasanna-kumar-g-3377a825a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform"
            >
              <Linkedin size={28} />
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&to=chaituchaitinya2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform"
            >
              <Mail size={28} />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">20+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
              <p className="text-muted-foreground">Blog Articles</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;