"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Monitor, Smartphone, Database, Cloud, Zap, Shield } from "lucide-react";
import ImageZoom from "../../components/ImageZoom";

// Import project images
import qubeHero from "../../assets/qube-hero.png";
import qube1 from "../../assets/qube1.png";
import qube2 from "../../assets/qube2.png";

export default function QubeSmartLockerPage() {
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
                href="https://www.qubesmartlockers.com/" 
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Users size={16} />
            Corporate Project
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-black mb-6 poppins">
            QUBE Smart Locker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 montserrat">
            A comprehensive web platform for smart locker system management, enabling seamless locker rentals, 
            real-time monitoring, and user management for modern storage solutions.
          </p>
        </div>

        {/* Main Project Image */}
        <ImageZoom
          src={qubeHero}
          alt="QUBE Smart Locker Platform"
          title="QUBE Smart Locker Platform"
          description="Comprehensive web platform for smart locker system management"
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
                QUBE Smart Locker represents a revolutionary approach to storage solutions, combining IoT technology 
                with modern web development to create an intuitive platform for locker management. The system serves 
                both end-users seeking convenient storage and administrators managing locker networks.
              </p>
              <p>
                Built with scalability in mind, the platform handles real-time locker status updates, secure payment 
                processing, and comprehensive analytics. The responsive design ensures seamless functionality across 
                all devices, from desktop management interfaces to mobile rental applications.
              </p>
            </div>

            {/* Key Features */}
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Monitor size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Real-time Monitoring</h4>
                  <p className="text-gray-600 text-sm">Live tracking of locker availability, usage statistics, and system health across all locations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Smartphone size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Mobile-First Design</h4>
                  <p className="text-gray-600 text-sm">Optimized mobile experience for on-the-go locker rentals and management.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Shield size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Secure Payments</h4>
                  <p className="text-gray-600 text-sm">Integrated payment processing with multiple payment methods and secure transactions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Database size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Analytics Dashboard</h4>
                  <p className="text-gray-600 text-sm">Comprehensive analytics and reporting for business insights and optimization.</p>
                </div>
              </div>
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
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">AWS R2</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Cloudflare</span>
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
                  <span className="font-medium text-black">Corporate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-black">3 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Team Size</span>
                  <span className="font-medium text-black">4 Developers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">My Role</span>
                  <span className="font-medium text-black">Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Screenshots */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black mb-12 text-center poppins">Additional Views</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageZoom
            src={qube1}
            alt="QUBE Smart Locker Interface"
            title="Platform Interface"
            description="User-friendly locker management interface"
            width={800}
            height={600}
          />
          <ImageZoom
            src={qube2}
            alt="QUBE Smart Locker Dashboard"
            title="Admin Dashboard"
            description="Real-time monitoring and analytics interface"
            width={800}
            height={600}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 poppins">Interested in Similar Projects?</h2>
          <p className="text-xl text-gray-300 mb-8 montserrat">
            Let's discuss how I can help bring your web platform ideas to life with modern technologies and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.qubesmartlockers.com/" 
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