
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const ExperienceCloud = () => {
  const expertiseCards = [
    {
      icon: "🌐",
      title: "Customer Portals",
      description: "Self-service customer portals that enhance satisfaction and reduce support costs.",
      bulletPoints: [
        "Self-service case creation",
        "Knowledge base access",
        "Account management tools",
        "Order tracking capabilities",
        "Community engagement features"
      ]
    },
    {
      icon: "🤝",
      title: "Partner Collaboration",
      description: "Enable partner success with dedicated collaboration spaces.",
      bulletPoints: [
        "Partner onboarding workflows",
        "Deal registration systems",
        "Resource sharing platforms",
        "Performance dashboards",
        "Co-op marketing tools"
      ]
    },
    {
      icon: "👥",
      title: "Employee Communities",
      description: "Boost employee engagement with internal collaboration platforms.",
      bulletPoints: [
        "Internal knowledge sharing",
        "Team collaboration spaces",
        "Company news and updates",
        "Employee recognition programs",
        "Training and development resources"
      ]
    },
    {
      icon: "📱",
      title: "Mobile Experience",
      description: "Responsive, mobile-first experiences for all community members.",
      bulletPoints: [
        "Mobile-responsive design",
        "Native mobile app capabilities",
        "Offline functionality",
        "Push notifications",
        "Touch-optimized interfaces"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Experience Cloud"
      subtitle="Connected Digital Experiences"
      description="Create engaging digital experiences for customers, partners, and employees with Salesforce Experience Cloud. Build branded communities and portals that drive engagement and collaboration."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Experience Cloud enables you to create connected digital experiences that extend your Salesforce data and processes to external users. Our implementation ensures seamless integration with your existing Salesforce ecosystem while delivering exceptional user experiences."
    />
  );
};

export default ExperienceCloud;
