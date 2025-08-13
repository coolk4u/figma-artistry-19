
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const SalesforceIntegration = () => {
  const expertiseCards = [
    {
      icon: "🔄",
      title: "P2P",
      description: "Point-to-point integrations for direct system connectivity and data exchange.",
      bulletPoints: [
        "Direct API connections",
        "Real-time data sync",
        "Custom endpoints",
        "Secure data transfer",
        "Error handling mechanisms"
      ]
    },
    {
      icon: "🎯",
      title: "Mulesoft",
      description: "Enterprise integration platform for connecting applications, data, and devices.",
      bulletPoints: [
        "API-led connectivity",
        "Enterprise service bus",
        "Data transformation",
        "Cloud and on-premise integration",
        "Anypoint platform expertise"
      ]
    },
    {
      icon: "📦",
      title: "Batch",
      description: "Bulk data processing and batch integration solutions for large-scale operations.",
      bulletPoints: [
        "Bulk data loader",
        "Scheduled data processing",
        "ETL operations",
        "Data validation",
        "Performance optimization"
      ]
    },
    {
      icon: "🔗",
      title: "ETL",
      description: "Extract, Transform, and Load processes for comprehensive data management.",
      bulletPoints: [
        "Data extraction strategies",
        "Complex transformations",
        "Data quality assurance",
        "Migration planning",
        "Legacy system integration"
      ]
    },
    {
      icon: "💾",
      title: "Data Integrations",
      description: "Seamless data connectivity across multiple systems and platforms.",
      bulletPoints: [
        "Master data management",
        "Data warehousing",
        "Real-time synchronization",
        "Data governance",
        "Integration monitoring"
      ]
    },
    {
      icon: "🛠️",
      title: "Custom Frameworks",
      description: "Tailored integration frameworks designed for specific business requirements.",
      bulletPoints: [
        "Custom middleware development",
        "Framework architecture",
        "Reusable components",
        "Scalable solutions",
        "Integration patterns"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Integration"
      subtitle="Seamless System Connectivity"
      description="Connect Salesforce with your existing systems and applications to create a unified business ecosystem. Our integration services ensure data flows seamlessly across all your business platforms."
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our integration expertise spans across various platforms including ERP systems, marketing automation tools, e-commerce platforms, and custom applications. We design robust, secure, and scalable integration solutions that grow with your business."
    />
  );
};

export default SalesforceIntegration;
