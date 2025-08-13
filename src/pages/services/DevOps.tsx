
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const DevOps = () => {
  const expertiseCards = [
    {
      icon: "🔄",
      title: "CI/CD Pipeline",
      description: "Implement continuous integration and deployment for reliable Salesforce releases.",
      bulletPoints: [
        "Automated build processes",
        "Continuous integration setup",
        "Deployment automation",
        "Pipeline orchestration",
        "Release management"
      ]
    },
    {
      icon: "🧪",
      title: "Testing Automation",
      description: "Comprehensive testing frameworks to ensure code quality and reliability.",
      bulletPoints: [
        "Unit testing frameworks",
        "Integration testing",
        "UI automation testing",
        "Performance testing",
        "Quality gate enforcement"
      ]
    },
    {
      icon: "🗂️",
      title: "Version Control",
      description: "Robust version control and change management processes.",
      bulletPoints: [
        "Git workflow optimization",
        "Branch management strategies",
        "Change tracking",
        "Code review processes",
        "Merge conflict resolution"
      ]
    },
    {
      icon: "📊",
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring and alerting for production environments.",
      bulletPoints: [
        "Performance monitoring",
        "Error tracking and alerting",
        "Deployment analytics",
        "System health dashboards",
        "Capacity planning"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce DevOps"
      subtitle="Streamlined Development & Deployment"
      description="Accelerate your Salesforce development lifecycle with our DevOps solutions, implementing continuous integration, automated testing, and efficient deployment processes for reliable and scalable Salesforce applications."
      image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our Salesforce DevOps practices ensure your development team can deliver high-quality solutions faster and more reliably. We implement industry best practices for version control, testing, and deployment to minimize risks and maximize development efficiency."
    />
  );
};

export default DevOps;
