"use client"
import type React from "react"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Server,
  Globe,
  Gamepad2,
  Music,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage(): React.ReactNode {
  // Function to handle smooth scrolling for anchor links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <a href="#" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="inline-block font-bold">Dylan Brose</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="px-4 py-2 text-sm font-medium hover:text-primary"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="px-4 py-2 text-sm font-medium hover:text-primary"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
                className="px-4 py-2 text-sm font-medium hover:text-primary"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="px-4 py-2 text-sm font-medium hover:text-primary"
              >
                Projects
              </a>
              <a
                href="#interests"
                onClick={(e) => scrollToSection(e, "interests")}
                className="px-4 py-2 text-sm font-medium hover:text-primary"
              >
                Interests
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="px-4 py-2 text-sm font-medium hover:text-primary"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Dylan Brose</h1>
                  <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground">Software Engineer</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Building robust applications with modern technologies. Passionate about game engines, robotics, and
                    creating efficient software solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                    <Button>
                      Get in touch
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                    <Button variant="outline">View my work</Button>
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <a href="https://github.com/xXDMOGXx" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                  <a href="mailto:dylanbrose1@gmail.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="md:w-1/4 flex-shrink-0">
                <img
                  src="https://via.placeholder.com/300"
                  width={300}
                  height={300}
                  alt="Profile"
                  className="rounded-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a Software Engineering student at the University of Texas at Dallas with a passion for building
                innovative solutions to complex problems. My journey in software development spans from game engines to
                robotics, where I've developed a strong foundation in both theoretical concepts and practical
                applications.
              </p>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Based in Richardson, TX, I'm currently pursuing my Bachelor of Science in Software Engineering, expected
                to graduate in May 2027. I approach each project with a focus on clean architecture, maintainable code,
                and exceptional user experience.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Technical Skills</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                My expertise spans across various technologies and domains in software engineering.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-3 mt-8">
              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <Code className="h-8 w-8 mb-3" />
                <CardTitle className="text-xl">Languages</CardTitle>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>Java</Badge>
                    <Badge>Python</Badge>
                    <Badge>C/C++</Badge>
                    <Badge>SQL (Postgres)</Badge>
                    <Badge>JavaScript/TypeScript</Badge>
                    <Badge>HTML/CSS</Badge>
                    <Badge>Lua</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <Server className="h-8 w-8 mb-3" />
                <CardTitle className="text-xl">Frameworks</CardTitle>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>PlatformIO</Badge>
                    <Badge>Django</Badge>
                    <Badge>OpenGL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Arduino</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <Globe className="h-8 w-8 mb-3" />
                <CardTitle className="text-xl">Developer Tools</CardTitle>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>VS Code</Badge>
                    <Badge>Visual Studio</Badge>
                    <Badge>IntelliJ</Badge>
                    <Badge>Android Studio</Badge>
                    <Badge>SolidWorks</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Experience & Education</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                My professional journey and academic background.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Software Project Manager</CardTitle>
                    <Badge>August 2024 - Present</Badge>
                  </div>
                  <CardDescription>Comet Robotics, Richardson, TX</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Coordinated a team of 15+ members to collaboratively develop a full-stack software infrastructure
                      that communicated with 30+ wireless embedded systems using C++ in the Arduino framework
                    </li>
                    <li>
                      Implemented a Node.JS backend that served a Vite+React webpage capable of supporting over 50
                      clients to participate in a real-time game event
                    </li>
                    <li>
                      Laid the project foundation, designed the tech stack, and delegated tasks effectively which led to
                      an increase of productivity by 400% over the course of 18 months
                    </li>
                    <li>
                      Launched an introductory course to drastically decrease onboarding time of new members and
                      increase documentation initiatives
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Software Developer</CardTitle>
                    <Badge>August 2023 - August 2024</Badge>
                  </div>
                  <CardDescription>Comet Robotics, Richardson, TX</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Assisted a team in building a campus-wide club management system allowing 50+ officers and project
                      managers to better manage member dues, attendance, reservations, and user statistics
                    </li>
                    <li>
                      Designed a Server-Side rendered portal for officers using PostgreSQL and Django to reduce time
                      spent on operational tasks by 65%
                    </li>
                    <li>
                      Optimized HTML and CSS to create an intuitive and responsive user interface used by more than 300
                      members
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>B.S. in Software Engineering</CardTitle>
                    <Badge>Expected May 2027</Badge>
                  </div>
                  <CardDescription>University of Texas at Dallas, Richardson, TX</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Relevant Coursework: Computer Science II, Computer Architecture, Data Structures and Algorithms
                    </li>
                    <li>Active member of Comet Robotics club</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                A selection of my technical projects and achievements.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-2 md:max-w-[64rem] mt-8">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Codebug Game Engine</CardTitle>
                  <CardDescription>Custom game engine development</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img
                    src="https://via.placeholder.com/350x200"
                    width={350}
                    height={200}
                    alt="Codebug Game Engine"
                    className="rounded-md object-cover w-full"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Developed a game engine in Java from the ground up to support rendering over 1 million assets with
                    OpenGL and GLSL. Collaborated with a team to integrate a custom Rust compiler into the engine,
                    allowing users to execute custom scripts to define in-game creature behaviors.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2 w-full">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">OpenGL</Badge>
                    <Badge variant="outline">GLSL</Badge>
                    <Badge variant="outline">Rust</Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="self-end">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>RoboSCAD</CardTitle>
                  <CardDescription>3D Modeling infrastructure for combat robots</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img
                    src="https://via.placeholder.com/350x200"
                    width={350}
                    height={200}
                    alt="RoboSCAD Project"
                    className="rounded-md object-cover w-full"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Constructed a design infrastructure for 3D Modeling combat robots which utilized my custom Java UI
                    and manual 3D graphics calculations for displaying 3D models.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2 w-full">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">3D Graphics</Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="self-end">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>1lb Plastic Combat Robot</CardTitle>
                  <CardDescription>Award-winning robot design and implementation</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img
                    src="https://via.placeholder.com/350x200"
                    width={350}
                    height={200}
                    alt="Combat Robot Project"
                    className="rounded-md object-cover w-full"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Iterated, constructed, and controlled a combat robot that went undefeated against over 80
                    competitors among 5 competitions. Showcased mastery of planning, implementation, Solidworks, and 3D
                    Printing.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2 w-full">
                    <Badge variant="outline">SolidWorks</Badge>
                    <Badge variant="outline">3D Printing</Badge>
                    <Badge variant="outline">Robotics</Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="self-end">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>MOGOS</CardTitle>
                  <CardDescription>Graphical operating system in Lua</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img
                    src="https://via.placeholder.com/350x200"
                    width={350}
                    height={200}
                    alt="MOGOS Project"
                    className="rounded-md object-cover w-full"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Modified a Lua terminal based computer operating system to be graphically interfaced. Custom-made
                    solutions include in-software asset creation, efficient image compression, and a full-suite graphics
                    API. Distributed among an in-game user base consisting of more than 200 weekly users.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2 w-full">
                    <Badge variant="outline">Lua</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">OS Development</Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="self-end">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="interests" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Interests</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Beyond coding, here are some things I'm passionate about.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 md:max-w-[64rem] mt-8">
              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <Gamepad2 className="h-8 w-8 mb-3" />
                <CardTitle className="text-xl">Video Games</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    I enjoy playing strategy and sandbox games like Minecraft and Stellaris in my free time.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <BookOpen className="h-8 w-8 mb-3" />
                <CardTitle className="text-xl">Hobbies</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    When I'm not coding, I enjoy watching anime, reading fiction, and working on personal programming
                    projects.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <Music className="h-8 w-8 mb-3" />
                <CardTitle className="text-xl">Music</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">I'm a fan of Metal/Rock and JPop music genres.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Interested in working together? Feel free to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href="mailto:dylanbrose1@gmail.com">
                  <Button className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Button>
                </a>
                <a href="tel:+16827607687">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <span className="mr-2">📱</span>
                    (682) 760-7687
                  </Button>
                </a>
                <a href="https://github.com/xXDMOGXx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:py-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Dylan Brose. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/xXDMOGXx" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="mailto:dylanbrose1@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
