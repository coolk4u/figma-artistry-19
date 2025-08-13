
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const AWS = () => {
  const expertiseCards = [
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Design and implement scalable, secure cloud architectures on AWS.",
      bulletPoints: [
        "Infrastructure as Code (IaC)",
        "Auto-scaling configurations",
        "Load balancing optimization",
        "Security group management",
        "Cost optimization strategies"
      ]
    },
    {
      icon: "🔗",
      title: "Integration Services",
      description: "Seamlessly connect Salesforce with AWS services and third-party systems.",
      bulletPoints: [
        "API Gateway implementation",
        "Event-driven architectures",
        "Data synchronization",
        "Webhook integrations",
        "Middleware development"
      ]
    },
    {
      icon: "🛡️",
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure regulatory compliance.",
      bulletPoints: [
        "Identity and access management",
        "Data encryption strategies",
        "Compliance frameworks",
        "Security monitoring",
        "Audit trail implementation"
      ]
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Leverage AWS analytics services for deeper business insights.",
      bulletPoints: [
        "Data lake architecture",
        "Real-time analytics",
        "Business intelligence dashboards",
        "Machine learning integration",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="AWS Integration Services"
      subtitle="Cloud Infrastructure Excellence"
      description="Leverage the power of Amazon Web Services with Salesforce to create scalable, secure, and high-performance cloud solutions that support your business growth and digital transformation initiatives."
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our AWS integration services help you build robust, scalable solutions that seamlessly connect with your Salesforce ecosystem. We design cloud architectures that grow with your business while maintaining security, performance, and cost-effectiveness."
    />
  );
};

export default AWS;
