
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import highTechImage from './industryimg/High tech.jpg';

const HighTech = () => {
  const expertiseCards = [
    {
      icon: "🚀",
      title: "Product Lifecycle Management",
      description: "Manage products from conception to market launch and beyond.",
      bulletPoints: [
        "Product roadmap planning",
        "Feature development tracking",
        "Launch coordination",
        "Market feedback integration",
        "Product performance analytics"
      ]
    },
    {
      icon: "🤝",
      title: "Channel Partner Management",
      description: "Enable and optimize partner relationships for accelerated growth.",
      bulletPoints: [
        "Partner onboarding automation",
        "Deal registration systems",
        "Partner performance tracking",
        "Channel enablement tools",
        "Co-op marketing management"
      ]
    },
    {
      icon: "🎯",
      title: "Customer Success",
      description: "Drive product adoption and customer satisfaction.",
      bulletPoints: [
        "Usage analytics and insights",
        "Customer health scoring",
        "Onboarding optimization",
        "Support automation",
        "Renewal management"
      ]
    },
    {
      icon: "🔧",
      title: "Developer Ecosystem",
      description: "Build and manage thriving developer communities.",
      bulletPoints: [
        "API management platforms",
        "Developer portal creation",
        "Integration marketplace",
        "Documentation management",
        "Community engagement tools"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="High Tech Solutions"
      subtitle="Innovation-Driven Technology Solutions"
      description="Accelerate growth in the high-tech industry with Salesforce solutions designed for software companies, hardware manufacturers, and technology service providers."
      image={highTechImage}
      expertiseCards={expertiseCards}
      additionalInfo="Our high-tech industry solutions help technology companies scale their operations, improve customer experiences, and drive innovation. We understand the fast-paced nature of the tech industry and deliver agile solutions that adapt to changing market demands."
    />
  );
};

export default HighTech;
