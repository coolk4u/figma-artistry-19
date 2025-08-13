
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const Staffing = () => {
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
                  <span className="text-gray-800">Staffing</span>
                </h1>
                <h2 className="text-2xl text-blue-600 mb-6">Flexible Talent Solutions</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Access top Salesforce talent with our flexible staffing solutions. From on-demand FTEs to specialized consulting, we provide the right expertise for your project needs.
                </p>
              </div>
              <div className="flex justify-center">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="Staffing" className="w-full max-w-md rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">On-Demand FTEs</h3>
                <p className="text-gray-600 text-sm">Full-Time Equivalents for immediate deployment</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Talent Pool</h3>
                <p className="text-gray-600 text-sm">Access to pre-vetted Salesforce professionals</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">T-Shaped Model</h3>
                <p className="text-gray-600 text-sm">Cross-functional expertise with deep specialization</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Flex Model</h3>
                <p className="text-gray-600 text-sm">Scalable resources based on project demands</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Staffing Models</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• On-Demand FTEs (Full-Time Equivalents)</li>
                  <li>• Talent Pool access</li>
                  <li>• T-Shaped Model specialists</li>
                  <li>• Flex Model for variable needs</li>
                  <li>• Credits-Based Staffing</li>
                  <li>• Shared Services approach</li>
                  <li>• Hybrid Model flexibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Rapid deployment of skilled resources</li>
                  <li>• Cost-effective talent acquisition</li>
                  <li>• Scalable team expansion</li>
                  <li>• Reduced hiring overhead</li>
                  <li>• Access to specialized skills</li>
                  <li>• Flexible engagement models</li>
                  <li>• Quality assurance processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffing;
