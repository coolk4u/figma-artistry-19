
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const GenerativeAI = () => {
  const expertiseCards = [
    {
      icon: "✍️",
      title: "Content Generation",
      description: "AI-powered content creation for emails, proposals, and marketing materials.",
      bulletPoints: [
        "Personalized email composition",
        "Sales proposal generation",
        "Marketing content creation",
        "Social media messaging",
        "Product descriptions"
      ]
    },
    {
      icon: "🤖",
      title: "Intelligent Automation",
      description: "Automate routine tasks with AI-driven intelligent automation.",
      bulletPoints: [
        "Case summarization",
        "Lead scoring and routing",
        "Response suggestions",
        "Data entry automation",
        "Workflow optimization"
      ]
    },
    {
      icon: "🧠",
      title: "Predictive Insights",
      description: "Leverage AI to predict outcomes and recommend next best actions.",
      bulletPoints: [
        "Sales forecasting",
        "Customer behavior prediction",
        "Churn risk analysis",
        "Opportunity scoring",
        "Recommendation engines"
      ]
    },
    {
      icon: "🎯",
      title: "Personalization",
      description: "Deliver hyper-personalized experiences across all customer touchpoints.",
      bulletPoints: [
        "Dynamic content personalization",
        "Behavioral targeting",
        "Individual journey mapping",
        "Custom recommendations",
        "Adaptive user interfaces"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Generative AI"
      subtitle="AI-Powered Business Innovation"
      description="Transform your business with Salesforce Generative AI, leveraging cutting-edge artificial intelligence to automate content creation, enhance customer interactions, and drive intelligent decision-making across your organization."
      image="/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png"
      expertiseCards={expertiseCards}
      additionalInfo="Generative AI in Salesforce brings the power of artificial intelligence directly into your workflow. From generating personalized emails to summarizing customer interactions, our AI implementation helps your team work smarter and deliver exceptional customer experiences."
    />
  );
};

export default GenerativeAI;
