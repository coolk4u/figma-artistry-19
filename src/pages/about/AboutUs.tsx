import React from "react";
import { Navigation } from "@/components/Navigation";

const pledgeItems = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7d250c1ee3890bb0f223b81c6ec20a334d3fbfda?placeholderIfAbsent=true",
    text: "Access to our network and community events to build industry connections.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/41c164be540eec7c7122ea29407bc50ffb953689?placeholderIfAbsent=true",
    text: "Real-world projects and mentorship from experienced professionals.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/465dc31e53b5c400b26618bb6f1dcb4b8dedbb88?placeholderIfAbsent=true",
    text: "Career guidance and certification readiness support.",
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7cb5850a420f8702046f4d20c14d907cd5d76248?placeholderIfAbsent=true",
    text: "Comprehensive Learning on Salesforce fundamentals, configuration, and development.",
  },
];

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

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20 px-4 bg-gradient-to-br from-white to-blue-200">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                About 4CE Cloud Labs
              </h1>
              <h2 className="text-xl md:text-2xl text-[rgba(42,50,132,1)] mb-6">
                Driving Digital Transformation
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We are a leading Salesforce consulting partner dedicated to
                helping organizations unlock the full potential of cloud
                technology. With years of expertise and a passion for
                innovation, we transform businesses through strategic Salesforce
                implementations.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <section className="w-full bg-[#FEFEFF] py-12 md:py-[77px] px-4 sm:px-8 md:px-[70px] rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="w-full md:w-[45%]">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-base font-normal text-[rgba(42,50,132,1)]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/53675d9d267b9fbcd82d937050f2504182f0bfa9?placeholderIfAbsent=true"
                      alt="Company icon"
                      className="w-9"
                    />
                    <span>About our company</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-semibold mt-6">
                    <span className="text-[#003B55]">Who Are </span>
                    <span className="text-[rgba(42,50,132,1)]">We</span>
                  </h1>
                  <div className="text-[#4b545d] text-base md:text-lg font-normal leading-7 mt-4 space-y-4">
                    <p>
                      At 4CECloud Labs, we're a team of passionate CX experts
                      with decades of experience in Designing, Consulting,
                      Implementation, Delivery, and Training. Founded with the
                      vision of creating best-in-class customer experience (CE)
                      solutions, we empower organizations to transform how they
                      engage their customers.
                    </p>
                    <p>
                      Our strategy is rooted in four core pillars: Aligning to
                      customer strategy, Adapting to customer culture, Bringing
                      industry best practices, and Driving innovation in
                      customer experience and technology.
                    </p>
                    <p className="mb-6 md:mb-10">
                      By harnessing the power of Salesforce, we ensure our
                      clients unlock the full potential of their CX
                      applications—through a customer-centric, outcome-driven
                      approach. Together, we strive to create measurable value
                      and unforgettable experiences for the businesses we serve.
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="rounded-3xl bg-[rgba(42,50,132,1)] p-3 pr-7 pl-7 text-white font-semibold">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[55%]">
                <div className="w-full text-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3bdd5529c39f5a764a07fc21d009b1a599b116a9?placeholderIfAbsent=true"
                    alt="Team collaboration"
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 w-full">
                    {/* Left Card */}
                    <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] flex flex-col items-center justify-center px-4 py-4 rounded-lg w-full sm:w-[34%]">
                      <div className="text-[#25A4DD] text-3xl md:text-4xl font-bold">
                        <span>200</span>
                        <span className="font-semibold text-xl md:text-2xl">
                          +
                        </span>
                      </div>
                      <div className="text-[#003B55] text-sm md:text-base font-normal text-center">
                        Certified Cloud Experts
                      </div>
                    </div>

                    {/* Center Card */}
                    <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] flex flex-col items-center justify-center px-4 py-4 rounded-lg w-full sm:w-[34%]">
                      <div className="text-[#1487BB] text-3xl md:text-4xl font-bold">
                        <span>80</span>
                        <span className="font-semibold text-xl md:text-2xl">
                          +
                        </span>
                      </div>
                      <div className="text-[#003B55] text-sm md:text-base font-normal text-center">
                        Projects Delivered
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] flex flex-col items-center justify-center px-4 py-4 rounded-lg w-full sm:w-[34%]">
                      <div className="text-[#076C99] text-3xl md:text-4xl font-bold">
                        <span>300</span>
                        <span className="font-semibold text-xl md:text-2xl">
                          +
                        </span>
                      </div>
                      <div className="text-[#003B55] text-sm md:text-base font-normal text-center">
                        Cloud Certifications
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-[#F7FBFF] mt-12 md:mt-[85px] p-6 md:p-12 md:pl-20 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="w-full md:w-6/12">
                <div className="flex flex-col">
                  <h2 className="text-[rgba(42,50,132,1)] text-xl md:text-2xl font-semibold">
                    At 4CECloud Labs, we drive the Pledge 1% forward by
                    investing 1% of our skills and energy to build a better
                    tomorrow.
                  </h2>
                  <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-[79px]">
                    {pledgeItems.map((item, index) => (
                      <article
                        key={index}
                        className={`flex flex-col items-center text-center p-4 min-h-[180px] md:min-h-[203px] w-full sm:w-[148px] ${
                          index < 2
                            ? "border-b md:border-b-0 md:border-r border-[#E3E9EE]"
                            : ""
                        }`}
                      >
                        <img
                          src={item.icon}
                          alt={`Pledge item ${index + 1}`}
                          className="w-6 mb-2"
                        />
                        <p className="text-sm text-[rgba(3,43,94,1)]">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>
                  <p className="text-[#424950] text-base font-medium leading-6 mt-8 md:mt-16">
                    <span className="text-[rgba(42,50,132,1)]">
                      We believe that technology can be a force for good
                    </span>
                    —and that starts with access and opportunity. By sharing our
                    knowledge and giving back to the community, we're helping
                    build a more inclusive and skilled tech workforce.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/058faeb9a601fa05dce6a02493670128fd95c944?placeholderIfAbsent=true"
                  alt="Community engagement"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-12 md:my-16 pt-12 md:pt-20">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[rgba(42,50,132,1)] mb-3">
                Our Vision
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                To be the premier Salesforce partner, recognized for delivering
                exceptional value and driving digital transformation across
                industries.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[rgba(42,50,132,1)] mb-3">
                Our Values
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Excellence, innovation, integrity, and client success. We are
                committed to delivering solutions that exceed expectations and
                create lasting value.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[rgba(42,50,132,1)] mb-3">
                Our Approach
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Collaborative, strategic, and results-driven. We work closely
                with our clients to understand their unique needs and deliver
                tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[rgba(42,50,132,1)] text-white w-full">
        <div className="container mx-auto py-12 md:py-[5vh] px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Let our experts help you implement Development & Customization for
            your business.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 md:px-10 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base md:text-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
