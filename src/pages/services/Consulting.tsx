import React from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const quickLinks = [
  {
    text: "Services",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true",
  },
  {
    text: "Accelerators",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true",
  },
  {
    text: "Case studies",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true",
  },
  {
    text: "Blogs",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/decaf54c1a6bdc1542a29d8c66c6e2ae36108731?placeholderIfAbsent=true",
  },
];

const socialIcons = [
  "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dda4fb2f08faf30cbeeed0d156c661e0641c3211?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2feb42b1ba5e09e83bca0255e189e467f1f509b0?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/50c017c363b3bdefd9175c08354e2060acb0bbf6?placeholderIfAbsent=true",
];

const Consulting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20 bg-gradient-to-br from-white to-blue-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                  <span className="text-gray-800">Consulting</span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-blue-600 mb-4 md:mb-6">
                  Strategic Salesforce Guidance
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Navigate your Salesforce journey with expert consulting
                  services. Our certified consultants help you design, optimize,
                  and scale your Salesforce implementation to achieve maximum
                  business value.
                </p>
              </div>
              <div className="flex justify-center order-first lg:order-last">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Consulting"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                  Business Process Optimization
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Streamline workflows and processes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                  Salesforce Cloud Advisory
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Expert guidance on cloud solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                  Change Management
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  User Adoption strategies
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                  Salesforce Integration
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Consulting for seamless integrations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Consulting Services
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                  <li>• Business Process Optimization</li>
                  <li>• Salesforce Cloud Advisory</li>
                  <li>• Change Management & User Adoption</li>
                  <li>• Salesforce Integration Consulting</li>
                  <li>• Data Migration Strategy</li>
                  <li>• AI & Analytics</li>
                  <li>• Salesforce Health Check & Optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Strategic Value</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Our consulting services provide the strategic foundation for
                  successful Salesforce implementations. We work closely with
                  your team to understand your unique business requirements and
                  design solutions that drive growth and efficiency.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  From initial assessment to ongoing optimization, our
                  consultants ensure your Salesforce investment delivers maximum
                  value while positioning your organization for future success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-950 text-white w-full">
        <div className="text-center bg-blue-950 p-6 sm:p-[5vh] text-white rounded-lg max-w-6xl w-[90vw] mx-auto">
          <div className="pt-3 sm:pt-5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h2>
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

export default Consulting;