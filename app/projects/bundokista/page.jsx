"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Monitor, Smartphone, Database, Cloud, Zap, Shield, Mountain, Camera, MapPin, Heart } from "lucide-react";
import ImageZoom from "../../components/ImageZoom";

// Import project images
import bundokista from "../../assets/bundokista.png";

export default function BundokistaPage() {
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
                href="https://bundokista-frontend.onrender.com/" 
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
            <Mountain size={16} />
            Freelance Project
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-black mb-6 poppins">
            Bundokista Hiking & Travel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 montserrat">
            A comprehensive travel website designed for hiking and adventure enthusiasts, featuring destination guides, 
            trail information, and a community platform for outdoor adventurers to share their experiences.
          </p>
        </div>

        {/* Main Project Image */}
        <ImageZoom
          src={bundokista}
          alt="Bundokista Hiking & Travel Website"
          title="Bundokista Platform"
          description="Comprehensive travel website for hiking and adventure enthusiasts"
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
                Bundokista is a full-stack web application that serves as a comprehensive platform for hiking and 
                travel enthusiasts. The project combines beautiful visual design with robust functionality to create 
                an engaging experience for outdoor adventurers seeking their next destination.
              </p>
              <p>
                Built with modern web technologies, the platform features user authentication, content management, 
                image uploads, and interactive features that allow users to share their hiking experiences, discover 
                new trails, and connect with like-minded adventurers.
              </p>
            </div>

            {/* Key Features */}
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Mountain size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Trail Guides</h4>
                  <p className="text-gray-600 text-sm">Comprehensive hiking trail information with difficulty ratings, maps, and tips.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Camera size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Photo Sharing</h4>
                  <p className="text-gray-600 text-sm">Upload and share hiking photos with integrated Cloudinary image management.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Users size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">User Profiles</h4>
                  <p className="text-gray-600 text-sm">Personalized user profiles with hiking history and favorite destinations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Shield size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Secure Authentication</h4>
                  <p className="text-gray-600 text-sm">JWT-based authentication system with secure user registration and login.</p>
                </div>
              </div>
            </div>

            {/* Technical Highlights */}
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Technical Highlights</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Full-stack MERN application with RESTful API architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Responsive design optimized for mobile and desktop experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cloud-based image storage and optimization with Cloudinary</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Smooth animations and interactions using Framer Motion and GSAP</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>MongoDB database with optimized queries and data relationships</span>
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
                  <span className="font-medium text-black">2 Months</span>
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

            {/* Client Feedback */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                <Heart size={20} className="text-red-500" />
                Client Feedback
              </h3>
              <blockquote className="text-gray-600 italic">
                "Ram delivered an exceptional website that perfectly captures our brand's adventurous spirit. 
                The platform is user-friendly and has significantly improved our online presence."
              </blockquote>
              <div className="mt-3 text-sm text-gray-500">
                - Bundokista Travel Team
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4 poppins">Key Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mountain size={16} className="text-green-600" />
                  <span className="text-sm text-gray-700 montserrat">Adventure booking platform with real-time availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-700 montserrat">JWT-based authentication with role management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera size={16} className="text-purple-600" />
                  <span className="text-sm text-gray-700 montserrat">User-generated travel blog community</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={16} className="text-orange-600" />
                  <span className="text-sm text-gray-700 montserrat">Real-time notification system</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database size={16} className="text-indigo-600" />
                  <span className="text-sm text-gray-700 montserrat">Comprehensive admin CMS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor size={16} className="text-red-600" />
                  <span className="text-sm text-gray-700 montserrat">Payment processing with auto-cancellation</span>
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
          <div className="text-center p-8 bg-green-50 rounded-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 poppins">Frontend Layer</h3>
            <p className="text-gray-600 text-sm montserrat">
              Next.js 16 with React 19, TypeScript, Tailwind CSS, and Framer Motion for responsive design and animations
            </p>
          </div>
          
          <div className="text-center p-8 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 poppins">API Layer</h3>
            <p className="text-gray-600 text-sm montserrat">
              Express.js server with 12 API modules, JWT authentication, and real-time notification system
            </p>
          </div>
          
          <div className="text-center p-8 bg-orange-50 rounded-xl">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database size={32} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 poppins">Data & Storage</h3>
            <p className="text-gray-600 text-sm montserrat">
              MongoDB Atlas with 6 core models, Cloudinary CDN integration, and comprehensive audit logging
            </p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4 poppins">Technical Implementation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto montserrat">
            A comprehensive adventure booking and travel community platform with enterprise-level features
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Adventure Booking System */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Adventure Booking Platform</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Event Management</h4>
                  <p className="text-gray-600 text-sm montserrat">Hiking events with difficulty ratings, trail classes, MASL data, and logistics coordination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Payment Processing</h4>
                  <p className="text-gray-600 text-sm montserrat">GCash integration with payment breakdown, auto-cancellation, and email confirmations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Real-time Features</h4>
                  <p className="text-gray-600 text-sm montserrat">Live availability tracking, instant booking confirmation, and coordinator notifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Platform */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Community Platform</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Travel Blog System</h4>
                  <p className="text-gray-600 text-sm montserrat">User-generated content with rich text editor, image uploads, and tag-based organization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Social Features</h4>
                  <p className="text-gray-600 text-sm montserrat">Likes, comments, reviews, bookmarks, and community discussions with nested threads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-black mb-1 poppins">Mountain Database</h4>
                  <p className="text-gray-600 text-sm montserrat">Comprehensive Philippine mountains database with detailed information and statistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6 poppins">Advanced System Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-black poppins">Authentication & Security</h4>
              <ul className="space-y-2 text-sm text-gray-600 montserrat">
                <li>• JWT with refresh tokens (15min/7day expiry)</li>
                <li>• Role-based access (User/Admin/Superadmin)</li>
                <li>• bcryptjs password hashing</li>
                <li>• Activity logging and audit trail</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-black poppins">Real-time Notifications</h4>
              <ul className="space-y-2 text-sm text-gray-600 montserrat">
                <li>• Event assignment alerts</li>
                <li>• Auto-refresh every 30 seconds</li>
                <li>• Unread count with pulse animation</li>
                <li>• Mark all as read functionality</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-black poppins">Admin CMS</h4>
              <ul className="space-y-2 text-sm text-gray-600 montserrat">
                <li>• Complete content management</li>
                <li>• User role and type management</li>
                <li>• Site settings and feature flags</li>
                <li>• Custom animations control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 poppins">Need a Travel or Adventure Website?</h2>
          <p className="text-xl text-gray-300 mb-8 montserrat">
            Let's create an engaging platform that showcases your travel business and connects with adventure enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://bundokista-frontend.onrender.com/" 
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