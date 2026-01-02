"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Users, Code, Monitor, Smartphone, Database, Cloud, Zap, Shield, Clock, MapPin, Bell, Settings } from "lucide-react";
import ImageZoom from "../../components/ImageZoom";

// Import OnKyu images
import merchantImage from "../../assets/merchant-onkyuu.png";
import loginImage from "../../assets/login-onkyuu.png";
import userImage from "../../assets/user-onkyuu.png";

export default function OnKyuPage() {
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
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ExternalLink size={16} />
                <span>View Demo</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Clock size={16} />
            Queue Management System
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-black mb-6 poppins">
            OnKyu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 montserrat">
            A production-grade, real-time queue management web application designed to serve businesses and organizations 
            of all types with fair, anti-gatecrashing FIFO queue ordering and location-based validation. Features secure 
            merchant authentication, comprehensive dashboard, and intuitive customer interface.
          </p>
        </div>

        {/* Main Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Merchant Login */}
          <ImageZoom
            src={loginImage}
            alt="OnKyu Merchant Login Interface"
            title="Merchant Login"
            description="Secure access for business owners"
            imageContainerClassName="h-64 md:h-72 lg:h-80"
            width={600}
            height={400}
          />

          {/* User Interface - Scaled down */}
          <div className="md:col-span-2 lg:col-span-1 mx-auto max-w-sm lg:max-w-none">
            <ImageZoom
              src={userImage}
              alt="OnKyu Customer User Interface"
              title="Customer Interface"
              description="Simple queue joining and tracking"
              imageContainerClassName="h-64 md:h-72 lg:h-80 flex items-center justify-center bg-gray-50"
              objectFit="contain"
              width={300}
              height={600}
            />
          </div>

          {/* Merchant Dashboard */}
          <ImageZoom
            src={merchantImage}
            alt="OnKyu Merchant Dashboard Interface"
            title="Merchant Dashboard"
            description="Complete queue management and analytics"
            imageContainerClassName="h-64 md:h-72 lg:h-80"
            width={600}
            height={400}
          />
        </div>

        {/* Interface Highlights */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4 poppins">Three-Tier Interface Design</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto montserrat">
              OnKyu features specialized interfaces for different user types: secure merchant login, comprehensive 
              merchant dashboard, and intuitive customer interface for seamless queue management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Shield size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-black">Merchant Login</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Secure authentication system
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Business account verification
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Session management
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Settings size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-black">Merchant Dashboard</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Real-time queue monitoring
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Customer calling system
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Analytics and controls
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-black">Customer Interface</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  QR code scanning to join
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Live position tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  GPS check-in verification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-black mb-6 poppins">System Overview</h2>
            <div className="prose prose-lg text-gray-600 mb-8 montserrat">
              <p>
                OnKyu is a universal queue management system that revolutionizes how businesses handle customer queues. 
                From restaurants and retail stores to government offices and service centers, OnKyu provides a fair, 
                efficient solution that eliminates line-cutting and ensures First-In-First-Out ordering.
              </p>
              <p>
                The system features real-time updates, GPS-based location validation, and a multi-merchant architecture 
                that allows unlimited businesses to operate independently while maintaining scalable performance and 
                security standards.
              </p>
            </div>

            {/* Core Features */}
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Users size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Multi-Merchant Architecture</h4>
                  <p className="text-gray-600 text-sm">Independent merchant systems with unique QR codes and isolated queue management.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Fair Queue Management</h4>
                  <p className="text-gray-600 text-sm">FIFO ordering with anti-duplicate prevention and session-based tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Zap size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Real-Time Communication</h4>
                  <p className="text-gray-600 text-sm">Socket.IO integration for instant updates and live queue position tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <MapPin size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Location-Based Validation</h4>
                  <p className="text-gray-600 text-sm">GPS verification with configurable radius for physical check-in requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Bell size={24} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Advanced Queue States</h4>
                  <p className="text-gray-600 text-sm">Seven distinct states from PRE_QUEUE to COMPLETED with automatic progression.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Settings size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Administrative Controls</h4>
                  <p className="text-gray-600 text-sm">Kill switch, pause/resume functionality, and comprehensive analytics dashboard.</p>
                </div>
              </div>
            </div>

            {/* Queue States */}
            <h3 className="text-2xl font-bold text-black mb-6 poppins">Queue State Management</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <h5 className="font-medium text-sm">PRE_QUEUE</h5>
                  <p className="text-xs text-gray-600">Joined but not checked in</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <h5 className="font-medium text-sm">ACTIVE</h5>
                  <p className="text-xs text-gray-600">Checked in and waiting</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                  <h5 className="font-medium text-sm">CALLED</h5>
                  <p className="text-xs text-gray-600">Being called to service</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <h5 className="font-medium text-sm">SERVING</h5>
                  <p className="text-xs text-gray-600">Currently receiving service</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mx-auto mb-2"></div>
                  <h5 className="font-medium text-sm">COMPLETED</h5>
                  <p className="text-xs text-gray-600">Service finished</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
                  <h5 className="font-medium text-sm">SKIPPED/EXPIRED</h5>
                  <p className="text-xs text-gray-600">Missed call or timed out</p>
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js 16</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React 19</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Tailwind CSS 4</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Express.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Socket.IO</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">MongoDB</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Mongoose ODM</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tools & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">QR Code</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">bcryptjs</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">UUID</span>
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
                  <span className="font-medium text-black">Production System</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Architecture</span>
                  <span className="font-medium text-black">Real-time Web App</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Deployment</span>
                  <span className="font-medium text-black">Cloud Ready</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scalability</span>
                  <span className="font-medium text-black">Multi-tenant</span>
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Key Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield size={16} className="text-green-600" />
                  <span className="text-sm text-gray-700">Anti-gatecrashing protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-700">GPS location validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={16} className="text-yellow-600" />
                  <span className="text-sm text-gray-700">Real-time synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database size={16} className="text-purple-600" />
                  <span className="text-sm text-gray-700">Session persistence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor size={16} className="text-indigo-600" />
                  <span className="text-sm text-gray-700">Admin dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black mb-12 text-center poppins">System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Client Layer</h3>
            <p className="text-gray-600 text-sm">
              Next.js frontend with real-time Socket.IO connections, responsive design, and GPS integration
            </p>
          </div>
          
          <div className="text-center p-8 bg-green-50 rounded-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">API Layer</h3>
            <p className="text-gray-600 text-sm">
              Express.js server with Socket.IO for WebSocket communication and RESTful API endpoints
            </p>
          </div>
          
          <div className="text-center p-8 bg-purple-50 rounded-xl">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Data Layer</h3>
            <p className="text-gray-600 text-sm">
              MongoDB with Mongoose ODM for merchant and queue data with real-time synchronization
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 poppins">Ready to Revolutionize Queue Management?</h2>
          <p className="text-xl text-gray-300 mb-8 montserrat">
            OnKyu demonstrates advanced real-time web application development with complex state management, 
            location services, and multi-tenant architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink size={20} />
              View Demo (Coming Soon)
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