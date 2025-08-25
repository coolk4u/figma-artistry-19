import React from 'react';
import pic6 from './Assets/AiStrategyImg/Insight-Driven Intelligence.png'

export const AIStrategy: React.FC = () => {
  const aiFeatures = [
    {
      title: "Agentforce-Powered Productivity",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/eba1d47822c4596a3f28d41afdf6dab86650b5f8?placeholderIfAbsent=true",
      description: "With Agentforce, we bring the power of AI copilots directly into your workflows. From automating repetitive tasks to assisting users with contextual insights, Agentforce accelerates productivity and ensures your teams spend more time on what truly matters.",
      borderColor: "rgba(42,50,132,1)"
    },
    {
      title: "Einstein Intelligence",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d37a3dfcc7f8e2138ef512351420ccc9f6b6fdfa?placeholderIfAbsent=true",
      description: "From AI-driven recommendations and predictive lead scoring to next-best-action guidance and automated knowledge suggestions, we help you harness Einstein to streamline service, empower sales, and deliver personalized customer experiences.",
      borderColor: "rgba(42,50,132,1)"
    },
    {
      title: "Smarter Decisions with Data Cloud",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/bd0b711f0d7fef2501a3c9bb485fbe72e07bf5ab?placeholderIfAbsent=true",
      description: "By unifying and activating customer data in real time, Data Cloud enables predictive intelligence at scale. We leverage its insights to anticipate customer needs, personalize experiences, and drive proactive engagement strategies that boost growth.",
      borderColor: "rgba(42,50,132,1)"
    },
    {
      title: "Intelligent Development",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/782e439b357264aa9ce5b28a3e95bac474fe39c6?placeholderIfAbsent=true",
      description: "Every development cycle is guided by tools like Agentforce for developers, Co-pilot, Builder.io in scanning and assisting to ensure aligned outcomes.",
      borderColor: "rgba(42,50,132,1)"
    },
    {
      title: "AI-First Quality Engineering",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2efab7705493f5da9f6934b19cf76638834112ac?placeholderIfAbsent=true",
      description: "Automated test generation, and self-healing scripts reduce defects and rework, while increasing test coverage and speed-to-market.",
      borderColor: "rgba(42,50,132,1)"
    },
      {
      title: "Insight-Driven Intelligence",
      icon: pic6,
      description: "By applying machine learning and predictive modelling, we translate your raw data into forward-looking strategies to uncover hidden opportunities, and make smarter decisions faster.",
      borderColor: "rgba(42,50,132,1)"
    },
  ];

  return (
    <section className="bg-white z-10 w-full flex flex-col items-center px-4 py-10 sm:px-6 md:px-8 lg:px-20 xl:px-24">
      <div className="flex items-center gap-2 text-[rgba(42,50,132,1)] font-normal">
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
              <h3 className="text-[rgba(42,50,132,1)] font-medium">
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