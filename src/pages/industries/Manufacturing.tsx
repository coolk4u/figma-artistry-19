
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Manufacturing = () => {
  const expertiseCards = [
    {
      icon: "📈",
      title: "Sales Forecasting & Planning",
      description: "Advanced forecasting tools for better demand planning and inventory management.",
      bulletPoints: [
        "Demand forecasting analytics",
        "Sales pipeline management",
        "Production planning integration",
        "Inventory optimization",
        "Revenue forecasting"
      ]
    },
    {
      icon: "🔗",
      title: "Supply Chain Management",
      description: "Streamline supply chain operations and improve visibility.",
      bulletPoints: [
        "Supplier relationship management",
        "Supply chain visibility",
        "Procurement automation",
        "Quality management systems",
        "Logistics coordination"
      ]
    },
    {
      icon: "🤝",
      title: "Channel Partner Management",
      description: "Optimize partner relationships and channel performance.",
      bulletPoints: [
        "Distributor management",
        "Partner portal solutions",
        "Channel performance analytics",
        "Co-op marketing programs",
        "Deal registration systems"
      ]
    },
    {
      icon: "🔧",
      title: "Service & Warranty",
      description: "Comprehensive service management and warranty tracking solutions.",
      bulletPoints: [
        "Service order management",
        "Warranty claim processing",
        "Field service optimization",
        "Parts management",
        "Service analytics"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Manufacturing Solutions"
      subtitle="Digital Transformation for Manufacturing"
      description="Accelerate your manufacturing operations with Salesforce solutions designed for the manufacturing industry. Streamline processes, improve customer relationships, and drive operational excellence."
      image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Our manufacturing industry expertise helps companies modernize their operations, improve customer relationships, and drive growth. We understand the unique challenges of manufacturing and deliver solutions that address complex business requirements."
    />
  );
};

export default Manufacturing;
