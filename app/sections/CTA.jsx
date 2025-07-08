import React from "react";
import { Mail, Linkedin, Github, FileText, Phone, Gitlab } from "lucide-react";

// You can create a reusable component for this or define it per file
const SectionTitle = ({ children }) => (
  <h1 className="poppins font-extrabold text-4xl sm:text-5xl text-center text-black tracking-wide">
    {children}
  </h1>
);

// A reusable component for social/professional links
const ContactLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-300 group"
  >
    {icon}
    <span className="group-hover:underline underline-offset-4">{label}</span>
  </a>
);

const CTA = () => {
  // Dynamically get the current year for the footer
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* A subtle divider line to separate it from the previous section */}
        <div className="w-24 h-px bg-gray-200 mx-auto mb-20"></div>

        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle>Let's Build Together</SectionTitle>

          <p className="poppins text-lg text-gray-600 mt-6 leading-relaxed">
            I'm currently seeking new opportunities as a Front-End Developer. If
            you have a project in mind, an open position, or simply want to
            connect, I would love to hear from you.
          </p>

          {/* Primary Email CTA */}
          <a
            href="mailto:ramparedes06@gmail.com"
            className="poppins font-bold text-2xl sm:text-3xl text-black inline-block mt-10 hover:text-gray-700 transition-colors duration-300"
          >
            ramparedes06@gmail.com
          </a>

          {/* Secondary Contact Links */}
          <div className="flex justify-center items-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-6 mt-16">
            <ContactLink
              href="https://www.linkedin.com/in/ram-paredes/"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <ContactLink
              href="https://github.com/RamParedes06"
              icon={<Github size={20} />}
              label="GitHub"
            />
            <ContactLink
              href="http://gitlab.aique.cloud/mardie"
              icon={<Gitlab size={20} />}
              label="GitLab"
            />
            <ContactLink
              href="https://drive.google.com/file/d/18FUsf2rZ4DHf7J2H7cw8fJOL7gTmE-Ll/view?usp=sharing"
              icon={<FileText size={20} />}
              label="Resume"
            />
            <ContactLink
              href="tel:+639454890745"
              icon={<Phone size={20} />}
              label="+63 945 489 0745"
            />
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <footer className="text-center text-gray-500 mt-24 pt-10 border-t border-gray-100">
        <p>&copy; {currentYear} Ram Paredes. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default CTA;
