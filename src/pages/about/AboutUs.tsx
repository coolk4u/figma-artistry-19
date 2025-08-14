import React from 'react';
import { Navigation } from '@/components/Navigation';
import { EnquireButton } from '@/components/EnquireButton';

const pledgeItems = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7d250c1ee3890bb0f223b81c6ec20a334d3fbfda?placeholderIfAbsent=true",
    text: "Access to our network and community events to build industry connections."
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/41c164be540eec7c7122ea29407bc50ffb953689?placeholderIfAbsent=true",
    text: "Real-world projects and mentorship from experienced professionals."
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/465dc31e53b5c400b26618bb6f1dcb4b8dedbb88?placeholderIfAbsent=true",
    text: "Career guidance and certification readiness support."
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7cb5850a420f8702046f4d20c14d907cd5d76248?placeholderIfAbsent=true",
    text: "Comprehensive Learning on Salesforce fundamentals, configuration, and development."
  }
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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-gray-800">About 4CE Cloud Labs</h1>
              <h2 className="text-2xl text-blue-600 mb-6">Driving Digital Transformation</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We are a leading Salesforce consulting partner dedicated to helping organizations unlock the full potential of cloud technology. With years of expertise and a passion for innovation, we transform businesses through strategic Salesforce implementations.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <section className="w-full overflow-hidden bg-[#FEFEFF] mx-[-20px] mt-2 pt-[77px] pb-[85px] px-[70px] max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[45%] max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
                  <div className="w-full max-md:max-w-full">
                    <div className="flex w-[473px] max-w-full flex-col items-stretch text-[#25A4DD]">
                      <div className="flex items-center gap-2 text-base font-normal">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/53675d9d267b9fbcd82d937050f2504182f0bfa9?placeholderIfAbsent=true"
                          alt="Company icon"
                          className="aspect-[9.01] object-contain w-9 stroke-[4px] stroke-[#25A4DD] self-stretch shrink-0 my-auto"
                        />
                        <span className="text-[#25A4DD] self-stretch my-auto">
                          About our company
                        </span>
                      </div>
                      <h1 className="text-5xl font-semibold mt-6 max-md:max-w-full max-md:text-[40px]">
                        <span className="text-[#003B55]">Who Are </span>
                        <span className="text-[#25A4DD]">We</span>
                      </h1>
                    </div>
                    <p className="text-[#4b545d] text-lg font-normal leading-7 mt-4 max-md:max-w-full">
                      <p className="mb-2">
                        At 4CECloud Labs, we're a team of passionate CX experts with decades of experience in Designing, Consulting, Implementation, Delivery, and Training. Founded with the vision of creating best-in-class customer experience (CE) solutions, we empower organizations to transform how they engage their customers.
                      </p> 
                      <p className="mb-2">
                        Our strategy is rooted in four core pillars: Aligning to customer strategy, Adapting to customer culture, Bringing industry best practices, and Driving innovation in customer experience and technology. 
                      </p>
                      <p className="mb-10">
                        By harnessing the power of Salesforce, we ensure our clients unlock the full potential of their CX applications—through a customer-centric, outcome-driven approach. Together, we strive to create measurable value and unforgettable experiences for the businesses we serve.
                      </p>
                    </p>
                  </div>
                  <div className="mt-[25px] ">
                    <EnquireButton className="max-md:px-5 rounded-3xl" />
                  </div>
                </div>
              </div>
              <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
                <div className="w-full text-center max-md:max-w-full max-md:mt-10">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3bdd5529c39f5a764a07fc21d009b1a599b116a9?placeholderIfAbsent=true"
                    alt="Team collaboration"
                    className="aspect-[1.58] object-contain w-full ml-[26px] mr-[27px] rounded-lg max-md:max-w-full max-md:mr-2.5"
                  />
                  <div className="flex justify-between mt-4 px-[26px] w-full">
                    {/* Left Card */}
                    <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] flex flex-col items-center justify-center px-4 py-2 rounded-lg w-[34%] min-w-[200px]">
                      <div className="text-[#25A4DD] text-5xl font-bold max-md:text-[40px]">
                        <span className="text-[32px] leading-[38px]">200</span>
                        <span className="font-semibold text-[24px] leading-[36px]">
                          +
                        </span>
                      </div>
                      <div className="text-[#003B55] text-base font-normal text-center">
                        Certified Cloud Experts
                      </div>
                    </div>

                    {/* Center Card */}
                    <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] flex flex-col items-center justify-center px-4 py-2 rounded-lg w-[34%] min-w-[200px] mx-2">
                      <div className="text-[#1487BB] text-5xl font-bold max-md:text-[40px]">
                        <span className="text-[32px] leading-[38px]">80</span>
                        <span className="font-semibold text-[24px] leading-[36px]">
                          +
                        </span>
                      </div>
                      <div className="text-[#003B55] text-base font-normal text-center">
                        Projects Delivered
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] flex flex-col items-center justify-center px-4 py-2 rounded-lg w-[34%] min-w-[200px] mr-[-50px]">
                      <div className="text-[#076C99] text-5xl font-bold max-md:text-[40px]">
                        <span className="text-[32px] leading-[38px]">300</span>
                        <span className="font-semibold text-[24px] leading-[36px]">
                          +
                        </span>
                      </div>
                      <div className="text-[#003B55] text-base font-normal text-center">
                        Cloud Certifications
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full overflow-hidden bg-[#F7FBFF] mt-[85px] pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
                  <h2 className="text-[#424950] text-2xl font-semibold max-md:max-w-full">
                    At 4CECloud Labs, we drive the Pledge 1% forward by investing 1% of our skills and energy to build a better tomorrow.
                  </h2>
                  <div className="flex items-center gap-4 justify-center flex-wrap mt-[79px] max-md:max-w-full max-md:mt-10">
                    {pledgeItems.map((item, index) => (
                      <article
                        key={index}
                        className={`items-center self-stretch flex min-h-[203px] flex-col text-sm text-[rgba(3,43,94,1)] font-normal text-center w-[148px] my-auto pt-4 ${index === 2 ? 'pb-[50px]' : index === 3 ? 'pb-2' : 'pb-[29px]'} px-4 ${index < 3 ? 'border-r-[#E3E9EE] border-r border-solid' : ''}`}
                      >
                        <img
                          src={item.icon}
                          alt={`Pledge item ${index + 1}`}
                          className="aspect-[1] object-contain w-6"
                        />
                        <p className="mt-2">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>
                  <p className="text-[#424950] text-base font-medium leading-6 mr-[51px] mt-16 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                    <span className="text-[#005277]">
                      We believe that technology can be a force for good
                    </span>
                    —and that starts with access and opportunity. By sharing our
                    knowledge and giving back to the community, we're helping build
                    a more inclusive and skilled tech workforce.
                  </p>
                </div>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/058faeb9a601fa05dce6a02493670128fd95c944?placeholderIfAbsent=true"
                  alt="Community engagement"
                  className="aspect-[0.94] object-contain w-full grow max-md:max-w-full max-md:mt-[19px]"
                />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 pt-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h4>
              <p className="text-gray-600">
                To be the premier Salesforce partner, recognized for delivering exceptional value and driving digital transformation across industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Our Values</h4>
              <p className="text-gray-600">
                Excellence, innovation, integrity, and client success. We are committed to delivering solutions that exceed expectations and create lasting value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Our Approach</h4>
              <p className="text-gray-600">
                Collaborative, strategic, and results-driven. We work closely with our clients to understand their unique needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-950 text-white w-full mx-auto">
        <div className="text-center bg-blue-950 p-[5vh] text-white rounded-lg max-w-[1351px] w-[90vw] mx-auto">
          <div className="pt-5">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Let our experts help you implement Development & Customization for
              your business.
            </p>
            <button className="bg-white text-blue-600 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;