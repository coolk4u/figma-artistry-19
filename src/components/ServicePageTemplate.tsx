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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-16 lg:py-20 min-h-[50vh] lg:min-h-[66vh] bg-gradient-to-br from-white to-blue-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left order-last lg:order-first">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                  <span className="text-gray-800">{title}</span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-blue-600 mb-4 md:mb-6">
                  {subtitle}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {description}
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full max-w-[280px] sm:max-w-[350px] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Cards Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
            {expertiseCards.map((card, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-xl sm:text-2xl">{card.icon}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-500">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {card.description}
                  </p>
                  <ul className="space-y-1 sm:space-y-2">
                    {card.bulletPoints.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start text-xs sm:text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
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
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                Why Choose {title}?
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {additionalInfo}
              </p>
            </div>
          )}
        </div>

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
    </div>
  );
};