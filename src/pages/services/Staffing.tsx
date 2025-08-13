
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Staffing = () => {
  const expertiseCards = [
    {
      icon: "👥",
      title: "On-Demand FTEs",
      description: "Full-Time Equivalents for immediate deployment across your projects.",
      bulletPoints: [
        "Immediate resource deployment",
        "Dedicated team members",
        "Full-time commitment",
        "Project-specific assignments",
        "Seamless integration with your team"
      ]
    },
    {
      icon: "🎯",
      title: "Talent Pool",
      description: "Access to pre-vetted Salesforce professionals with diverse skill sets.",
      bulletPoints: [
        "Pre-screened candidates",
        "Diverse skill portfolios",
        "Industry-specific expertise",
        "Quality assurance processes",
        "Rapid talent matching"
      ]
    },
    {
      icon: "🔧",
      title: "T-Shaped Model",
      description: "Cross-functional expertise with deep specialization in specific domains.",
      bulletPoints: [
        "Broad skill foundation",
        "Deep domain expertise",
        "Cross-functional collaboration",
        "Versatile problem-solving",
        "Adaptive skill application"
      ]
    },
    {
      icon: "⚡",
      title: "Flex Model",
      description: "Scalable resources that adapt to your changing project demands.",
      bulletPoints: [
        "Scalable team size",
        "Flexible engagement terms",
        "Dynamic resource allocation",
        "Cost-effective scaling",
        "Rapid team adjustments"
      ]
    },
    {
      icon: "💳",
      title: "Credits-Based Staffing",
      description: "Flexible staffing model based on credit consumption for optimal resource utilization.",
      bulletPoints: [
        "Pay-as-you-use model",
        "Credit-based allocation",
        "Flexible resource consumption",
        "Budget optimization",
        "Transparent cost structure"
      ]
    },
    {
      icon: "🤝",
      title: "Shared Services",
      description: "Shared resource model for efficient utilization across multiple projects.",
      bulletPoints: [
        "Resource sharing efficiency",
        "Cost-effective model",
        "Cross-project collaboration",
        "Optimized utilization",
        "Reduced overhead costs"
      ]
    },
    {
      icon: "🔄",
      title: "Hybrid Model",
      description: "Combination of different staffing approaches tailored to your specific needs.",
      bulletPoints: [
        "Customized approach",
        "Multiple model integration",
        "Flexible engagement options",
        "Tailored solutions",
        "Optimal resource mix"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Staffing"
      subtitle="Flexible Talent Solutions"
      description="Access top Salesforce talent with our flexible staffing solutions. From on-demand FTEs to specialized consulting models, we provide the right expertise for your project needs with scalable and cost-effective approaches."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our staffing solutions are designed to provide maximum flexibility while ensuring quality delivery. Whether you need dedicated resources, shared services, or hybrid models, we adapt to your business requirements and project timelines to deliver optimal results."
    />
  );
};

export default Staffing;
