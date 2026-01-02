import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Import project images
import merchantOnkyuu from "../assets/merchant-onkyuu.png";
import qubeHero from "../assets/qube-hero.png";
import wtp2 from "../assets/wtp2.png";
import bundokista from "../assets/bundokista.png";
import blog from "../assets/Blog.png";

const projects = [
  {
    id: "onkyu",
    src: merchantOnkyuu,
    title: "OnKyu - Queue Management System",
    description: "A production-grade, real-time queue management system with GPS validation and multi-merchant architecture",
    link: "/projects/onkyu",
    tags: ["Next.js 16", "React 19", "TypeScript", "Socket.IO", "MongoDB", "Node.js", "GPS Integration"],
    type: "Production System"
  },
  {
    id: "qube-smart-locker",
    src: qubeHero,
    title: "QUBE Smart Locker",
    description: "A comprehensive web platform for smart locker system management",
    link: "https://www.qubesmartlockers.com/",
    tags: ["Next.js", "Node.js", "AWS R2", "Framer Motion", "GSAP", "Tailwind"],
    type: "Corporate"
  },
  {
    id: "walktheplanet",
    src: wtp2,
    title: "WalkThePlanet",
    description: "A travel-focused application encouraging exploration on foot",
    link: "https://walktheplanet.com",
    tags: ["Next.js", "Node.js", "AWS R2", "Framer Motion", "GSAP", "Tailwind"],
    type: "Corporate"
  },
  {
    id: "bundokista",
    src: bundokista,
    title: "Bundokista Hiking And Travel",
    description: "A comprehensive travel website for hiking and adventure enthusiasts",
    link: "https://bundokista-frontend.onrender.com/",
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js", "Cloudinary", "JWT", "Framer Motion", "GSAP", "Tailwind"],
    type: "Freelance"
  },
  {
    id: "words-and-stories",
    src: blog,
    title: "Words & Stories",
    description: "A curated platform for poetry and storytelling",
    link: "https://rioramilo.onrender.com/",
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js", "Cloudinary", "JWT", "Framer Motion", "GSAP", "Tailwind"],
    type: "Freelance"
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="font-bold text-xl">Project Showcase</h1>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore detailed showcases of my web development projects, from corporate platforms to creative freelance work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                {project.src ? (
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <p className="text-gray-600 text-sm font-medium">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.type === "Corporate" 
                      ? "bg-blue-100 text-blue-800" 
                      : project.type === "Production System"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {project.type}
                  </span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}