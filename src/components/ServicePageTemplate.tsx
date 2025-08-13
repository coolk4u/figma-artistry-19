import React from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  expertiseCards: ExpertiseCard[];
  additionalInfo?: string;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  image,
  expertiseCards,
  additionalInfo,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 h-[66vh]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  <span className="text-gray-800">{title}</span>
                </h1>
                <h2 className="text-2xl text-blue-600 mb-6">{subtitle}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full max-w-[350px] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Cards Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expertiseCards.map((card, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-500">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="space-y-2">
                    {card.bulletPoints.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          {additionalInfo && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Choose {title}?
              </h3>
              <p className="text-gray-600 leading-relaxed">{additionalInfo}</p>
            </div>
          )}

          {/* Call to Action */}
          {/* Footer */}
          <div className="pb-20">
            <div className="text-center bg-blue-950 p-[6vh] text-white rounded-lg max-w-[1350px] w-[90vw] mx-auto">
              <div className="pt-5">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg mb-6">
                  Let our experts help you implement Development & Customization
                  for your business.
                </p>
                <button className="bg-white text-blue-600 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
