import React from 'react';

export const AIStrategy: React.FC = () => {
  const aiFeatures = [
    {
      title: "Pre-Sales Intelligence",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/eba1d47822c4596a3f28d41afdf6dab86650b5f8?placeholderIfAbsent=true",
      description: "AI helps tailor every interaction, from solutioning and demos to POCs. Content recommendations, scenario simulations, and proposal automation shape a compelling, data-backed narrative.",
      borderColor: "#3AC2FF"
    },
    {
      title: "Insight-Driven Intelligence",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d37a3dfcc7f8e2138ef512351420ccc9f6b6fdfa?placeholderIfAbsent=true",
      description: "By applying machine learning and predictive modelling, we translate your raw data into forward-looking strategies to uncover hidden opportunities, and make smarter decisions faster.",
      borderColor: "#25A4DD"
    },
    {
      title: "Enablement & AI Literacy",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/bd0b711f0d7fef2501a3c9bb485fbe72e07bf5ab?placeholderIfAbsent=true",
      description: "We empower your workforce to harness AI with confidence. Through custom training programs and change adoption initiatives, we help your teams navigate the AI landscape and unlock its full potential",
      borderColor: "#3AC2FF"
    },
    {
      title: "Intelligent Development",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/782e439b357264aa9ce5b28a3e95bac474fe39c6?placeholderIfAbsent=true",
      description: "Every development cycle is guided by tools like Agentforce for developers, Co-pilot, Builder.io in scanning and assisting to ensure aligned outcomes.",
      borderColor: "#3AC2FF"
    },
    {
      title: "AI-First Quality Engineering",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2efab7705493f5da9f6934b19cf76638834112ac?placeholderIfAbsent=true",
      description: "Automated test generation, and self-healing scripts reduce defects and rework, while increasing test coverage and speed-to-market.",
      borderColor: "#3AC2FF"
    }
  ];

  return (
    <section className="bg-white z-10 w-full flex flex-col items-center px-4 py-10 sm:px-6 md:px-8 lg:px-20 xl:px-24">
      <div className="flex items-center gap-2 text-[#25A4DD] font-normal">
        <img
          src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/0bf5f221ca8c27c9d4e36fade8f0809cb2db6023?placeholderIfAbsent=true"
          alt="AI Strategy icon"
          className="w-6 h-6 object-contain"
        />
        <span>AI Strategy & Managed Solutions</span>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-center mt-6 max-w-4xl mx-auto">
        From blueprint to breakthrough we embed AI into your operations with precision scalability and impact
      </h2>
      
      <div className="w-full max-w-6xl mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiFeatures.map((feature, index) => (
          <article
            key={index}
            className="bg-[#FEFEFF] p-4 border-l border-[#E3E9EE] relative min-h-[252px]"
          >
            <div 
              className="absolute left-0 top-0 h-full w-1"
              style={{ backgroundColor: feature.borderColor }}
            />
            <div className="bg-[#EBF9FF] p-2 mb-4">
              <h3 className="text-[#003B55] font-medium">
                {feature.title}
              </h3>
            </div>
            <div className="flex flex-col">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 object-contain rounded-full mb-3"
              />
              <p className="text-[#6C757D] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};