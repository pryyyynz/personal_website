import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Palette,
  Zap,
  Users,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Mic,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function PersonalWebsite() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Vue.js", "D3.js", "OpenWeather API", "Tailwind"],
      github: "#",
      live: "#",
    },
  ]

  const photos = [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ]

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, Vue.js, TypeScript" },
    { name: "Backend Development", icon: Zap, description: "Node.js, Python, PostgreSQL, MongoDB" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe Creative Suite, Prototyping" },
    { name: "Team Leadership", icon: Users, description: "Project Management, Mentoring, Agile" },
  ]

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading the frontend development team in creating responsive, accessible web applications. Implemented design systems that improved development efficiency by 40%.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Agency",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites and web applications. Collaborated with designers to implement pixel-perfect interfaces.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description:
        "Assisted in the development of web applications. Learned and implemented best practices in web development.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2016",
      description: "Specialized in Human-Computer Interaction and Web Technologies.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      year: "2014",
      description: "Graduated with honors. Capstone project: Real-time Collaboration Platform.",
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      year: "2021",
    },
    {
      name: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      year: "2020",
    },
  ]

  const testimonials = [
    {
      text: "Alex transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. The attention to detail and technical expertise were impressive.",
      author: "Sarah Johnson",
      position: "CEO, Brand Elevate",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "Working with Alex was a pleasure. They understood our requirements quickly and delivered a solution that exceeded our expectations. Highly recommended for any web development project.",
      author: "Michael Chen",
      position: "Product Manager, TechStart",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "Alex's technical skills and creativity make them stand out. They not only built a beautiful website but also optimized it for performance and SEO, which significantly improved our online presence.",
      author: "Emma Rodriguez",
      position: "Marketing Director, GrowthHub",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive engagement.",
      icon: Palette,
    },
    {
      title: "Technical Consultation",
      description: "Expert advice on technology stack, architecture, and development strategies.",
      icon: Briefcase,
    },
  ]

  const awards = [
    {
      title: "Best Web Application",
      organization: "Tech Innovation Awards",
      year: "2023",
      description: "Recognized for the development of an innovative healthcare management platform.",
    },
    {
      title: "Outstanding Developer",
      organization: "Developer Community Excellence",
      year: "2022",
      description: "Awarded for contributions to open-source projects and community education.",
    },
  ]

  const speakingEngagements = [
    {
      title: "Modern Frontend Architecture",
      event: "Web Dev Conference",
      date: "October 2023",
      description:
        "A talk on building scalable and maintainable frontend architectures with modern JavaScript frameworks.",
    },
    {
      title: "Accessibility First Development",
      event: "Inclusive Tech Summit",
      date: "May 2023",
      description: "Workshop on implementing web accessibility best practices from the start of development.",
    },
  ]

  const interests = [
    {
      name: "Photography",
      icon: "📷",
      description: "Landscape and street photography enthusiast.",
    },
    {
      name: "Hiking",
      icon: "🥾",
      description: "Exploring nature trails and mountains.",
    },
    {
      name: "Reading",
      icon: "📚",
      description: "Science fiction and technical books.",
    },
    {
      name: "Chess",
      icon: "♟️",
      description: "Casual player and puzzle solver.",
    },
  ]

  const blogPosts = [
    {
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "Exploring upcoming trends in web development including AI integration, WebAssembly advancements, and more.",
      date: "May 15, 2024",
      image: "/placeholder.svg?height=200&width=350",
      url: "#",
    },
    {
      title: "Optimizing React Applications for Performance",
      excerpt:
        "Practical techniques to improve the performance of your React applications, from code splitting to memoization.",
      date: "April 2, 2024",
      image: "/placeholder.svg?height=200&width=350",
      url: "#",
    },
    {
      title: "Accessibility Is Not Optional: A Guide to Inclusive Web Design",
      excerpt: "Why accessibility should be a priority in every web project and how to implement it effectively.",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=200&width=350",
      url: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Alex Johnson</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#resume" className="transition-colors hover:text-foreground/80">
                Resume
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#services" className="transition-colors hover:text-foreground/80">
                Services
              </Link>
              <Link href="#gallery" className="transition-colors hover:text-foreground/80">
                Gallery
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:alex@example.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Alex Johnson" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Alex Johnson
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Full-stack developer and designer passionate about creating beautiful, functional web experiences. I love
              turning ideas into reality through code and design.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Available for work</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/resume.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              I'm a passionate full-stack developer with over 5 years of experience creating digital experiences that
              make a difference. My journey started with a curiosity about how things work on the web, and it has
              evolved into a career dedicated to crafting beautiful, functional applications.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              capturing moments through photography. I believe in the power of technology to solve real-world problems
              and create meaningful connections.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <skill.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Resume & Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey, education, and certifications that have shaped my career in technology.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  Download Full Resume (PDF)
                </Link>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-6">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20 pb-8 last:pb-0">
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.period}</span>
                      </div>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20 pb-8 last:pb-0">
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.year}</span>
                      </div>
                      <p>{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="certifications" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>
                        {cert.issuer} • {cert.year}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, design, and
              problem-solving.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.live} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Services I Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional services tailored to meet your digital needs and help your business grow online.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Photo Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of moments captured through my lens. Photography is my way of seeing the world from different
              perspectives.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition received for outstanding work and contributions to the tech community.
            </p>
          </div>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{award.title}</CardTitle>
                      <CardDescription>
                        {award.organization} • {award.year}
                      </CardDescription>
                    </div>
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="container px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Beyond Coding</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When I'm not in front of a computer, here's what keeps me inspired and energized.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{interest.icon}</div>
                  <CardTitle>{interest.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, I'd love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <Link href="mailto:alex@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <Link href="mailto:alex@example.com" className="hover:text-foreground transition-colors">
              alex@example.com
            </Link>
            <Link href="https://github.com" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © {new Date().getFullYear()} Alex Johnson.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
