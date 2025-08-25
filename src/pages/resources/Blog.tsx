import React from "react";
import { Navigation } from "@/components/Navigation";
import pic1 from "./resourceimg/Pic1.jpeg";
import pic2 from "./resourceimg/Pic2.png";
import pic3 from "./resourceimg/Pic3.png";
import pic4 from "./resourceimg/Pic4.png";
import pic5 from "./resourceimg/Pic5.png";
import pic6 from "./resourceimg/Pic6.png";
import mainphoto from "./resourceimg/Blog Main Photo.jpeg";

const Blog = () => {
  const blogPosts = [
    {
      title:
        "Salesforce RLM: Going Beyond CPQ—The Future of Revenue Management",
      description:
        "A next-gen monetization engine—unifying product modeling, dynamic pricing, subscriptions, and compliance. Scale smarter. Future-proof revenue.",
      date: "July 30, 2025",
      image: pic1,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/pulse/salesforce-rlm-going-beyond-cpqthe-future-revenue-management-nvx7c/?trackingId=QfODwItofawRTuMw1l2wmg%3D%3D",
          "_blank"
        ),
    },
    {
      title:
        "Intelligent Quote: How AgentForce and Salesforce RLM Are Redefining Sales",
      description:
        "AI-powered Intelligent Quote (AgentForce + Salesforce) crushes slow, manual quoting—delivering instant. Close deals in minutes, not days.",
      date: "July 18, 2025",
      image: pic2,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/pulse/intelligent-quote-how-agentforce-salesforce-rlm-redefining-wccyc/?trackingId=SBhOTFLPzGiaZj5QoNWn%2Bw%3D%3D",
          "_blank"
        ),
    },
    {
      title: "Introduction to Revenue Lifecycle Management (RLM)",
      description:
        "Salesforce RLM revolutionizes revenue—automating quotes, billing, and renewals for seamless, scalable growth. Ready to transform?",
      date: "June 27, 2025",
      image: pic3,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/pulse/introduction-revenue-lifecycle-management-rlm-4cecloud-labs-51xfc/?trackingId=tlRvD9K83alnVHSg%2FJzqSg%3D%3D",
          "_blank"
        ),
    },
    {
      title:
        "Accelerating Salesforce CPQ/RLM Data Migration: The Power of Data MBA",
      description:
        "RLM data fuels quotes & renewals—but migration is risky. Our Data MBA accelerator ensures seamless, error-free Salesforce CPQ transitions. Watch the demo!",
      date: "June 20, 2025",
      image: pic4,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/pulse/accelerating-salesforce-cpqrlm-data-migration-power-mba-qimtc/?trackingId=U49LnvFI%2F1ss867EgSd%2Fcw%3D%3D",
          "_blank"
        ),
    },
    {
      title:
        "Sustainability in Action: How 4CECloud Labs is Building a Climate-Conscious Cloud Consulting Practice",
      description:
        "4CECloud Labs: Salesforce-driven, cloud-native & climate-conscious. We deliver digital transformation sustainably—minimizing footprints.",
      date: "June 13, 2025",
      image: pic5,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/pulse/sustainability-action-how-4cecloud-labs-building-climate-conscious-lv0cc/?trackingId=0qV2d65tOn0Al%2BhWYuvTzg%3D%3D",
          "_blank"
        ),
    },
    {
      title: "Digital Lending Transformation for a Banking Institution",
      description:
        "4CECloud Labs redefines digital lending on Salesforce: AI-powered, paperless, 60% faster approvals—seamless from application to disbursement. Elevate CX & efficiency.",
      date: "May 30, 2025",
      image: pic6,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/pulse/digital-lending-transformation-banking-institution-4cecloud-labs-gq2mc/?trackingId=93PfWGOMGC9ZYgyDt1x%2B%2FA%3D%3D",
          "_blank"
        ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section with Gradient Background */}
        <section className="w-full bg-gradient-to-br from-white to-blue-200 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* Mobile Image */}
              {mainphoto && (
                <div className="lg:hidden w-full flex justify-center mb-8">
                  <img
                    src={mainphoto}
                    alt="Blog header"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-[350px] h-auto rounded-lg shadow-lg border-4 border-white"
                  />
                </div>
              )}

              <div className="lg:w-2/3 w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
                  Blog
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[rgba(42,50,132,1)] mb-3 sm:mb-4">
                  Insights, Tips & Industry Expertise
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                  Stay informed with the latest insights, best practices, and
                  thought leadership from our Salesforce experts. Discover
                  actionable advice for your digital transformation journey.
                </p>
              </div>

              {/* Desktop Image */}
              {mainphoto && (
                <div className="hidden lg:flex lg:w-1/3 justify-center">
                  <img
                    src={mainphoto}
                    alt="Blog header"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-[350px] h-auto rounded-lg shadow-xl border-4 border-white"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 sm:px-6 pb-12 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  {post.date && (
                    <p className="text-xs text-[rgba(42,50,132,1)] mb-2">{post.date}</p>
                  )}
                  <h3 className="text-lg font-bold text-[rgba(42,50,132,1)] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {post.description}
                  </p>
                  <button
                    onClick={post.onClick}
                    className="text-center inline-block bg-[rgba(42,50,132,1)] text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors text-sm self-start"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[rgba(42,50,132,1)] text-white w-full">
        <div className="text-center bg-[rgba(42,50,132,1)] p-12 text-white max-w-[1351px] w-[90vw] mx-auto">
          <div className="pt-5">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg mb-6">
              Let our experts help you implement Development & Customization for
              your business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base md:text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
