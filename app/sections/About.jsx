import React from "react";

// No more icons needed for this minimalist design, but you can add them back if you wish.
// import { Code, Cpu, Layers, Mountain, Music, GitBranch } from "lucide-react";

// A simple reusable component for the section titles, mirroring your hero section's style.
const SectionTitle = ({ primary, secondary }) => (
  <div className="text-center mb-16">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

// A reusable card component for a clean, consistent look.
const InfoCard = ({ title, children }) => (
  <div className="w-full">
    <h2 className="poppins font-bold text-lg uppercase tracking-widest text-gray-400 mb-4">
      {title}
    </h2>
    <div className="poppins font-regular text-gray-800 text-lg leading-relaxed">
      {children}
    </div>
  </div>
);

const About = () => {
  return (
    // Changed background to white (bg-white)
    <section
      id="about"
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle primary="ABOUT" secondary="ME" />

        {/* === INTRODUCTORY PARAGRAPH === */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <p className="poppins font-regular text-xl sm:text-2xl text-gray-800 leading-relaxed">
            I'm a passionate Front-End Developer who specializes in turning
            ideas into beautiful, intuitive digital products. With a strong
            foundation in modern web technologies, I focus on crafting
            responsive, scalable, and high-performing interfaces that make a
            difference.
          </p>
        </div>

        {/* === CORE INFO (GRID LAYOUT) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {/* Card 1: How I work */}
          <InfoCard title="Philosophy">
            <p>
              My development process is centered on clean design, precision, and
              a deep understanding of user experience. I believe in close
              collaboration and continuous learning to deliver products that are
              not only functional but also a pleasure to use.
            </p>
          </InfoCard>

          {/* Card 2: My Skills */}
          <InfoCard title="Expertise">
            <p>
              My expertise lies in building dynamic, maintainable applications
              using the right tools for the job. I follow best practices like
              Atomic Design to ensure that every component is both robust and
              reusable.
            </p>
          </InfoCard>

          {/* Card 3: Core Technologies */}
          <InfoCard title="Tech Stacks">
            <ul className="flex flex-col gap-2">
              <li>
                <strong>React & Next.js</strong> for powerful UIs.
              </li>
              <li>
                <strong>TypeScript</strong> for scalable, type-safe code.
              </li>
              <li>
                <strong>Tailwind CSS</strong> for rapid, utility-first styling.
              </li>
              <li>
                <strong>State Management</strong> with Zustand & Redux.
              </li>
              <li>
                <strong>Github/Gitlab</strong> for seamless deployment & CI/CD.
              </li>
            </ul>
          </InfoCard>
        </div>

        {/* A simple, elegant divider like in your hero section */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 my-24"></div>

        {/* === PERSONAL INFO SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 max-w-4xl mx-auto">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              BEYOND CODE
            </p>
            <p className="text-xl font-medium text-black mt-1">
              Contemporary Dancer
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              HOBBY
            </p>
            <p className="text-xl font-medium text-black mt-1">
              Part-time Hiking Coordinator
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              DRIVE
            </p>
            <p className="text-xl font-medium text-black mt-1">
              Staying active & exploring nature
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
