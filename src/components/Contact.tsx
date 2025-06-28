import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Calendar, FileText } from 'lucide-react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_nnvdytb',         // Your service ID
        'template_615pf9q',         // 🔁 Replace with your template ID
        form.current,
        'trro9222gzdFyL57c'     // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities or collaborating on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <a href="mailto:chaituchaitinya2005@gmail.com" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">chaituchaitinya2005@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://www.linkedin.com/in/prasanna-kumar-g-3377a825a/" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/prasanna-kumar-g</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://github.com/Chaiudbbhd" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">github.com/Chaiudbbhd</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="/Lakshmi_Prasanna_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                View Resume (PDF)
              </Button>
            </a>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              <CardDescription>Fill the form and I’ll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input name="first_name" id="firstName" placeholder="Surname" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name="last_name" id="lastName" placeholder="Your Name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input name="user_email" type="email" id="email" placeholder="gmail@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input name="subject" id="subject" placeholder="Hiring / Freelance / Hello" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" id="message" placeholder="Your message..." rows={6} required />
                </div>

                <Button type="submit" className="w-full">Send Message</Button>
                {status && <p className="text-sm text-muted-foreground text-center mt-2">{status}</p>}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Lakshmi Prasanna Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
