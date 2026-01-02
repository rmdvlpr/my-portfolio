"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Monitor, Smartphone, Database, Cloud, Zap, Shield, BookOpen, PenTool, Heart, Star } from "lucide-react";
import ImageZoom from "../../components/ImageZoom";

// Import project images
import blog from "../../assets/Blog.png";

export default function WordsAndStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/projects" 
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Projects</span>
            </Link>
            <div className="flex items-center gap-4">
              <a 
                href="https://rioramilo.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Visit Live Site</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <BookOpen size={16} />
            Freelance Project
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-black mb-6 poppins">
            Words & Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 montserrat">
            A curated digital platform for poetry and storytelling, providing writers with a beautiful space 
            to share their work and readers with an immersive literary experience.
          </p>
        </div>

        {/* Main Project Image */}
        <ImageZoom
          src={blog}
          alt="Words & Stories Platform"
          title="Words & Stories Platform"
          description="Curated digital platform for poetry and storytelling"
          width={1920}
          height={1080}
          containerClassName="mb-16"
        />
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-black mb-6 poppins">Project Overview</h2>
            <div className="prose prose-lg text-gray-600 mb-8 montserrat">
              <p>
                Words & Stories is a sophisticated content management platform designed specifically for literary 
                content. The project focuses on creating an elegant, distraction-free environment where writers 
                can publish their poetry and stories, while readers can discover and engage with quality literature.
              </p>
              <p>
                The platform features a whitelist-based submission system, ensuring content quality while maintaining 
                an inclusive environment for emerging and established writers. With its clean typography and 
                thoughtful design, the site prioritizes readability and user experience.
              </p>
            </div>

            {/* Key Features */}
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <PenTool size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Content Submission</h4>
                  <p className="text-gray-600 text-sm">Streamlined submission process with rich text editor and formatting options.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Star size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Curated Content</h4>
                  <p className="text-gray-600 text-sm">Whitelist-based system ensuring high-quality literary content.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-green-100 rounded-lg">
                  <BookOpen size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Reading Experience</h4>
                  <p className="text-gray-600 text-sm">Optimized typography and layout for immersive reading experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Users size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Author Profiles</h4>
                  <p className="text-gray-600 text-sm">Dedicated author pages showcasing their published works and biography.</p>
                </div>
              </div>
            </div>

            {/* Design Philosophy */}
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Design Philosophy</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Typography-first design prioritizing readability and literary aesthetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Minimalist interface that puts content at the forefront</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Responsive design ensuring optimal reading experience across devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Subtle animations that enhance user interaction without distraction</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                <Code size={20} />
                Tech Stack
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Framer Motion</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">GSAP</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Express.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">MongoDB</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">JWT</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Cloudinary</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Render</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Project Type</span>
                  <span className="font-medium text-black">Freelance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-black">6 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Team Size</span>
                  <span className="font-medium text-black">Solo Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">My Role</span>
                  <span className="font-medium text-black">Full-Stack Developer</span>
                </div>
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Special Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Rich text editor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Content moderation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">SEO optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Social sharing</span>
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4 poppins">Key Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <PenTool size={16} className="text-purple-600" />
                  <span className="text-sm text-gray-700 montserrat">Rich markdown editor with real-time preview</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield size={16} className="text-green-600" />
                  <span className="text-sm text-gray-700 montserrat">JWT-based authentication with role management</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-700 montserrat">Complete content management system</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={16} className="text-orange-600" />
                  <span className="text-sm text-gray-700 montserrat">Author profile management and showcase</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={16} className="text-yellow-600" />
                  <span className="text-sm text-gray-700 montserrat">SEO optimization and social media integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor size={16} className="text-indigo-600" />
                  <span className="text-sm text-gray-700 montserrat">Responsive admin dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black mb-12 text-center poppins">System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-purple-50 rounded-xl">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 poppins">Content Layer</h3>
            <p className="text-gray-600 text-sm montserrat">
              Next.js frontend with SSR, markdown rendering, responsive design, and optimized reading experience
            </p>
          </div>
          
          <div className="text-center p-8 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 poppins">Admin System</h3>
            <p className="text-gray-600 text-sm montserrat">
              Comprehensive dashboard with post management, author profiles, site settings, and content moderation
            </p>
          </div>
          
          <div className="text-center p-8 bg-green-50 rounded-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 poppins">Data & API</h3>
            <p className="text-gray-600 text-sm montserrat">
              MongoDB database with Express.js API, Cloudinary integration, and comprehensive authentication system
            </p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4 poppins">Technical Implementation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto montserrat">
            A comprehensive content management platform with advanced features for writers and readers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend Features */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Frontend Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Content Discovery</h4>
                  <p className="text-gray-600 text-sm montserrat">Posts browsing, category/tag filtering, search functionality, and pagination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Author Showcase</h4>
                  <p className="text-gray-600 text-sm montserrat">Public author profiles with statistics, works listing, and social integration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Reading Experience</h4>
                  <p className="text-gray-600 text-sm montserrat">Optimized typography, reading time calculation, and responsive design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Dashboard */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Admin Dashboard</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Content Management</h4>
                  <p className="text-gray-600 text-sm montserrat">Rich post editor, draft/publish workflow, category and tag management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Profile Management</h4>
                  <p className="text-gray-600 text-sm montserrat">Complete author profile editor with image upload and real-time preview</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Site Configuration</h4>
                  <p className="text-gray-600 text-sm montserrat">Homepage customization, SEO settings, and social media integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 poppins">Need a Content Platform?</h2>
          <p className="text-xl text-gray-300 mb-8 montserrat">
            Let's create a beautiful, functional platform for your content creators and readers to connect and engage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://rioramilo.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink size={20} />
              View Live Project
            </a>
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}