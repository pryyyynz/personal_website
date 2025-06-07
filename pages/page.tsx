import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Image } from "@/components/ui/image"
import { PowerBIDashboard } from "@/components/ui/power-bi-dashboard"

interface Project {
  title: string
  description: string
  image?: string
  tags: string[]
  github?: string
  live?: string
  embed?: boolean
  isPowerBI?: boolean
}
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
  Brain,
  Database,
  Cpu,
  BarChartHorizontal,
  Network,
  Bot,
  LineChart,
  Cloud,
  Globe,
  SearchCode
} from "lucide-react"
import NextImage from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function PersonalWebsite() {
  const projects: Project[] = [
    {
      title: "Health Analysis Dashboard",
      description:
        "An interactive Power BI dashboard analyzing health data with custom visualizations and advanced analytics to identify key trends and insights.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Power BI", "Data Analysis", "Healthcare", "Data Visualization", "Dashboard", "Interactive"],
      live: "https://app.powerbi.com/view?r=eyJrIjoiOTQwYjRhZWUtNjkwNy00YjhkLWE2YmItODdkYmQ0MWQ2ZjUwIiwidCI6ImFmYjU4ODAyLWZmN2EtNGJiMS1hYjIxLTM2N2ZmMmVjZmM4YiIsImMiOjZ9",
      embed: true,
      isPowerBI: true,
    },
    {
      title: "Multi AI System",
      description:
        "Multi AI Assistant is your comprehensive Ghanaian AI Hub, designed to provide valuable information and tools tailored to the Ghanaian context.",
      image: "/images/gallery/multi.png",
      tags: ["FastAPI", "Groq", "Chatbot", "Next.js", "AI Assistant", "Ghana"],
      github: "https://github.com/pryyyynz/multi-ai-assistant",
      live: "https://services.multi-ai.software/",
    },
    {
      title: "Vis3D",
      description:
        "A web-based 3D visualization tool that leverages AI to create immersive experiences from images, enhancing understanding of spatial data.",
      image: "/images/gallery/vision.png",
      tags: ["MiDaS", "Three.js", "Tensorflow.js", "FastAPI", "OpenCV", "PyTorch"],
      github: "https://github.com/pryyyynz/Vis3D-ui",
      live: "https://vision.multi-ai.software/",
    },
    {
      title: "Developer Optimal Hours",
      description:
        "A data science project analyzing optimal working hours for developers to maximize productivity and maintain well-being.",
      image: "/images/gallery/developer.png",
      tags: ["Hugging Face", "Gradio", "XGBoost", "Work-Life Balance", "Jypyter Notebook"],
      live: "https://huggingface.co/spaces/pryyyynz/Optimal-Developer-Capacity",
      github: "https://deepnote.com/workspace/Jaalnet-cf3c7f6e-8714-48bc-b1c6-f3245786cf76/project/Optimal-Work-Capacity-1a595f94-7798-4e91-8650-d6a0f215bbaa/notebook/optimalcapacity-3fa2c3f9e74b42deb362513747358aaa",
    },
    {
      title: "Holy Query",
      description:
        "A Streamlit application for searching and querying religious texts from the Bible and Quran using natural language processing.",
      image: "/images/gallery/holyquery.png",
      tags: ["Streamlit", "LLM", "LangChain", "Religious Text Analysis", "Anthropic"],
      github: "https://github.com/pryyyynz/HolyQuery",
      live: "https://holyquery.streamlit.app/",
    },
  ]

  const photos = [
    "/images/gallery/008C4A3A-CB97-4575-981A-292E0174C95F_1_105_c.jpeg",
    "/images/gallery/E4387186-F3B4-44BB-8CD6-79A6F49B36C4_1_105_c.jpeg",
    "/images/gallery/F555F7D2-2BD3-4B88-A212-0CAD97821C12_1_105_c.jpeg",
  ]

  const skills = [
    { name: "Machine Learning", icon: Brain, description: "Computer Vision, NLP, Deep Learning, PyTorch, TensorFlow" },
    { name: "LLM Engineering", icon: Cpu, description: "GPT, BERT, Llama, Fine-tuning, Prompt Engineering" },
    { name: "Data Science", icon: BarChartHorizontal, description: "Data Analysis, Feature Engineering, Statistical Modeling" },
    { name: "MLOps & Deployment", icon: Network, description: "Docker, Kubernetes, CI/CD, Model Monitoring" },
    { name: "Python Development", icon: Code, description: "FastAPI, Flask, NumPy, Pandas, Scikit-Learn" },
    { name: "Big Data", icon: Database, description: "Spark, Hadoop, SQL, Data Pipelines, ETL" },
  ]

  const experiences = [
    {
      title: "AI Engineer",
      company: "Really Great Tech",
      period: " Oct 2024 - Present",
      description:
        "Learning and developing AI and LLM solutions, focusing on API development and integration with existing systems.",
    },
    {
      title: "Researcher",
      company: "Datamaker Ghana Limited",
      period: "Mar 2024 - Jun 2024",
      description:
        "Conducted research for the creation of a Large Language Model.",
    }
  ]

  const education = [
    {
      degree: "Bachelor Science in Computer Science",
      institution: "University of Ghana",
      year: "2024",
      description: "First Class Honours",
    },
  ]

  const certifications = [
    {
      name: "Data Visualisation in Power BI",
      issuer: "DataCamp",
      year: "2025",
    },
    {
      name: "Building Recommendation Engines in Python",
      issuer: "DataCamp",
      year: "2023",
    },
    {
      name: "Advanced Learning Algorithms",
      issuer: "Coursera",
      year: "2022",
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
      title: "AI Model Development",
      description: "Custom AI models built and fine-tuned for specific business needs using PyTorch, TensorFlow, and other frameworks.",
      icon: Brain,
    },
    {
      title: "LLM Implementation",
      description: "Integration of large language models (GPT, BERT, Llama) with proper prompt engineering for your applications.",
      icon: Bot,
    },
    {
      title: "Computer Vision Solutions",
      description: "Custom vision models for object detection, image recognition, and video analysis tailored to your needs.",
      icon: Cpu,
    },
    {
      title: "Data Science & Analytics",
      description: "Turn raw data into actionable insights through statistical modeling and advanced analytics techniques.",
      icon: LineChart,
    },
    {
      title: "MLOps & Deployment",
      description: "Streamlined AI deployment pipelines using Docker, Kubernetes, and CI/CD with proper model monitoring.",
      icon: Cloud,
    },
    {
      title: "NLP Solutions",
      description: "Text analysis, sentiment analysis, document processing, and conversational AI implementations.",
      icon: SearchCode,
    },
  ]

  const awards = [
    {
      title: "Vice Chancellor's Awards, Sadhu TL Vaswani Award for Science",
      organization: "University of Ghana",
      year: " April 2024",
      description: "Recognized for outstanding academic achievement and contributions to the university.",
    },
    {
      title: "UG Tullow Tertiary Scholarship Scheme",
      organization: "Tullow Oil Ghana",
      year: "2021 - 2024",
      description: "Merit-based scholarship awarded.",
    },
    {
      title: "Academic Excellence Award",
      organization: "Department of Computer Science",
      year: "August 2024",
      description: "Honored for exceptional academic performance in computer science studies.",
    },
    {
      title: "Best Computer Science Student",
      organization: "School of Physical and Mathematical Sciences",
      year: "December 2023",
      description: "Recognized as the top-performing student in the 2022/23 Academic Year.",
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
      name: "Watching Documentaries",
      icon: "🎬",
      description: "Enthusiast of science, history, and educational documentaries.",
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
      name: "Watching Football",
      icon: "⚽",
      description: "❤️ Barcelona.",
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
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Prince Dugboryele</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
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
            <Button variant="ghost" size="sm" asChild>
              <Link href="mailto:dugboryeleprince@gmail.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" className="mr-2" asChild>
              <Link href="mailto:dugboryeleprince@gmail.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="px-2"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </Button>
              <div id="mobile-menu" className="hidden absolute right-0 mt-2 w-48 bg-background/95 backdrop-blur rounded-md shadow-lg py-2 z-50">
                <Link href="#about" className="block px-4 py-2 text-sm hover:bg-muted">
                  About
                </Link>
                <Link href="#resume" className="block px-4 py-2 text-sm hover:bg-muted">
                  Resume
                </Link>
                <Link href="#projects" className="block px-4 py-2 text-sm hover:bg-muted">
                  Projects
                </Link>
                <Link href="#services" className="block px-4 py-2 text-sm hover:bg-muted">
                  Services
                </Link>
                <Link href="#gallery" className="block px-4 py-2 text-sm hover:bg-muted">
                  Gallery
                </Link>
                <Link href="#contact" className="block px-4 py-2 text-sm hover:bg-muted">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src="/images/profile/Prince.png" alt="Prince Dugboryele" />
            <AvatarFallback>PD</AvatarFallback>
          </Avatar>
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Prince Kojo Dugboryele
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
              I was living before I became a developer, you'll see life in my work.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Accra, Ghana</span>
            </div>
            <div className="hidden sm:flex">•</div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Available for work</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-3 sm:gap-4">
            <Button className="w-full sm:w-auto" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button className="w-full sm:w-auto" variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button className="w-full sm:w-auto" variant="secondary" asChild>
              <Link href="/Prince-Kojo-Dugboryele-Resume-.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/pryyyynz" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://www.linkedin.com/in/prince-dugboryele-990059215/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://x.com/pryyyynz" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-muted-foreground text-center">
            <p className="text-lg mx-auto">
              I'm an AI Engineer with a strong foundation in Computer Vision, Large Language Models (LLMs),
              and Data Science. I specialize in building end-to-end AI solutions—from data preprocessing and model
              development to deployment and monitoring.
            </p>
            <p className="text-lg mx-auto">
              With expertise in developing deep learning models and implementing machine learning pipelines,
              I'm passionate about creating AI systems that solve real-world problems. I'm particularly interested
              in the intersection of computer vision and natural language processing.
            </p>
            <p className="text-lg mx-auto">
              When I'm not coding, you'll find me watching documentaries,
              listening to music, hiking, or simply enjoying quiet moments to
              stay grounded.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <Link href="/Prince-Kojo-Dugboryele-Resume-.pdf" download>
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
      <section id="projects" className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Here are some of my recent projects that showcase my skills in web development, design, and
              problem-solving.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden flex flex-col ${project.isPowerBI ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {project.embed && project.isPowerBI ? (
                  <PowerBIDashboard
                    embedUrl={project.live}
                    title={project.title}
                    className="h-full"
                    aspectRatio="custom"
                  />
                ) : project.embed ? (
                  <div className="relative overflow-hidden">
                    <Button variant="outline" size="sm" className="absolute top-2 right-2 z-10" asChild>
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Full View
                      </Link>
                    </Button>
                    <div className="pb-[56.25%] relative h-0">
                      <iframe
                        title={project.title}
                        width="100%"
                        height="100%"
                        src={project.live}
                        frameBorder="0"
                        allowFullScreen={true}
                        className="rounded-t-lg absolute top-0 left-0 w-full h-full"
                        loading="lazy"
                        style={{ border: "none" }}
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video relative overflow-hidden h-[200px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.live && !project.embed && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.live} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
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
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">AI & ML Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert AI engineering and machine learning solutions to transform your business with cutting-edge technology.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center h-full flex flex-col">
                <CardHeader>
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
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
              <div key={index} className="relative overflow-hidden rounded-lg h-[500px] flex items-center justify-center bg-muted/20">
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={600}
                  className="max-w-full max-h-full transition-transform hover:scale-105 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic achievements and recognition received during my educational journey.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {awards.map((award, index) => (
              <Card key={index} className="h-full">
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
      <section id="contact" className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 text-sm sm:text-base md:text-lg">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, I'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 sm:flex sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <Button className="w-full" size="lg" asChild>
              <Link href="mailto:dugboryeleprince@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button className="w-full" variant="outline" size="lg" asChild>
              <Link href="https://www.linkedin.com/in/prince-dugboryele-990059215/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
            <Button className="w-full" variant="outline" size="lg" asChild>
              <Link href="https://x.com/pryyyynz" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-4 w-4">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
                Follow on X
              </Link>
            </Button>
          </div>

          <Separator className="my-6 md:my-8" />

          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <Link href="mailto:dugboryeleprince@gmail.com" className="hover:text-foreground transition-colors">
              dugboryeleprince@gmail.com
            </Link>
            <Link href="https://github.com/pryyyynz" target="_blank" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/prince-dugboryele-990059215/" target="_blank" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="https://x.com/pryyyynz" target="_blank" className="hover:text-foreground transition-colors">
              X
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex items-center justify-center gap-4 md:h-24">
          <div className="flex flex-col items-center gap-4 px-8">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              Built with ❤️ in Ghana © {new Date().getFullYear()} Prince Dugboryele.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
