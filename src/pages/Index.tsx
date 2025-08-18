import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SalesforceServices } from "@/components/SalesforceServices";
import { Testimonials } from "@/components/Testimonials";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AIStrategy } from "@/components/AIStrategy";
import { Footer } from "@/components/Footer";

const salesforceServices = [
  {
    name: "Sales Cloud",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3266e8ba0888c0a2567696236d844368701cc8f9?placeholderIfAbsent=true",
  },
  {
    name: "Service Cloud",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ab8d7b283ae7d99d86e3646e6390fa17a9677b1e?placeholderIfAbsent=true",
  },
  {
    name: "Marketing Cloud",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
  },
  {
    name: "Agentforce",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cb9b1af083adf2a31c8c8ce3965555a34b3cda69?placeholderIfAbsent=true",
  },
  {
    name: "Experience Cloud",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dba01bf6d130e026b8276bc752fe1e3af67ae836?placeholderIfAbsent=true",
  },
  {
    name: "Financial Services",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f8d22255cc8512102cf1640ba84e07bfb9ab5ef2?placeholderIfAbsent=true",
  },
  {
    name: "Data Cloud",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
  },
  {
    name: "Health Cloud",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dbbed4497020afa2fcb104eaf38b7923f8bb9d83?placeholderIfAbsent=true",
  },
  {
    name: "Manufacturing Cloud",
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2e1e9387ab35ae9a2b45a5807fb7d32e5b708fa2?placeholderIfAbsent=true",
  },
  {
    name: "MuleSoft",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mulesoft.svg",
  },
];

const Index = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen w-full overflow-x-hidden">
      <div className="w-full">
        <Navigation />
      </div>

      <Hero />

      <section className="py-8 md:py-16 bg-background w-full">
        <ServicesGrid />
      </section>

      <main className="flex-1 w-full">
        <SalesforceServices />
        <Testimonials />

        <div className="pt-8 md:pt-14">
          <AIStrategy />
        </div>

        {/* Salesforce Services Icons Section - Responsive */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
            {salesforceServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg overflow-hidden mb-2 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
