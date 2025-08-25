import React from "react";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import pic1 from "./acceleratorsimg/Main Photo.jpg";
import pic2 from "./acceleratorsimg/DataMBA.png";
import pic3 from "./acceleratorsimg/Optimax.png";
import pic4 from "./acceleratorsimg/DMS365.png";

const Accelerators = () => {
  const [selectedAccelerator, setSelectedAccelerator] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (accelerator) => {
    setSelectedAccelerator(accelerator);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAccelerator(null);
  };

  const accelerators = [
    {
      icon: "📊",
      title: "Data MBA",
      description:
        "Seamlessly integrate, cleanse, and transform data with customizable, high-performance workflows for continuous business adaptability.",
      keyFeatures: [
        "Multi-source data import",
        "Metadata import",
        "Parallel & scheduled jobs",
        "Continuous integration",
      ],
      img: pic2,
      details: [
        "Configure routine data interfaces leveraging data integration framework.",
        "Ready-made jobs to import metadata/configurations such as products, price books etc.",
        "Transformations available for standard objects, extendable as per customer needs.",
        "Configurable rules, Scheduled and parallel jobs for better performance.",
        "Supports ongoing data integration and updates, to ensure continuous value and adaptability.​",
      ],
    },
    {
      icon: "⚡",
      title: "OptiMax",
      description:
        "Optimax delivers complete Salesforce optimization with diagnostics, security fixes, cost efficiency, and performance-enhancing solutions.",
      keyFeatures: [
        "Health & Performance Optimization​",
        "Security Vulnerabilities Remediation",
        "Customization Optimization",
        "Code Quality improvements​",
      ],
      img: pic3,
      details: [
        "Comprehensive Salesforce Health Check – Identify performance, security, and code quality gaps with detailed diagnostics.",
        "Security Vulnerability Remediation – Fix weaknesses in password policies, user management, and session settings to safeguard data.",
        "License & Usage Optimization – Eliminate unused licenses and improve system cost-efficiency.",
        "Actionable Insights & Reports – Get issue impact analysis, prioritization, and clear remediation plans.",
      ],
    },
    {
      icon: "🔧",
      title: "DMS 365 Solution",
      description:
        "DMS 365 empowers distribution with seamless ordering, real-time insights, automated claims, and effortless ERP-CRM integration.",
      keyFeatures: [
        "End-to-End Distribution Management",
        "Omnichannel Partner Portals",
        "Real-Time Sales & Inventory Dashboards",
        "Automated Schemes & Claims",
      ],
      img: pic4,
      details: [
        "End-to-End Distribution Management – Streamline ordering, inventory, billing, and returns across distributors, dealers, and retailers.",
        "Omnichannel Partner Engagement – Self-service web and mobile portals for order placement, stock visibility, claims, and scheme tracking.",
        "Intelligent Sales & Inventory Insights – Real-time dashboards for sales trends, stock coverage, and demand forecasting.",
        "Automated Schemes & Claims Processing – Configure, launch, and settle trade schemes and claims with minimal manual intervention.",
        "Seamless ERP & CRM Integration – Connect effortlessly with Salesforce, SAP, Oracle, and other systems for data accuracy.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left order-last lg:order-first">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                  <span className="text-gray-800">Accelerators and </span>
                  <span className="text-[rgba(42,50,132,1)]">App Solutions</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We leverage our in-house built accelerators and frameworks,
                  powered by our Center of Excellence (COE), to deliver successful
                  engagements across Implementations, Managed Services, and
                  Consulting.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={pic1}
                  alt="Accelerators and App Solutions"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[rgba(42,50,132,1)] mb-3 md:mb-4 underline">
              Accelerators
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto">
              We leverage our in-house built accelerators and frameworks,
              powered by our Center of Excellence (COE), to deliver successful
              engagements across Implementations, Managed Services, and
              Consulting.
            </p>
          </div>

          {/* Accelerators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {accelerators.map((accelerator, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 h-2"></div>
                <div className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">
                    {accelerator.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[rgba(42,50,132,1)] mb-2 sm:mb-3">
                    {accelerator.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    {accelerator.description}
                  </p>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {accelerator.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs sm:text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openModal(accelerator)}
                    className="w-full bg-[rgba(42,50,132,1)] text-white py-1 sm:py-2 rounded-full transition-colors text-xs sm:text-sm"
                  >
                    More Features
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedAccelerator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 h-2"></div>
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className="flex items-center">
                  <div className="text-3xl sm:text-4xl mr-3 sm:mr-4">
                    {selectedAccelerator.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[rgba(42,50,132,1)]">
                    {selectedAccelerator.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
                {/* Left side - Text content */}
                <div className="lg:w-1/2">
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl">
                    {selectedAccelerator.description}
                  </p>

                  {/* Mobile-only image */}
                  <div className="lg:hidden mb-4 sm:mb-6 flex justify-center">
                    <img
                      src={selectedAccelerator.img}
                      alt={selectedAccelerator.title}
                      className="max-h-48 sm:max-h-60 w-auto object-contain rounded-lg shadow-md"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-[rgba(42,50,132,1)] text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                      Detailed Features
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {selectedAccelerator.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs sm:text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop-only image (right side) */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
                  <img
                    src={selectedAccelerator.img}
                    alt={selectedAccelerator.title}
                    className="max-h-64 md:max-h-80 w-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-full mt-4 sm:mt-6 bg-[rgba(42,50,132,1)] text-white py-1 sm:py-2 rounded-full transition-colors text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-blue-950 text-white w-full">
        <div className="text-center bg-blue-950 p-6 sm:p-[5vh] text-white rounded-lg max-w-6xl w-[90vw] mx-auto">
          <div className="pt-3 sm:pt-5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Let our experts help you implement Development & Customization for
              your business.
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-10 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accelerators;