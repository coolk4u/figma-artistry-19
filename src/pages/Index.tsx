import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SalesforceServices } from "@/components/SalesforceServices";
import { Testimonials } from "@/components/Testimonials";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PledgeSection } from "@/components/PledgeSection";
import { NewsBlogs } from "@/components/NewsBlogs";
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
  // {
  //   name: "Analytics Cloud",
  //   icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
  // },
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
  // {
  //   name: "Platform",
  //   icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2e1e9387ab35ae9a2b45a5807fb7d32e5b708fa2?placeholderIfAbsent=true",
  // },
  {
    name: "MuleSoft",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mulesoft.svg",
  },
];

const Index = () => {
  return (
    <div className="bg-background flex flex-col overflow-hidden items-stretch min-h-screen">
      <div className="pb-5">
      <Navigation />

      </div>
      <Hero />
      <section className="py-16 bg-background">
        <ServicesGrid />
      </section>
      <main className="flex-1">
        {/* <About /> */}
        <SalesforceServices />
        <Testimonials />

        {/* <PledgeSection /> */}
        {/* <NewsBlogs /> */}
        <div className="pt-14">
        <AIStrategy />
        </div>
      </main>

      {/* Salesforce Services Icons Section */}
      {/* <div className="bg-white py-6 md:py-8 px-4 mt-6 mb-6 md:mt-10 md:mb-12">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: 4 columns grid */}
          <div className="grid grid-cols-4 gap-3 md:hidden">
            {salesforceServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-lg overflow-hidden mb-1 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-medium text-gray-700 text-center leading-tight">
                  {service.name}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop: Single row */}
          {/* <div className="hidden md:flex justify-center items-center gap-4 lg:gap-6 flex-wrap">
            {salesforceServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg overflow-hidden mb-2 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs lg:text-sm font-medium text-gray-700 text-center">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Index;
