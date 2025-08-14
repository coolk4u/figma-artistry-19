
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import education from './industryimg/Education Solutions.jpg';

const Education = () => {
  const expertiseCards = [
    {
      icon: "🎓",
      title: "Student Lifecycle Management",
      description: "Comprehensive management of the entire student journey from recruitment to graduation.",
      bulletPoints: [
        "Recruitment and admissions tracking",
        "Academic progress monitoring",
        "Student engagement analytics",
        "Graduation pathway planning",
        "Alumni relationship management"
      ]
    },
    {
      icon: "📚",
      title: "Academic Operations",
      description: "Streamline academic processes and improve institutional efficiency.",
      bulletPoints: [
        "Course and curriculum management",
        "Faculty collaboration tools",
        "Academic scheduling optimization",
        "Performance analytics",
        "Compliance reporting"
      ]
    },
    {
      icon: "💰",
      title: "Fundraising & Development",
      description: "Build stronger donor relationships and increase fundraising success.",
      bulletPoints: [
        "Donor relationship management",
        "Campaign tracking and analytics",
        "Grant management systems",
        "Alumni engagement programs",
        "Stewardship workflows"
      ]
    },
    {
      icon: "🌐",
      title: "Campus Communities",
      description: "Connect students, faculty, and staff through digital platforms.",
      bulletPoints: [
        "Student portal development",
        "Faculty collaboration spaces",
        "Campus event management",
        "Resource sharing platforms",
        "Communication tools"
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="Education Solutions"
      subtitle="Transforming Educational Experiences"
      description="Empower educational institutions with Salesforce solutions that improve student success, streamline operations, and enhance learning experiences from K-12 to higher education."
      image={education}
      expertiseCards={expertiseCards}
      additionalInfo="Our education industry expertise helps institutions build stronger relationships with students, faculty, and alumni. We deliver solutions that support the entire student journey while providing insights to improve educational outcomes and operational efficiency."
    />
  );
};

export default Education;
