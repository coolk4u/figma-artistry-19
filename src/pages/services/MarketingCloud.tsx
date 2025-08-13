
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const MarketingCloud = () => {
  const expertiseCards = [
    {
      icon: "🧠",
      title: "Intelligence",
      description: "Leverage AI-powered insights to optimize your marketing strategies and campaigns.",
      bulletPoints: [
        "Predictive analytics",
        "Customer intelligence",
        "Campaign optimization",
        "Performance insights",
        "Behavioral analysis"
      ]
    },
    {
      icon: "🛤️",
      title: "Journey Builder",
      description: "Create personalized customer journeys across all touchpoints and channels.",
      bulletPoints: [
        "Multi-channel journeys",
        "Automated workflows",
        "Trigger-based campaigns",
        "Journey analytics",
        "A/B testing"
      ]
    },
    {
      icon: "🎯",
      title: "Personalization",
      description: "Deliver personalized experiences at scale across all customer interactions.",
      bulletPoints: [
        "Content personalization",
        "Dynamic messaging",
        "Behavioral targeting",
        "Real-time decisioning",
        "Preference management"
      ]
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Gain deep insights into campaign performance and customer behavior.",
      bulletPoints: [
        "Campaign analytics",
        "Customer lifecycle analysis",
        "ROI measurement",
        "Attribution modeling",
        "Custom reporting"
      ]
    },
    {
      icon: "📢",
      title: "Campaigns",
      description: "Execute multi-channel campaigns with precision and scale.",
      bulletPoints: [
        "Campaign management",
        "Audience segmentation",
        "Message optimization",
        "Channel coordination",
        "Performance tracking"
      ]
    },
    {
      icon: "📧",
      title: "Email, Social",
      description: "Manage email marketing and social media campaigns from a unified platform.",
      bulletPoints: [
        "Email automation",
        "Social media publishing",
        "Content calendar",
        "Engagement tracking",
        "Cross-channel integration"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Marketing Cloud"
      subtitle="Personalized Customer Journeys"
      description="Create meaningful customer experiences with Salesforce Marketing Cloud, a comprehensive digital marketing platform that enables personalized, cross-channel campaigns at scale."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true"
      expertiseCards={expertiseCards}
      additionalInfo="Marketing Cloud empowers marketers to build lasting relationships with customers through personalized experiences across every touchpoint. Our implementation ensures seamless integration with your sales and service teams for a unified customer experience."
    />
  );
};

export default MarketingCloud;
