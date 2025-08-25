import React from "react";
import { Navigation } from "@/components/Navigation";

interface ResourceItem {
  title: string;
  description: string;
  date: string;
  image: string;
  onClick?: () => void;
}

interface ResourcePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  items: ResourceItem[];
  mainPhoto?: string;
}

export const ResourcePageTemplate: React.FC<ResourcePageTemplateProps> = ({
  title,
  subtitle,
  description,
  items,
  mainPhoto,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section with proper spacing */}
        <section className="container mx-auto px-4 sm:px-6 h-[330px] pt-8 pb-12 bg-gradient-to-br from-white to-blue-200">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Mobile Image */}
            {mainPhoto && (
              <div className="lg:hidden w-full flex justify-center mb-8">
                <img
                  src={mainPhoto}
                  alt="Main header"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-[350px] h-auto rounded-lg"
                />
              </div>
            )}

            <div className="lg:w-2/3 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
                {title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-[rgba(42,50,132,1)] mb-3 sm:mb-4">
                {subtitle}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                {description}
              </p>
            </div>

            {/* Desktop Image */}
            {mainPhoto && (
              <div className="hidden lg:flex lg:w-1/3 justify-center">
                <img
                  src={mainPhoto}
                  alt="Main header"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-[350px] h-80 rounded-lg"
                />
              </div>
            )}
          </div>
        </section>

        {/* Content Grid with top padding */}
        <section className="container mx-auto px-4 sm:px-6 pb-12 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  {item.date && (
                    <p className="text-xs text-[rgba(42,50,132,1)] mb-2">{item.date}</p>
                  )}
                  <h3 className="text-lg font-bold text-[rgba(42,50,132,1)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <button
                    onClick={item.onClick}
                    className="text-center inline-block bg-[rgba(42,50,132,1)] text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors text-sm"
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