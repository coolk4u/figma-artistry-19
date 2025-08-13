
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const RevenueCloud = () => {
  const expertiseCards = [
    {
      icon: "💰",
      title: "Configure, Price, Quote (CPQ)",
      description: "Streamline your quote-to-cash process with intelligent CPQ automation.",
      bulletPoints: [
        "Product configuration automation",
        "Dynamic pricing rules",
        "Quote generation optimization",
        "Approval workflow automation",
        "Proposal document creation"
      ]
    },
    {
      icon: "🔄",
      title: "Subscription Management",
      description: "Manage recurring revenue and subscription lifecycles effectively.",
      bulletPoints: [
        "Subscription billing automation",
        "Usage-based pricing models",
        "Renewal management",
        "Upsell and cross-sell automation",
        "Customer lifecycle tracking"
      ]
    },
    {
      icon: "📊",
      title: "Revenue Recognition",
      description: "Automate revenue recognition and ensure compliance with accounting standards.",
      bulletPoints: [
        "ASC 606 compliance",
        "Revenue scheduling automation",
        "Multi-element arrangements",
        "Contract modification handling",
        "Financial reporting integration"
      ]
    },
    {
      icon: "📄",
      title: "Contract Management",
      description: "Comprehensive contract lifecycle management from creation to renewal.",
      bulletPoints: [
        "Contract generation automation",
        "Amendment tracking",
        "Renewal notifications",
        "Compliance monitoring",
        "Contract analytics"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Revenue Cloud"
      subtitle="Complete Revenue Lifecycle Management"
      description="Maximize revenue growth with Salesforce Revenue Cloud, an integrated platform that streamlines the entire revenue process from quote to cash, ensuring accurate pricing, faster deal closure, and optimized revenue recognition."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f8d22255cc8512102cf1640ba84e07bfb9ab5ef2?placeholderIfAbsent=true"
      expertiseCards={expertiseCards}
      additionalInfo="Revenue Cloud provides end-to-end visibility and control over your revenue processes. From initial quote through contract management to revenue recognition, our implementation ensures your revenue operations are optimized for growth and compliance."
    />
  );
};

export default RevenueCloud;
