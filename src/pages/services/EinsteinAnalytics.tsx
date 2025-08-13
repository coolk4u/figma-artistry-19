
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const EinsteinAnalytics = () => {
  const expertiseCards = [
    {
      icon: "🤖",
      title: "AI-Powered Discovery",
      description: "Leverage artificial intelligence to uncover hidden patterns and insights in your data.",
      bulletPoints: [
        "Automated data discovery",
        "Pattern recognition",
        "Anomaly detection",
        "Predictive modeling",
        "Machine learning algorithms"
      ]
    },
    {
      icon: "📊",
      title: "Interactive Dashboards",
      description: "Create dynamic, interactive dashboards for real-time business insights.",
      bulletPoints: [
        "Custom dashboard development",
        "Real-time data visualization",
        "Interactive filters and controls",
        "Mobile-responsive design",
        "Drill-down capabilities"
      ]
    },
    {
      icon: "🔮",
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes with advanced predictive capabilities.",
      bulletPoints: [
        "Forecasting models",
        "Trend analysis",
        "Risk prediction",
        "Opportunity scoring",
        "Statistical modeling"
      ]
    },
    {
      icon: "🔄",
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources for comprehensive analytics.",
      bulletPoints: [
        "Multi-source data connection",
        "Data transformation",
        "Real-time synchronization",
        "Data quality management",
        "ETL process optimization"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Einstein Analytics"
      subtitle="AI-Powered Business Intelligence"
      description="Unlock the power of your data with Einstein Analytics. Transform raw data into actionable insights with AI-powered analytics, interactive dashboards, and predictive capabilities."
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      expertiseCards={expertiseCards}
      additionalInfo="Einstein Analytics combines the power of artificial intelligence with comprehensive data visualization to help you discover hidden patterns, predict future outcomes, and make smarter business decisions. Our implementation ensures you maximize the value of your data assets."
    />
  );
};

export default EinsteinAnalytics;
