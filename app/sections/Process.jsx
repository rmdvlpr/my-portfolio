import React from "react";

// Reusable component for the section title for consistency
const SectionTitle = ({ primary, secondary }) => (
  <div className="text-center mb-6">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

// Array containing the condensed process steps
const processSteps = [
  {
    step: "01",
    title: "Deconstruct Designs",
    description:
      "I break down complex UI/UX designs into a structured, component-based architecture in collaboration with the team.",
  },
  {
    step: "02",
    title: "Core Development",
    description:
      "I build responsive, type-safe interfaces using React & TypeScript while managing client-side state.",
  },
  {
    step: "03",
    title: "API Integration",
    description:
      "I connect the frontend to backend services by integrating RESTful APIs to handle dynamic, real-time data.",
  },
  {
    step: "04",
    title: "Optimization & QA",
    description:
      "I ensure cross-browser compatibility and focus on performance optimization to deliver a smooth user experience.",
  },
  {
    step: "05",
    title: "Agile Collaboration",
    description:
      "I work within Scrum sprints, collaborating with a cross-functional team to deliver timely and iterative results.",
  },
  {
    step: "06",
    title: "Streamlined Delivery",
    description:
      "I contribute to projects utilizing CI/CD pipelines, enabling an efficient and flexible deployment workflow.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* === HEADING === */}
        <SectionTitle primary="MY WORK" secondary="PROCESS" />
        <p className="poppins text-center text-lg text-gray-600 max-w-3xl mx-auto mb-20">
          My approach is structured and collaborative, ensuring the final
          product is a high-quality, performant, and maintainable application.
        </p>

        {/* === PROCESS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {processSteps.map((item) => (
            <div key={item.step} className="flex gap-6">
              {/* Stylized Step Number */}
              <div className="poppins font-black text-6xl text-gray-100">
                {item.step}
              </div>
              {/* Title and Description */}
              <div className="flex-1">
                <h3 className="text-xl font-bold poppins mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
