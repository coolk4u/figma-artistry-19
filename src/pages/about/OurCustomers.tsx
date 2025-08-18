import React from 'react';
import { Navigation } from '@/components/Navigation';

const OurCustomers = () => {
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

  const customers = [
    {
      name: "TechCorp Solutions",
      industry: "Technology",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      testimonial: "4CE Cloud Labs transformed our sales process and increased our productivity by 40%."
    },
    {
      name: "Healthcare Plus",
      industry: "Healthcare",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      testimonial: "Their expertise in healthcare solutions helped us improve patient engagement significantly."
    },
    {
      name: "FinanceFirst Bank",
      industry: "Financial Services",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      testimonial: "Outstanding implementation that enhanced our customer relationship management."
    },
    {
      name: "EduLearn Academy",
      industry: "Education",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      testimonial: "The student management system they built revolutionized our operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20 bg-gradient-to-br from-white to-blue-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Customers</h1>
            <h2 className="text-xl sm:text-2xl text-blue-600 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              We're proud to partner with organizations across various industries, helping them achieve their digital transformation goals through innovative Salesforce solutions.
            </p>
          </div>
        </div>

        {/* Customer Success Stories */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {customers.map((customer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mr-3 md:mr-4"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800">{customer.name}</h3>
                    <p className="text-blue-600 text-sm md:text-base">{customer.industry}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm md:text-base">"{customer.testimonial}"</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 md:mt-16 bg-blue-600 rounded-lg p-6 md:p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="p-2 md:p-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 md:mb-2">200+</h3>
                <p className="text-sm md:text-base">Successful Projects</p>
              </div>
              <div className="p-2 md:p-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 md:mb-2">150+</h3>
                <p className="text-sm md:text-base">Happy Clients</p>
              </div>
              <div className="p-2 md:p-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 md:mb-2">15+</h3>
                <p className="text-sm md:text-base">Industries Served</p>
              </div>
              <div className="p-2 md:p-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 md:mb-2">98%</h3>
                <p className="text-sm md:text-base">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-blue-950 text-white w-full">
        <div className="text-center bg-blue-950 py-8 md:py-[5vh] px-4 sm:px-6 text-white rounded-lg max-w-[1351px] w-[90vw] mx-auto">
          <div className="pt-3 md:pt-5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg mb-4 md:mb-6">
              Let our experts help you implement Development & Customization for
              your business.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 sm:px-8 sm:py-2 md:px-10 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;