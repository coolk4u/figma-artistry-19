
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Implementation = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Implementation"
      subtitle="End-to-End Salesforce Deployment"
      description="Transform your business with comprehensive Salesforce implementation services. From initial setup to go-live, we ensure your Salesforce platform is configured to meet your specific business needs."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
      features={[
        "Standard feature utilization to get the best out of the investment"
"Tailored Salesforce setup, configuration, and cross-system integration"
"Scalable architecture for complex and enterprise-grade rollouts"
"Rapid Implementation Frameworks for quicker time-to-market"
"Legacy modernization and seamless platform migrations"
"Domain-aligned delivery using industry best practices"
"Reusable accelerators and pre-built assets to jumpstart delivery"
"DevOps-integrated agile execution"
      ]}
      benefits={[
        "Faster implementation timeline",
        "Reduced deployment risks",
        "Seamless data migration",
        "Optimized system performance",
        "Enhanced user productivity",
        "Improved data quality",
        "Scalable foundation",
        "Ongoing support and maintenance"
      ]}
      additionalInfo="Our implementation methodology follows Salesforce best practices to ensure your deployment is successful, on-time, and within budget. We focus on creating a solid foundation that supports your current needs while being flexible for future growth."
    />
  );
};

export default Implementation;
