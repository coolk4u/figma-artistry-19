
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Healthcare = () => {
  const expertiseCards = [
    {
      icon: "👨‍⚕️",
      title: "Patient Relationship Management",
      description: "Comprehensive patient engagement and relationship management solutions.",
      bulletPoints: [
        "Patient record management",
        "Care coordination workflows",
        "Patient engagement tools",
        "Communication platforms",
        "Health outcome tracking"
      ]
    },
    {
      icon: "🏥",
      title: "Care Coordination",
      description: "Streamline care delivery across multiple providers and departments.",
      bulletPoints: [
        "Provider collaboration tools",
        "Care team communication",
        "Treatment plan management",
        "Referral management",
        "Care pathway optimization"
      ]
    },
    {
      icon: "💻",
      title: "Telehealth Integration",
      description: "Enable remote care delivery and virtual patient interactions.",
      bulletPoints: [
        "Virtual consultation platforms",
        "Remote monitoring integration",
        "Digital health tools",
        "Telemedicine workflows",
        "Patient portal access"
      ]
    },
    {
      icon: "📊",
      title: "Population Health",
      description: "Manage and improve health outcomes across patient populations.",
      bulletPoints: [
        "Health analytics and insights",
        "Population risk assessment",
        "Preventive care programs",
        "Quality measure tracking",
        "Public health reporting"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Healthcare Solutions"
      subtitle="Patient-Centric Healthcare Technology"
      description="Improve patient outcomes and operational efficiency with Salesforce healthcare solutions. Connect patients, providers, and care teams for better health experiences."
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our healthcare industry solutions help providers deliver patient-centered care while improving operational efficiency. We understand HIPAA compliance requirements and design solutions that protect patient data while enabling better health outcomes."
    />
  );
};

export default Healthcare;
