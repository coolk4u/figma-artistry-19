
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const DataCloud = () => {
  const expertiseCards = [
    {
      icon: "🔄",
      title: "Real-time Data Integration",
      description: "Connect and unify data from any source in real-time for comprehensive insights.",
      bulletPoints: [
        "Streaming data ingestion",
        "API-first connectivity",
        "Change data capture",
        "Event-driven architecture",
        "Low-latency processing"
      ]
    },
    {
      icon: "👤",
      title: "Customer Profile Unification",
      description: "Create complete customer profiles by merging data from multiple touchpoints.",
      bulletPoints: [
        "Identity resolution",
        "Profile merging algorithms",
        "Cross-channel tracking",
        "Customer journey mapping",
        "Relationship modeling"
      ]
    },
    {
      icon: "🏗️",
      title: "Data Modeling",
      description: "Structure and organize your data for optimal performance and insights.",
      bulletPoints: [
        "Data model design",
        "Schema optimization",
        "Relationship mapping",
        "Performance tuning",
        "Scalability planning"
      ]
    },
    {
      icon: "🎯",
      title: "Calculated Insights",
      description: "Generate actionable insights through advanced analytics and calculations.",
      bulletPoints: [
        "Custom calculations",
        "Aggregated metrics",
        "Trend analysis",
        "Predictive scoring",
        "Business KPIs"
      ]
    },
    {
      icon: "🔒",
      title: "Data Governance",
      description: "Ensure data quality, privacy, and compliance across your organization.",
      bulletPoints: [
        "Privacy controls",
        "Data lineage tracking",
        "Quality monitoring",
        "Compliance frameworks",
        "Access management"
      ]
    },
    {
      icon: "⚡",
      title: "API-first Architecture",
      description: "Leverage modern API architecture for flexible and scalable data access.",
      bulletPoints: [
        "REST and GraphQL APIs",
        "Developer-friendly SDKs",
        "Real-time streaming",
        "Webhook integrations",
        "Custom connectors"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Salesforce Data Cloud"
      subtitle="Unified Customer Data Platform"
      description="Unlock the power of your data with Salesforce Data Cloud, a real-time customer data platform that unifies data from any source to create comprehensive customer profiles and drive personalized experiences."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true"
      expertiseCards={expertiseCards}
      additionalInfo="Data Cloud breaks down data silos to create a unified view of your customers. By connecting data from any source - CRM, marketing automation, e-commerce, mobile apps, and more - you can deliver truly personalized experiences at every customer touchpoint."
    />
  );
};

export default DataCloud;
