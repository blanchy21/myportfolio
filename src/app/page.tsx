import React from "react";
import { ArrowRight, Mail, MapPin, Cpu, Check, ArrowUpRight, Bot, Workflow, Code2, Database, Server } from "lucide-react";
import Image from "next/image";
import ShaderBackground from "../components/ShaderBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 relative z-10" style={{backgroundColor: '#000000'}}>
      {/* Shader Background Animation */}
      <ShaderBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-0 bg-black border-0" style={{backgroundColor: '#000000'}}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-white hover:text-white/70 transition-colors font-medium">
                Work
              </a>
              <a href="#stack" className="text-white hover:text-white/70 transition-colors font-medium">
                Stack
              </a>
              <a href="#about" className="text-white hover:text-white/70 transition-colors font-medium">
                About
              </a>
              <a href="#timeline" className="text-white hover:text-white/70 transition-colors font-medium">
                Timeline
              </a>
              <a href="#contact" className="text-white hover:text-white/70 transition-colors font-medium">
                Contact
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-white/70 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="w-full sm:px-6 sm:mt-16 mt-10 px-4 pt-20 relative z-20">
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="leading-none text-white tracking-tight">
                <span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold">
                  <span data-letter="" style={{ display: "inline-block", transform: "translateY(0px)", opacity: 1 }} className="tracking-tighter">Paul</span>
                  <span className="block"></span>
                  <span data-letter="" style={{ display: "inline-block", transform: "translateY(0px)", opacity: 1 }} className="tracking-tighter">Blanche</span>
                </span>
              </h1>
              <p className="sm:mt-5 sm:text-3xl leading-relaxed max-w-2xl text-base text-white/70 tracking-tight mt-4">
                Frontend — Specialising in React, Next.js, Tailwind CSS, and TypeScript and also building Figma sites from designs.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10">
                  <ArrowRight className="w-4 h-4" />
                  <span>View Work</span>
                </a>
                    <a href="mailto:paulblanche21@gmail.com"
                      className="inline-flex items-center justify-center gap-2 hover:bg-white/15 text-sm font-medium text-white tracking-tight bg-white/10 border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 shadow-sm backdrop-blur">
                      <Mail className="w-4 h-4" />
                      <span className="">paulblanche21@gmail.com</span>
                    </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <MapPin className="w-[18px] h-[18px] text-white/50 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium tracking-tight">Based in Tipperary Ireland</p>
                    <p className="text-xs text-white/60 mt-0.5">Open to remote work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <Cpu className="w-[18px] h-[18px] text-white/50 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium tracking-tight">React, Next.js and Tailwind</p>
                    <p className="text-xs text-white/60 mt-0.5">Modern web development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <Check className="w-[18px] h-[18px] text-white/50 mt-0.5" />
                  <div className="">
                    <p className="text-sm font-medium tracking-tight">Currently available</p>
                    <p className="text-xs text-white/60 mt-0.5">Starting mid‑September</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 rounded-3xl border border-white/10">
                <Image src="/portfolio-photo.png" alt="Paul at work" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "grayscale(100%) saturate(0.7) contrast(1.1)" }} width={800} height={1000} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="w-full sm:px-6 sm:mt-20 border-white/10 border-t mt-16 pt-10 pr-4 pl-4 relative z-20">
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl tracking-tight">Recent Work</h2>
            <a href="#" className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white">
              <span className="">View all</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Sports Arena Landing */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/sports-landing.png"
                      alt="Sports Arena landing page"
                      width={800}
                      height={450}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Database className="w-4 h-4" />
                      <span className="">Blockchain Platform</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Sports Arena</h3>
                    <p className="text-sm text-white/70 mt-1">Sports-focused platform on Hive Blockchain for safe, politics-free sports discussions</p>
                  </div>
                </article>

                {/* Sports Arena Feed */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/sports-feed.png"
                      alt="Sports Arena feed page"
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Workflow className="w-4 h-4" />
                      <span>Sports Feed</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Sports Arena Feed</h3>
                    <p className="text-sm text-white/70 mt-1">Clean sports timeline without politics and religion, focused purely on sports content</p>
                  </div>
                </article>

                {/* Sports Arena Blockchain */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/hive-blockchain.png"
                      alt="Sports Arena on Hive Blockchain"
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Code2 className="w-4 h-4" />
                      <span className="">Blockchain Integration</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Hive Blockchain</h3>
                    <p className="text-sm text-white/70 mt-1">Built on Hive Blockchain for decentralized, censorship-resistant sports discussions</p>
                  </div>
                </article>

                {/* Tipster Arena Landing */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/tipster-landing.png"
                      alt="Tipster Arena landing page"
                      width={800}
                      height={450}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Bot className="w-4 h-4" />
                      <span className="">Social Media Platform</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Tipster Arena</h3>
                    <p className="text-sm text-white/70 mt-1">Social Media for tipsters live at www.tipster-arena.com</p>
                  </div>
                </article>

                {/* Tipster Arena Feed */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/tipster-feed.png"
                      alt="Tipster Arena feed page"
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Workflow className="w-4 h-4" />
                      <span>Social Features</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Tipster Arena Feed</h3>
                    <p className="text-sm text-white/70 mt-1">Integrated chat, messaging and social media likes and follows</p>
                  </div>
                </article>

                {/* Tipster Arena Chat */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/tipster-chat.png"
                      alt="Tipster Arena chat feature"
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Code2 className="w-4 h-4" />
                      <span className="">Chat System</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Tipster Chat</h3>
                    <p className="text-sm text-white/70 mt-1">Real-time messaging and communication features for tipsters.</p>
                  </div>
                </article>

                {/* Shopping Centre Website */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[16/9]">
          <Image
                      src="/shopping-centre2.png"
                      alt="Shopping centre website"
                      width={800}
                      height={450}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Workflow className="w-4 h-4" />
                      <span>Web Design</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Shopping Centre Website</h3>
                    <p className="text-sm text-white/70 mt-1">Designed a website for a well known local shopping centre</p>
                  </div>
                </article>

                {/* Jewellery Store Website */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[4/3]">
          <Image
                      src="/shop2.png"
                      alt="Jewellery store website"
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Bot className="w-4 h-4" />
                      <span>E-commerce</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Jewellery Store Website</h3>
                    <p className="text-sm text-white/70 mt-1">E-commerce website for a local jewellery store with online shopping features</p>
                  </div>
                </article>

                {/* Figma Website */}
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[16/9]">
          <Image
                      src="/figma.png"
                      alt="Figma website design"
                      width={800}
                      height={450}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Check className="w-4 h-4" />
                      <span>Figma Design</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight">Figma Website</h3>
                    <p className="text-sm text-white/70 mt-1">Website design and development from Figma mockups to fully functional web application</p>
                  </div>
                </article>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full sm:px-6 sm:mt-20 border-white/10 border-t mt-16 pt-10 pr-4 pl-4 relative z-20">
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">About Me</h2>
                  <p className="text-lg text-white/70 leading-relaxed mb-6">
                    I&apos;m a passionate frontend developer specializing in React, Next.js, and modern web technologies. 
                    Based in Tipperary, Ireland, I love creating beautiful, functional web applications that provide 
                    exceptional user experiences.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    I don&apos;t charge by the hour. I want the client to be happy with their website and if they are, 
                    we can agree a price accordingly. When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                    contributing to open source projects, or working on personal projects like Tipster Arena - a social platform for tipsters.
                  </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 p-8">
                <div className="flex items-center justify-center">
                  <video 
                    className="w-full max-w-md rounded-xl shadow-lg"
                    controls
                    poster="/portfolio-photo.png"
                    preload="metadata"
                  >
                    <source src="/Tipster.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="w-full sm:px-6 sm:mt-20 border-white/10 border-t mt-16 pt-10 pr-4 pl-4 relative z-20">
        <div className="max-w-7xl mx-auto relative z-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Code2 className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">React</h3>
              <p className="text-sm text-white/60">Frontend Library</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Server className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">Next.js</h3>
              <p className="text-sm text-white/60">Full-Stack Framework</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Database className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">TypeScript</h3>
              <p className="text-sm text-white/60">Type Safety</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Workflow className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">Tailwind CSS</h3>
              <p className="text-sm text-white/60">Styling</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Cpu className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">Python</h3>
              <p className="text-sm text-white/60">Backend Language</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Server className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">Django</h3>
              <p className="text-sm text-white/60">Python Framework</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Database className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">Node.js</h3>
              <p className="text-sm text-white/60">Runtime Environment</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Code2 className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">JavaScript</h3>
              <p className="text-sm text-white/60">Programming Language</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Workflow className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">CSS</h3>
              <p className="text-sm text-white/60">Styling Language</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Code2 className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">HTML</h3>
              <p className="text-sm text-white/60">Markup Language</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Bot className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">Radix UI</h3>
              <p className="text-sm text-white/60">Component Library</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Check className="w-8 h-8 text-white/70" />
              </div>
              <h3 className="font-semibold mb-1">Shadcn UI</h3>
              <p className="text-sm text-white/60">UI Components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="w-full sm:px-6 sm:mt-20 border-white/10 border-t mt-16 pt-10 pr-4 pl-4 relative z-20">
        <div className="max-w-7xl mx-auto relative z-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center">Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2024 - Present</h3>
                <p className="text-white/70 mb-2">Building Tipster Arena and Sports Arena - Social platforms with real-time chat, messaging, and blockchain integration.</p>
                <p className="text-sm text-white/60">AI editors (Cursor AI), UI components (ShadCN UI, Radix UI), design tools (Spline, Figma), and advanced React/Next.js development.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <p className="text-white/70 mb-2">Django frameworks, APIs, Redis, Vite, Docker, Nginx, Daphne, Postman, Cron Jobs, Beautiful Soup.</p>
                <p className="text-sm text-white/60">Backend development, containerization, API testing, web scraping, and task automation.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2022</h3>
                <p className="text-white/70 mb-2">Database technologies: MySQL and PostgreSQL.</p>
                <p className="text-sm text-white/60">Data modeling, query optimization, and database administration skills.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2021</h3>
                <p className="text-white/70 mb-2">Python programming, GitHub, GitLab, and deployment protocols (Vercel, Heroku, Sevalla).</p>
                <p className="text-sm text-white/60">Version control, cloud deployment, and Python ecosystem exploration.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-3 h-3 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2020</h3>
                <p className="text-white/70 mb-2">Started web development journey with HTML, JavaScript, and CSS.</p>
                <p className="text-sm text-white/60">Foundation of frontend development and web technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full sm:px-6 sm:mt-20 border-white/10 border-t mt-16 pt-10 pr-4 pl-4 pb-8 relative z-20">
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Paul Blanche</h3>
              <p className="text-white/70 mb-4">Frontend Developer specializing in React, Next.js, and modern web technologies.</p>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4" />
                <span>Tipperary, Ireland</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#work" className="block text-white/70 hover:text-white transition-colors">Work</a>
                <a href="#about" className="block text-white/70 hover:text-white transition-colors">About</a>
                    <a href="mailto:paulblanche21@gmail.com" className="block text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                    <a href="mailto:paulblanche21@gmail.com" className="block text-white/70 hover:text-white transition-colors">paulblanche21@gmail.com</a>
                <a href="https://www.tipster-arena.com" className="block text-white/70 hover:text-white transition-colors">tipster-arena.com</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2024 Paul Blanche. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}