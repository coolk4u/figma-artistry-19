
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const EnablementTraining = () => {
  const expertiseCards = [
    {
      icon: "📚",
      title: "Custom Training Programs",
      description: "Tailored training programs designed for your specific Salesforce implementation.",
      bulletPoints: [
        "Role-based curriculum development",
        "Custom training materials",
        "Hands-on workshop design",
        "Assessment and certification",
        "Progress tracking and reporting"
      ]
    },
    {
      icon: "👥",
      title: "User Adoption Strategies",
      description: "Comprehensive strategies to maximize user adoption and engagement.",
      bulletPoints: [
        "Change management planning",
        "User persona analysis",
        "Adoption metrics tracking",
        "Feedback collection systems",
        "Continuous improvement processes"
      ]
    },
    {
      icon: "🎯",
      title: "Train-the-Trainer",
      description: "Empower your internal team to become Salesforce training champions.",
      bulletPoints: [
        "Trainer certification programs",
        "Teaching methodology training",
        "Training resource development",
        "Ongoing coaching support",
        "Knowledge transfer sessions"
      ]
    },
    {
      icon: "🔄",
      title: "Ongoing Support",
      description: "Continuous support and coaching to ensure long-term success.",
      bulletPoints: [
        "Post-training support",
        "Regular check-ins and coaching",
        "Performance optimization",
        "Advanced feature training",
        "Best practice sharing"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Enablement and Training"
      subtitle="Maximize User Adoption & Success"
      description="Empower your team with comprehensive Salesforce training and enablement programs designed to maximize user adoption, increase productivity, and ensure long-term success with your Salesforce investment."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Successful Salesforce implementation goes beyond technology - it requires people to embrace new ways of working. Our enablement and training programs are designed to ensure your team not only knows how to use Salesforce but understands how to leverage it for maximum business impact."
    />
  );
};

export default EnablementTraining;
