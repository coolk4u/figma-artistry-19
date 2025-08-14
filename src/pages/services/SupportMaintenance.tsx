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


const SupportMaintenance = () => {
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
                  <span className="text-gray-800">Maintenance and Support</span>
                </h1>
                <h2 className="text-2xl text-blue-600 mb-6">
                  Ongoing Salesforce Excellence
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Keep your Salesforce platform running at peak performance with
                  our comprehensive support and maintenance services. From
                  troubleshooting to enhancements, we ensure your system
                  continues to deliver value.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Support & Maintenance"
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
                  Proactive Monitoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Salesforce Monitoring & Maintenance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Release Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Seamless platform updates
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">User Support</h3>
                <p className="text-gray-600 text-sm">
                  Issue Resolution & Performance Optimization
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Custom Functionality
                </h3>
                <p className="text-gray-600 text-sm">
                  Enhancements & Custom Features
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Support Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Proactive Salesforce Monitoring & Maintenance</li>
                  <li>• Release Management</li>
                  <li>• User Support & Issue Resolution</li>
                  <li>• Performance Optimization</li>
                  <li>• Custom Functionality Enhancements</li>
                  <li>• Data Integrity & Security Management</li>
                  <li>• Reports & Dashboard Management</li>
                  <li>• Compliance & Regulatory Support</li>
                  <li>• User Training & Knowledge Transfer</li>
                  <li>• Scalability & Future-Proofing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Service Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our support and maintenance services provide peace of mind,
                  allowing you to focus on your core business while we ensure
                  your Salesforce platform remains secure, up-to-date, and
                  performing optimally.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We offer flexible support plans to meet your specific needs,
                  from basic maintenance to comprehensive managed services,
                  ensuring your Salesforce investment continues to drive
                  business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-950 text-white w-full mx-auto">
        <div className="text-center bg-blue-950 p-[5vh] text-white rounded-lg max-w-[1351px] w-[90vw] mx-auto">
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

export default SupportMaintenance;
