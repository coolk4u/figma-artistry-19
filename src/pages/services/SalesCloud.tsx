
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const SalesCloud = () => {
  const expertiseCards = [
    {
      icon: "📊",
      title: "Sales Automation",
      description: "Streamline your sales processes with intelligent automation and workflow optimization.",
      bulletPoints: [
        "Lead scoring and routing",
        "Opportunity management",
        "Sales process automation",
        "Territory management",
        "Quote and proposal generation"
      ]
    },
    {
      icon: "📈",
      title: "Revenue Cloud",
      description: "Optimize your revenue lifecycle from quote to cash with comprehensive revenue management.",
      bulletPoints: [
        "Configure, Price, Quote (CPQ)",
        "Subscription management",
        "Contract lifecycle management",
        "Revenue recognition",
        "Billing automation"
      ]
    },
    {
      icon: "🎯",
      title: "Forecasting",
      description: "Gain accurate insights into your sales pipeline with predictive forecasting capabilities.",
      bulletPoints: [
        "Pipeline analytics",
        "Sales performance metrics",
        "Predictive forecasting",
        "Goal tracking",
        "Performance dashboards"
      ]
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Enhance team collaboration and communication across your sales organization.",
      bulletPoints: [
        "Team collaboration tools",
        "Chatter integration",
        "Document sharing",
        "Activity tracking",
        "Team performance monitoring"
      ]
    },
    {
      icon: "🗺️",
      title: "Territory Management",
      description: "Optimize sales territories and account assignments for maximum efficiency.",
      bulletPoints: [
        "Territory planning",
        "Account assignment",
        "Geographic mapping",
        "Performance analysis",
        "Resource allocation"
      ]
    },
    {
      icon: "📱",
      title: "Channel Partner Apps",
      description: "Extend your sales reach through partner enablement and channel management.",
      bulletPoints: [
        "Partner onboarding",
        "Deal registration",
        "Channel performance tracking",
        "Partner portal access",
        "Co-op fund management"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Sales Cloud"
      subtitle="Accelerate Sales Performance"
      description="Boost your revenue with Salesforce Sales Cloud, the world's #1 CRM platform that streamlines sales processes, improves productivity, and drives revenue growth through intelligent automation."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3266e8ba0888c0a2567696236d844368701cc8f9?placeholderIfAbsent=true"
      expertiseCards={expertiseCards}
      additionalInfo="Sales Cloud transforms how your sales team operates by providing a complete view of customers, automating routine tasks, and delivering actionable insights. Our implementation focuses on maximizing user adoption and ensuring your sales processes align with industry best practices."
    />
  );
};

export default SalesCloud;
