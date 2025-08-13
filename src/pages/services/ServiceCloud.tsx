
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const ServiceCloud = () => {
  const expertiseCards = [
    {
      icon: "⚙️",
      title: "Service Automation",
      description: "Automate service processes to improve efficiency and customer satisfaction.",
      bulletPoints: [
        "Case routing and escalation",
        "Workflow automation",
        "SLA management",
        "Auto-response systems",
        "Process optimization"
      ]
    },
    {
      icon: "🏗️",
      title: "Field Service",
      description: "Optimize field service operations with intelligent scheduling and mobile capabilities.",
      bulletPoints: [
        "Work order management",
        "Mobile workforce optimization",
        "Scheduling and dispatch",
        "Inventory management",
        "Service analytics"
      ]
    },
    {
      icon: "🔧",
      title: "Self Service Portal",
      description: "Empower customers with self-service capabilities to resolve issues independently.",
      bulletPoints: [
        "Customer community portals",
        "Knowledge base access",
        "Case creation and tracking",
        "FAQ and documentation",
        "User engagement tools"
      ]
    },
    {
      icon: "📞",
      title: "OmniChannel",
      description: "Provide seamless customer service across all communication channels.",
      bulletPoints: [
        "Unified agent desktop",
        "Multi-channel routing",
        "Real-time chat support",
        "Social media integration",
        "Channel performance analytics"
      ]
    },
    {
      icon: "📧",
      title: "CTI",
      description: "Integrate computer telephony systems for streamlined communication.",
      bulletPoints: [
        "Click-to-dial functionality",
        "Call logging and recording",
        "Screen pop integration",
        "Call center optimization",
        "Voice analytics"
      ]
    },
    {
      icon: "📚",
      title: "Knowledge Management",
      description: "Centralize and organize knowledge to improve service quality and efficiency.",
      bulletPoints: [
        "Knowledge article creation",
        "Content management",
        "Search optimization",
        "Article analytics",
        "Collaborative editing"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Service Cloud"
      subtitle="Complete Customer Service Platform"
      description="Deliver exceptional customer service experiences with Salesforce Service Cloud, a comprehensive platform that empowers your support teams to resolve issues faster and build stronger customer relationships."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ab8d7b283ae7d99d86e3646e6390fa17a9677b1e?placeholderIfAbsent=true"
      expertiseCards={expertiseCards}
      additionalInfo="Service Cloud provides a unified platform for managing all customer service interactions. From case creation to resolution, our implementation ensures your team has the tools and insights needed to deliver world-class customer support while maintaining operational efficiency."
    />
  );
};

export default ServiceCloud;
