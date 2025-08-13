
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Agentforce = () => {
  const expertiseCards = [
    {
      icon: "🤖",
      title: "Agentforce",
      description: "AI-powered autonomous agents that work alongside your team to enhance productivity.",
      bulletPoints: [
        "Autonomous AI agents",
        "Natural language processing",
        "Intelligent automation",
        "Context-aware responses",
        "Multi-modal interactions"
      ]
    },
    {
      icon: "☁️",
      title: "Data Cloud",
      description: "Unified customer data platform for comprehensive data management and insights.",
      bulletPoints: [
        "Customer data unification",
        "Real-time data processing",
        "Identity resolution",
        "Data harmonization",
        "Calculated insights"
      ]
    },
    {
      icon: "📊",
      title: "Tableau",
      description: "Advanced analytics and visualization capabilities for data-driven decision making.",
      bulletPoints: [
        "Interactive dashboards",
        "Advanced analytics",
        "Data visualization",
        "Self-service BI",
        "Embedded analytics"
      ]
    },
    {
      icon: "🎯",
      title: "Segmentation",
      description: "Advanced customer segmentation for personalized experiences and targeted campaigns.",
      bulletPoints: [
        "Dynamic segmentation",
        "Behavioral analysis",
        "Predictive modeling",
        "Real-time updates",
        "Cross-channel activation"
      ]
    },
    {
      icon: "👤",
      title: "Unified Profile",
      description: "Single customer view across all touchpoints and interactions.",
      bulletPoints: [
        "360-degree customer view",
        "Cross-channel tracking",
        "Identity resolution",
        "Profile enrichment",
        "Privacy compliance"
      ]
    },
    {
      icon: "🔄",
      title: "Data Harmonization",
      description: "Standardize and normalize data from multiple sources for consistent insights.",
      bulletPoints: [
        "Data standardization",
        "Schema mapping",
        "Data quality improvement",
        "Duplicate management",
        "Reference data management"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Agentforce"
      subtitle="AI-Powered Customer Service Excellence"
      description="Transform your customer service with Salesforce Agentforce, leveraging artificial intelligence to deliver personalized, efficient, and scalable customer support experiences."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cb9b1af083adf2a31c8c8ce3965555a34b3cda69?placeholderIfAbsent=true"
      expertiseCards={expertiseCards}
      additionalInfo="Salesforce Agentforce combines the power of artificial intelligence with deep CRM integration to create intelligent customer service experiences. Our implementation ensures seamless integration with your existing Salesforce ecosystem while maximizing the potential of AI-driven customer interactions."
    />
  );
};

export default Agentforce;
