
import React from 'react';
import { ResourcePageTemplate } from '@/components/ResourcePageTemplate';
import pic1 from './resourceimg/Pic1.jpeg';
import pic2 from './resourceimg/Pic2.png';
import pic3 from './resourceimg/Pic3.png';
import pic4 from './resourceimg/Pic4.png';
import pic5 from './resourceimg/Pic5.png';
import pic6 from './resourceimg/Pic6.png';


const Blog = () => {
  const blogPosts = [
    {
      title: "Salesforce RLM: Going Beyond CPQ—The Future of Revenue Management",
      description: "A next-gen monetization engine—unifying product modeling, dynamic pricing, subscriptions, and compliance. Scale smarter. Future-proof revenue.",
      date: "July 30, 2025",
      image: pic1,
      link: "https://www.linkedin.com/pulse/salesforce-rlm-going-beyond-cpqthe-future-revenue-management-nvx7c/?trackingId=QfODwItofawRTuMw1l2wmg%3D%3D"
    },
    {
      title: "Intelligent Quote: How AgentForce and Salesforce RLM Are Redefining Sales",
      description: "AI-powered Intelligent Quote (AgentForce + Salesforce) crushes slow, manual quoting—delivering instant. Close deals in minutes, not days.",
      date: "July 18, 2025",
      image: pic2,
      link: "https://www.linkedin.com/pulse/intelligent-quote-how-agentforce-salesforce-rlm-redefining-wccyc/?trackingId=SBhOTFLPzGiaZj5QoNWn%2Bw%3D%3D"
    },
    {
      title: "Introduction to Revenue Lifecycle Management (RLM)",
      description: "Salesforce RLM revolutionizes revenue—automating quotes, billing, and renewals for seamless, scalable growth. Ready to transform?",
      date: "June 27, 2025",
      image: pic3,
      link: "https://www.linkedin.com/pulse/introduction-revenue-lifecycle-management-rlm-4cecloud-labs-51xfc/?trackingId=tlRvD9K83alnVHSg%2FJzqSg%3D%3D"
    },
    {
      title: "Accelerating Salesforce CPQ/RLM Data Migration: The Power of Data MBA",
      description: "RLM data fuels quotes & renewals—but migration is risky. Our Data MBA accelerator ensures seamless, error-free Salesforce CPQ transitions. Watch the demo!",
      date: "June 20, 2025",
      image: pic4,
      link: "https://www.linkedin.com/pulse/accelerating-salesforce-cpqrlm-data-migration-power-mba-qimtc/?trackingId=U49LnvFI%2F1ss867EgSd%2Fcw%3D%3D"
    },
    {
      title: "Sustainability in Action: How 4CECloud Labs is Building a Climate-Conscious Cloud Consulting Practice",
      description: "4CECloud Labs: Salesforce-driven, cloud-native & climate-conscious. We deliver digital transformation sustainably—minimizing footprints.",
      date: "June 13, 2025",
      image: pic5,
      link: "https://www.linkedin.com/pulse/sustainability-action-how-4cecloud-labs-building-climate-conscious-lv0cc/?trackingId=0qV2d65tOn0Al%2BhWYuvTzg%3D%3D"
    },
    {
      title: "Digital Lending Transformation for a Banking Institution",
      description: "4CECloud Labs redefines digital lending on Salesforce: AI-powered, paperless, 60% faster approvals—seamless from application to disbursement. Elevate CX & efficiency.",
      date: "May 30, 2025",
      image: pic6,
      link: "https://www.linkedin.com/pulse/digital-lending-transformation-banking-institution-4cecloud-labs-gq2mc/?trackingId=93PfWGOMGC9ZYgyDt1x%2B%2FA%3D%3D"
    }
  ];

  return (
    <ResourcePageTemplate
      title="Blog"
      subtitle="Insights, Tips & Industry Expertise"
      description="Stay informed with the latest insights, best practices, and thought leadership from our Salesforce experts. Discover actionable advice for your digital transformation journey."
      items={blogPosts}
    />
  );
};

export default Blog;
