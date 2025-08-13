
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const SalesforceIntegration = () => {
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
                  <span className="text-gray-800">Salesforce Integration</span>
                </h1>
                <h2 className="text-2xl text-blue-600 mb-6">Seamless System Connectivity</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Connect Salesforce with your existing systems and applications to create a unified business ecosystem. Our integration services ensure data flows seamlessly across all your business platforms.
                </p>
              </div>
              <div className="flex justify-center">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Salesforce Integration" className="w-full max-w-md rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">API Integration</h3>
                <p className="text-gray-600 text-sm">Real-time data synchronization</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Legacy Systems</h3>
                <p className="text-gray-600 text-sm">Seamless connectivity solutions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Third-party Apps</h3>
                <p className="text-gray-600 text-sm">Application integrations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Custom Middleware</h3>
                <p className="text-gray-600 text-sm">Tailored integration solutions</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Integration Capabilities</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• API-based integrations</li>
                  <li>• Real-time data synchronization</li>
                  <li>• Legacy system connectivity</li>
                  <li>• Third-party app integrations</li>
                  <li>• Custom middleware development</li>
                  <li>• Data mapping and transformation</li>
                  <li>• Error handling and monitoring</li>
                  <li>• Security and compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Integration Excellence</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our integration expertise spans across various platforms including ERP systems, marketing automation tools, e-commerce platforms, and custom applications. We design robust, secure, and scalable integration solutions that grow with your business.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you need real-time data synchronization or batch processing, our team ensures seamless connectivity while maintaining data integrity and system performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesforceIntegration;
