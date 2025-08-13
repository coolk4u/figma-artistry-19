
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const FinancialServices = () => {
  const expertiseCards = [
    {
      icon: "🏦",
      title: "Customer Relationship Management",
      description: "Build stronger client relationships with comprehensive financial CRM solutions.",
      bulletPoints: [
        "360-degree client view",
        "Relationship mapping",
        "Client interaction tracking",
        "Personalized service delivery",
        "Client lifecycle management"
      ]
    },
    {
      icon: "💼",
      title: "Wealth Management",
      description: "Advanced tools for wealth managers and financial advisors.",
      bulletPoints: [
        "Portfolio management",
        "Investment tracking",
        "Goal-based planning",
        "Risk assessment tools",
        "Advisory workflow automation"
      ]
    },
    {
      icon: "📋",
      title: "Compliance & Risk",
      description: "Ensure regulatory compliance and effective risk management.",
      bulletPoints: [
        "Regulatory reporting",
        "Compliance monitoring",
        "Risk assessment frameworks",
        "Audit trail management",
        "Policy enforcement"
      ]
    },
    {
      icon: "📱",
      title: "Digital Banking",
      description: "Modern digital banking solutions for enhanced customer experiences.",
      bulletPoints: [
        "Online banking platforms",
        "Mobile app integration",
        "Digital account opening",
        "Self-service capabilities",
        "Omnichannel experiences"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Financial Services Industry"
      subtitle="Banking & Finance Digital Solutions"
      description="Transform financial services delivery with Salesforce solutions tailored for banks, credit unions, insurance companies, and wealth management firms."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our financial services expertise spans across banking, insurance, wealth management, and fintech. We help financial institutions deliver personalized customer experiences while maintaining the highest standards of security and compliance."
    />
  );
};

export default FinancialServices;
