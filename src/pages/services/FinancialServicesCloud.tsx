
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const FinancialServicesCloud = () => {
  const expertiseCards = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Household Management",
      description: "Comprehensive view of family relationships and financial connections.",
      bulletPoints: [
        "Family relationship mapping",
        "Household financial overview",
        "Multi-generational planning",
        "Beneficiary management",
        "Joint account administration"
      ]
    },
    {
      icon: "💰",
      title: "Wealth Management",
      description: "Advanced tools for managing client portfolios and investment strategies.",
      bulletPoints: [
        "Portfolio management tools",
        "Investment tracking",
        "Performance analytics",
        "Risk assessment",
        "Asset allocation planning"
      ]
    },
    {
      icon: "🎯",
      title: "Goal-Based Planning",
      description: "Help clients achieve their financial objectives with structured planning tools.",
      bulletPoints: [
        "Financial goal setting",
        "Progress tracking",
        "Scenario planning",
        "Retirement planning",
        "Education funding strategies"
      ]
    },
    {
      icon: "📋",
      title: "Compliance Management",
      description: "Ensure regulatory compliance with built-in controls and reporting.",
      bulletPoints: [
        "Regulatory reporting",
        "Compliance monitoring",
        "Audit trail management",
        "Risk assessment tools",
        "Policy enforcement"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Financial Services Cloud"
      subtitle="Banking & Finance CRM Solutions"
      description="Transform financial services with Salesforce Financial Services Cloud. Deliver personalized customer experiences while managing complex financial relationships and regulatory requirements."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Financial Services Cloud provides a comprehensive platform designed specifically for financial advisors, wealth managers, and banking professionals. Our implementation ensures compliance with industry regulations while delivering exceptional client experiences."
    />
  );
};

export default FinancialServicesCloud;
