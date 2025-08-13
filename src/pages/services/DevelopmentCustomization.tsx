
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const DevelopmentCustomization = () => {
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
                  <span className="text-gray-800">Dev. & Customization</span>
                </h1>
                <h2 className="text-2xl text-blue-600 mb-6">Tailored Salesforce Solutions</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Extend Salesforce capabilities with custom development and tailored solutions. Our development team creates bespoke applications and customizations that address your unique business requirements.
                </p>
              </div>
              <div className="flex justify-center">
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Development & Customization" className="w-full max-w-md rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Custom Apex</h3>
                <p className="text-gray-600 text-sm">Advanced development solutions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Lightning Components</h3>
                <p className="text-gray-600 text-sm">Modern UI development</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Visualforce</h3>
                <p className="text-gray-600 text-sm">Custom page development</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Custom Applications</h3>
                <p className="text-gray-600 text-sm">Tailored business solutions</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Development Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Custom Apex development</li>
                  <li>• Lightning Web Components</li>
                  <li>• Visualforce pages</li>
                  <li>• Custom applications</li>
                  <li>• Workflow automation</li>
                  <li>• Trigger development</li>
                  <li>• Integration development</li>
                  <li>• Mobile app development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Development Excellence</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our development team specializes in creating custom solutions that extend Salesforce's native capabilities. We follow Salesforce development best practices and coding standards to ensure your customizations are maintainable, scalable, and upgrade-safe.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From simple workflow automation to complex custom applications, we deliver solutions that perfectly align with your business processes and user requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCustomization;
