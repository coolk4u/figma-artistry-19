import React from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Consulting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  <span className="text-gray-800">Consulting</span>
                </h1>
                <h2 className="text-2xl text-blue-600 mb-6">
                  Strategic Salesforce Guidance
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Navigate your Salesforce journey with expert consulting
                  services. Our certified consultants help you design, optimize,
                  and scale your Salesforce implementation to achieve maximum
                  business value.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Consulting"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Business Process Optimization
                </h3>
                <p className="text-gray-600 text-sm">
                  Streamline workflows and processes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Salesforce Cloud Advisory
                </h3>
                <p className="text-gray-600 text-sm">
                  Expert guidance on cloud solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Change Management
                </h3>
                <p className="text-gray-600 text-sm">
                  User Adoption strategies
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Salesforce Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Consulting for seamless integrations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Consulting Services
                </h3>
                <ul className="space-y-3 text-gray-600">
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
                <h3 className="text-xl font-semibold mb-4">Strategic Value</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our consulting services provide the strategic foundation for
                  successful Salesforce implementations. We work closely with
                  your team to understand your unique business requirements and
                  design solutions that drive growth and efficiency.
                </p>
                <p className="text-gray-600 leading-relaxed">
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
      <div className="pb-20">
        <div className="text-center bg-blue-950 p-[6vh] text-white rounded-lg max-w-[1350px] w-[90vw] mx-auto">
          <div className="pt-5">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Let our experts help you implement Development & Customization for
              your business.
            </p>
            <button className="bg-white text-blue-600 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
