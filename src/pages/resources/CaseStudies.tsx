import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { CaseStudyModal } from './CaseStudyModal';
import mainphoto from './resourceimg/Main Photo.webp';
import case1 from './resourceimg/Case1.png';
import case2 from './resourceimg/Case2.png';
import case3 from './resourceimg/Case3.png';

interface CaseStudyItem {
  title: string;
  img: string;
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
      "img": case1,
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
      "img": case2,
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
      "img": case3,
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="w-full px-4 py-8 sm:py-12 bg-gradient-to-br from-white to-blue-200">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Mobile Image - shown on all screens except desktop */}
            <div className="lg:hidden w-full flex justify-center mb-4 sm:mb-6">
              <img
                src={mainphoto}
                alt="Main header"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg object-cover"
              />
            </div>

            <div className="lg:w-2/3 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
                Case Studies
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[rgba(42,50,132,1)] mb-3 sm:mb-4">
                Success Stories & Client Transformations
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Explore real-world examples of how 4CECloud Labs has helped organizations achieve their digital transformation goals through innovative Salesforce solutions.
              </p>
            </div>

            {/* Desktop Image - hidden on mobile */}
            <div className="hidden lg:block lg:w-1/3">
              <img
                src={mainphoto}
                alt="Main header"
                className="w-full max-w-md h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="w-full px-4 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <img
                    src={caseStudy.img}
                    alt={caseStudy.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-[rgba(42,50,132,1)] mb-2 sm:mb-3">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                      {caseStudy.overview.description}
                    </p>
                    <button
                      onClick={() => handleReadMore(caseStudy)}
                      className="w-full sm:w-auto text-center bg-[rgba(42,50,132,1)] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full  transition-colors text-sm sm:text-base"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[rgba(42,50,132,1)] text-white w-full">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Let our experts help you implement Development & Customization for
              your business.
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </footer>

      {isModalOpen && selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CaseStudies;