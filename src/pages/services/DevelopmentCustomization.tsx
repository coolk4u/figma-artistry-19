
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const DevelopmentCustomization = () => {
  const expertiseCards = [
    {
      icon: "🔧",
      title: "Custom App Development",
      description: "Build tailored applications that extend Salesforce capabilities to meet unique business needs.",
      bulletPoints: [
        "Lightning Web Components",
        "Custom object modeling",
        "App lifecycle management",
        "User interface design",
        "Mobile app development"
      ]
    },
    {
      icon: "⚙️",
      title: "Process Optimization",
      description: "Streamline business processes with custom automation and workflow solutions.",
      bulletPoints: [
        "Workflow automation",
        "Process builder optimization",
        "Flow development",
        "Approval processes",
        "Business rule implementation"
      ]
    },
    {
      icon: "☁️",
      title: "Experience Cloud",
      description: "Create engaging digital experiences for customers, partners, and employees.",
      bulletPoints: [
        "Community development",
        "Portal customization",
        "Self-service capabilities",
        "Brand customization",
        "User experience optimization"
      ]
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description: "Develop mobile solutions leveraging Heroku for Android and iOS platforms.",
      bulletPoints: [
        "Native mobile development",
        "Hybrid app solutions",
        "Heroku integration",
        "Offline capabilities",
        "Push notifications"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Development & Customization"
      subtitle="Tailored Salesforce Solutions"
      description="Extend Salesforce capabilities with custom development and tailored solutions. Our development team creates bespoke applications and customizations that address your unique business requirements."
      image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our development team specializes in creating custom solutions that extend Salesforce's native capabilities. We follow Salesforce development best practices and coding standards to ensure your customizations are maintainable, scalable, and upgrade-safe."
    />
  );
};

export default DevelopmentCustomization;
