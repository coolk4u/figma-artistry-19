import React, { useState } from 'react';
import { ResourcePageTemplate } from '@/components/ResourcePageTemplate';
import { CaseStudyModal } from './CaseStudyModal';
import case1 from './resourceimg/Case1.png';
import case2 from './resourceimg/Case2.png';
import case3 from './resourceimg/Case3.png';

interface CaseStudyItem {
  title: string;
  img: string; // Added image field
  overview: {
    description: string;
    keyHighlights: string[];
  };
  detailedStudy: {
    clientBackground: string;
    challenges: string[];
    solution: string[];
    outcomes: string[];
    technologiesUsed: string[];
  };
}

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies: CaseStudyItem[] = [
    {
      "title": "Salesforce Implementation – MYK Laticrete",
      "img": case1, // Add your actual image URL
      "overview": {
        "description": "Digitally transformed sales operations for MYK Laticrete, India, enabling real-time visibility, improved efficiency, and stronger distributor/retailer engagement.",
        "keyHighlights": [
          "Field sales automation via Salesforce One App",
          "Distributor portal using Salesforce Experience Cloud",
          "Retailer mobile app powered by Heroku",
          "Real-time reward scheme tracking",
          "Faster order capture & approval cycles"
        ]
      },
      "detailedStudy": {
        "clientBackground": "MYK Laticrete is a leading construction solutions provider in India, serving distributors and retailers nationwide. The company sought to modernize its sales processes and improve partner engagement.",
        "challenges": [
          "No system to track sales visits or capture staff geolocations",
          "Manual, email/phone-driven order capturing causing distribution complexities",
          "No visibility into secondary orders or distributor stock levels",
          "Inability to evaluate reward scheme effectiveness",
          "Distributors/retailers lacked a digital channel for orders, past purchases, and reward tracking"
        ],
        "solution": [
          "Salesforce One App: Empowered field sales with daily visit planning, check-in/out, and activity tracking",
          "Distributor Portal: Built on Salesforce Experience Cloud for orders, invoices, and service automation with check out features like e-commerce apps",
          "Scheme Engine: Developed the core-incentive engine for all channel apps for promotional offers and loyalty programs",
          "Retailer Mobile App: Developed on Heroku for orders, distributor lookup, reward scheme access, and shopping cart functionality"
        ],
        "outcomes": [
          "10X faster retailer/distributor order capture",
          "3X faster service request resolution",
          "Real-time reward scheme visibility",
          "30% reduction in fraudulent incentive claims",
          "5X faster approval management",
          "Leadership dashboards for complete operational visibility"
        ],
        "technologiesUsed": [
          "Salesforce Sales Cloud",
          "Salesforce Experience Cloud",
          "Salesforce One App",
          "Heroku"
        ]
      }
    },
    {
      "title": "Financial Services Cloud Implementation",
      "img": case2, // Add your actual image URL
      "overview": {
        "description": "Revolutionized mobile and portal banking experience for a leading bank, enabling digital-first customer engagement and operational efficiency.",
        "keyHighlights": [
          "Rich, intuitive mobile banking app UX for iOS & Android",
          "Digital Lending Solution leveraging Financial Service Cloud",
          "Self-service customer portal for loans & application tracking",
          "Automated workflows from application filing to loan disbursals"
        ]
      },
      "detailedStudy": {
        "clientBackground": "A major financial services provider aimed to replace outdated systems with modern, scalable Salesforce-based solutions to boost customer engagement, streamline lending operations, and enable marketing automation.",
        "challenges": [
          "Legacy mobile app with limited flexibility & operational challenges",
          "Scalability bottlenecks due to outdated tech stack",
          "Manual Excel-based processes for lending applications",
          "Inefficient legacy workflows causing delays",
          "No customer portal for loan application tracking",
          "Traditional marketing approach limiting agility and insight",
          "Inability to leverage social media for lead generation"
        ],
        "solution": [
          "Mobile Banking App Revamp: Rich, intuitive UX with iOS & Android availability (10,000+ users)",
          "Salesforce Experience Cloud: Self-service customer portal for loans, tracking, and approvals",
          "Financial Services Cloud: Unified FSC platform for banking/lending teams to perform Eligibility checks, Adjudication, Underwriting, Compliance, Credit Checks and Loan Disbursement.",
          "Marketing Cloud Automation: Integrated with Salesforce & core banking systems via email, SMS, and social channels",
          "Expanded Workflows: Lending, commercial banking, and e-signture processes enabled on Salesforce"
        ],
        "outcomes": [
          "Increased user adoption of mobile app",
          "Higher download & usage rates on both app stores",
          "Reduced customer queries & complaints",
          "Automated workflows replacing Excel-based processes",
          "Improved efficiency via reduced dependency on physical collaboration",
          "Targeted campaigns generating better-qualified leads",
          "Unified customer communication platform (email/SMS)"
        ],
        "technologiesUsed": [
          "Salesforce Financial Services Cloud",
          "Salesforce Experience Cloud",
          "Salesforce Mobile Publisher",
          "Marketing Cloud",
          "DocuSign"
        ]
      }
    },
    {
      "title": "Salesforce Implementation – Wiley",
      "img": case3, // Add your actual image URL
      "overview": {
        "description": "Digitally streamlined service operations and contract lifecycle management for Wiley, enabling faster time-to-market, improved agent productivity, and seamless partner onboarding.",
        "keyHighlights": [
          "Centralized Service Console with SLA-based workflows",
          "Opportunity-to-contract automation via Sales Cloud",
          "Streamlined case/order flows using Agentforce AI",
          "Seamless ERP integrations creating unified source of truth"
        ]
      },
      "detailedStudy": {
        "clientBackground": "Wiley is a global leader in research and education, empowering learners and institutions with world-class content, platforms, and services. Wiley sought a strategic Salesforce partner to optimize operations and co-own delivery across its business units.",
        "challenges": [
          "High attrition at third-party vendors disrupted core services",
          "Existing tech lacked intelligence and flexibility",
          "Manual contract lifecycle management slowed sales and legal processes",
          "Needed deep Salesforce expertise with shared delivery ownership"
        ],
        "solution": [
          "Trusted Partnership: Scaled a 15-member team within 1 year with flexible engagement models",
          "Service Cloud Rollout: Centralized Service Console with SLA-based workflows and omni-channel integration",
          "Sales Cloud + CLM: Implemented opportunity-to-contract automation and integrated contract lifecycle management",
          "Agentforce (AI Solutions): Streamlined case/order flows with smart routing and live agent handoff",
          "Integrations: Connected Salesforce with ERP & mid-office systems for unified data"
        ],
        "outcomes": [
          "5× agent productivity boost via unified workspace",
          "2× faster sprint-based product releases",
          "Zero manual effort in product launch through seamless CLM integration",
          "21% faster CLM processing with 90% accuracy",
          "Minimal IT involvement for partner onboarding",
          "25% CSAT improvement through real-time service visibility"
        ],
        "technologiesUsed": [
          "Salesforce Sales Cloud",
          "Service Cloud",
          "Contract Lifecycle Management (Conga)",
          "Agentforce (AI)",
          "ERP Integrations"
        ]
      }
    }
  ];

  const handleReadMore = (caseStudy: CaseStudyItem) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const resourceItems = caseStudies.map((caseStudy) => ({
    title: caseStudy.title,
    description: caseStudy.overview.description,
    date: "", // Add actual date if available
    image: caseStudy.img, // Using the img from caseStudy
    onClick: () => handleReadMore(caseStudy)
  }));

  return (
    <>
      <ResourcePageTemplate
        title="Case Studies"
        subtitle="Success Stories & Client Transformations"
        description="Explore real-world examples of how 4CE Cloud Labs has helped organizations achieve their digital transformation goals through innovative Salesforce solutions."
        items={resourceItems}
      />
      {isModalOpen && selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default CaseStudies;