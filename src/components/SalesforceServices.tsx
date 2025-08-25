import React from 'react';

export const SalesforceServices: React.FC = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cf939588ae9bc952984a6bb022e742c30a792968?placeholderIfAbsent=true",
      title: "Implementation Excellence",
      description: "Delivering tailored Salesforce rollouts with speed, scale, and strategic fit."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7990ea3765e16a75eb9fa648266a124399b87fb0?placeholderIfAbsent=true",
      title: "Flexible Salesforce Talent",
      description: "Scaling Salesforce capabilities with the right experts, at the right time"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/b173e7e88916f8015bb149153a053e6ca3aa8d35?placeholderIfAbsent=true",
      title: "Support & Managed Services",
      description: "Delivering seamless issue resolution and user assistance to proactive enhancements"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055683.png",
      title: "Proven Business Transformation",
      description: "18+ years of delivering measurable business value through digital transformation expertise"
    }
  ];

  const features = [
    "🧬 Smarter CRM with AI & Data-Driven Insights",
    "🔧 Maximize Salesforce Power with Native Feature",
    "🌐 Low-Code Solutions Built for Speed & Scale",
    "🔨 Custom Fit Enhancements for Real Business Impact",
    "⚙️ Optimize Processes for Sustainable Growth"
  ];

  return (
    <section className="bg-[rgba(42,50,132,1)] w-full px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      {/* Services grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-[rgba(254,254,255,0.1)] border flex flex-col items-center justify-center min-h-[220px] w-full px-4 py-6 rounded-lg border-[rgba(254,254,255,0.2)] border-solid hover:bg-[rgba(254,254,255,0.15)] transition-colors duration-300"
          >
            <div className="flex flex-col items-center w-full">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 object-contain mb-4"
                loading="lazy"
              />
              <h3 className="text-[#FEFEFF] text-lg sm:text-xl font-medium text-center">
                {service.title}
              </h3>
              <p className="text-[#EBF9FF] text-sm sm:text-base font-semibold mt-2 text-center">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      
      {/* Bottom content */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="text-[#FEFEFF]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.2]">
                Salesforce Services
              </h2>
              <div className="mt-6 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <p className="text-[#FEFEFF] text-base sm:text-lg">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <article className="bg-[rgba(254,254,255,0.1)] border flex flex-col items-center justify-center min-h-[266px] w-full p-6 md:p-8 rounded-lg border-[rgba(254,254,255,0.2)] border-solid hover:bg-[rgba(254,254,255,0.15)] transition-colors duration-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d593021b75049b88fc9b7e103201a5c4e619d288?placeholderIfAbsent=true"
                alt="Strategic Consulting"
                className="w-12 h-12 object-contain mb-4"
                loading="lazy"
              />
              <h3 className="text-[#FEFEFF] text-2xl font-medium text-center">
                Strategic Consulting
              </h3>
              <p className="text-[#EBF9FF] text-base font-semibold mt-2 text-center">
                Shaping Salesforce strategies that align with business goals & drive transformation
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};