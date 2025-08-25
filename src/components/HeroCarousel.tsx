import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import slide1 from "./Assets/slider 1.png";
import slide2 from "./Assets/slider 2.png";

interface InquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  country: string;
  description: string;
}

const HeroCarousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<InquiryFormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    description: "",
  });

  const slides = [
    {
      title: "Proud Salesforce Partner",
      subtitle: "Backed by certified experts delivering enterprise-grade results",
      image: slide1,
    },
    {
      title: "Trusted Salesforce Implementation",
      subtitle: "Salesforce implementation and innovation",
      image: slide2,
    },
    {
      title: "Digital Transformation Excellence",
      subtitle: "Leading cloud solutions for modern businesses",
      image: "https://ik.imagekit.io/DebajyotiG/4CECLoud%20Lab%20Dummy%20Website/3.jpg?updatedAt=1754054330503",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Immediately close the modal and reset form
  setIsModalOpen(false);
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    description: "",
  });
  
  // Reset any status messages
  setSubmitStatus('idle');
};
  return (
    <>
      <div className="relative w-full bg-gradient-to-br h-[calc(100vh-20px)] min-h-[400px] max-h-[800px] pt-16 md:pt-20">
        {/* Main Carousel */}
        <div className="relative h-full">
          <Carousel
            className="w-full h-full"
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[calc(100vh-110px)] min-h-[400px] max-h-[800px]">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                      }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 z-10" />

                    {/* Text Content - Responsive positioning and sizing */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8 z-20 max-w-6xl mx-auto">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light max-w-2xl mx-auto">
                        {slide.subtitle}
                      </p>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-blue-900 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
                      >
                        Send Inquiry
                      </button>
                    </div>

                    {/* Carousel indicators */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                      {slides.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            i === index ? "bg-white scale-125" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation Arrows - Responsive sizing and positioning */}
            <CarouselPrevious className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <CarouselNext className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
          </Carousel>
        </div>
      </div>

      {/* Modern Modal with White and Blue Gradient */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl bg-white flex flex-col">
            {/* Gradient overlay for blue effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-80 rounded-2xl"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 opacity-30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300 opacity-30 rounded-full translate-y-16 -translate-x-16"></div>
            
            {/* Modal Header - Fixed */}
            <div className="relative z-10 pt-6 px-6 md:px-8 pb-4 bg-white bg-opacity-90 border-b border-gray-200">
              <div className="text-center mb-2 relative">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mt-1 text-sm md:text-base">We'll get back to you as soon as possible</p>
                
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-0 right-0 text-gray-500 hover:text-blue-700 transition-colors p-1 rounded-full hover:bg-blue-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your inquiry has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" viewBox="极 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 极 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  There was an error sending your inquiry. Please try again.
                </div>
              )}
            </div>
            
            {/* Scrollable Form Content */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 md:px-8 py-4">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none极 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium极 text-gray-700">Contact Number *</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Yjc0ODQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYX极9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[length:20px_20px] bg-no-repeat bg-[center_right_1rem]"
                  >
                    <option value="">Select your country</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
              </form>
            </div>
            
            {/* Fixed Footer with Buttons */}
            <div className="relative z-10 px-6 md:px-8 py-4 bg-white bg-opacity-90 border-t border-gray-200">
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="px-6 py-3 text-white bg-[rgba(42,50,132,1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all shadow-md hover:shadow-lg font-medium flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r极="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 极12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2极h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Send Inquiry
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroCarousel;