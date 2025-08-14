import React from "react";
import { ServiceCard } from "./ServiceCard";

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      title: "Salesforce Marketing Cloud",
      description:
        "Supercharge your marketing with personalized, AI-driven campaigns that engage the right audience at the right time.",
      features: [
        "Omnichannel Campaign Management",
        "Segmentation & Personalization",
        "Real-Time Engagement Tracking",
        "Automated Customer Journeys",
      ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f08d94889db026dc919380b85696e7a3bc3fdff2?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3266e8ba0888c0a2567696236d844368701cc8f9?placeholderIfAbsent=true",
      title: "Salesforce Sales Cloud",
      description:
        "Boost your revenue with streamlined, intelligent sales processes that empower teams to close deals faster.",
      features: [
        "Lead & Opportunity Management",
        "AI-Powered Sales Forecasting",
        "Workflow Automation",
        "Relationship Management",
      ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f08d94889db026dc919380b85696e7a3bc3fdff2?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ab8d7b283ae7d99d86e3646e6390fa17a9677b1e?placeholderIfAbsent=true",
      title: "Salesforce Service Cloud",
      description:
        "Deliver exceptional customer service with AI-powered tools and a 360° view of every customer interaction.",
      features: [
        "Omnichannel Case Management",
        "Assistance via Einstein Bots",
        "Knowledge & Experience Cloud Portals",
        "Real-Time Performance Insights",
      ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f8d22255cc8512102cf1640ba84e07bfb9ab5ef2?placeholderIfAbsent=true",
      title: "CPQ & Revenue Cloud",
      description:
        "Accelerate sales cycles with accurate quotes, seamless pricing, and revenue automation.",
      features: [
        "Guided Selling & Product Configuration",
        "Automated Quote Generation",
        "Subscription & Contract Management ",
        "Revenue Recognition & Billing",
      ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dba01bf6d130e026b8276bc752fe1e3af67ae836?placeholderIfAbsent=true",
      title: "Financial Services Cloud",
      description:
        "Transform client relationships with a financial services platform designed for banks, insurers, and wealth managers.",
        features: [
        "Client & Household 360° View",
        "Wealth Portfolios & Goal Tracking",   
        "Lending & Insurance Management",
        "Compliance & Regulatory Management",
      ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2e1e9387ab35ae9a2b45a5807fb7d32e5b708fa2?placeholderIfAbsent=true",
      title: "Platform App Development",
      description:
        "Build custom apps quickly and scale them securely on the Salesforce Platform.",
      features: [
        "Low-Code / No-Code Development",
        "API & Integration Capabilities",
        "Mobile-Ready Applications",
        "Scalable, Secure Architecture",
      ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dbbed4497020afa2fcb104eaf38b7923f8bb9d83?placeholderIfAbsent=true",
      title: "Health Cloud",
      description:
        "Enhance patient and member experiences with a connected health platform built on Salesforce.",
      features: [
        "Unified Patient 360° View",
        "Care Plans & Provider Management",
        "Telehealth & Remote Monitoring",
        "HIPAA-Compliant Communication",
        ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true",
    },
    // {
    //   icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
    //   title: "Salesforce Data Cloud",
    //   description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
    //   checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    // },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cb9b1af083adf2a31c8c8ce3965555a34b3cda69?placeholderIfAbsent=true",
      title: "Data Cloud & Agentforce",
      description:
        "Empower Agentforce agents to deliver faster, and smarter customer interactions powered by unified customer data using Data Cloud",
      features: [
        "Real-Time Data Integration",
        "Unified Customer Profiles",
        "Predictive Insights & Analytics",
        "Agentforce & Custom Agents Setup",
      ],
      checkIcon:
        "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="w-full max-w-7xl h-[820px] mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Your Vision.{" "}
          <span className="gradient-text">Our Salesforce Expertise.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              checkIcon={service.checkIcon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
