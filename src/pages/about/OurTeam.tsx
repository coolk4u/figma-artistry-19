import React from 'react';
import { Navigation } from '@/components/Navigation';
import pic1 from './aboutprofileimage/Kumar photo.jpeg';
import pic2 from './aboutprofileimage/Kuldeep Photo.jpeg';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Naresh Kumar Golla",
      role: "CEO & Founder",
      image: pic1,
      bio: "Founder & CEO of 4CECloud Labs | Digital Transformation Leader | 18+ Years Driving Innovation in CRM & CX | Global Speaker | Mentor to 1500+ Professionals | Passionate About Tech, Growth & Empowering Businesses with Salesforce & Oracle Solutions."
    },
    {
      name: "Kuldeep Dhiman",
      role: "Director",
      image: pic2,
      bio: "18+ years transforming enterprises with Salesforce, Oracle CX, CPQ & ServiceNow. Led 60+ projects, mentored 50+ professionals, and driven $M+ deals. Digital transformation leader delivering seamless integrations, strategic growth, and unmatched client success."
    },
    {
      name: "Michael Chen",
      role: "Head of Consulting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      bio: "Strategic consultant with expertise in business process optimization and change management."
    },
    {
      name: "Emily Davis",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      bio: "Certified Salesforce developer with expertise in Lightning Web Components and Apex."
    },
    {
      name: "David Wilson",
      role: "Solution Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      bio: "Enterprise architect focusing on scalable Salesforce solutions and system integrations."
    },
    {
      name: "Lisa Brown",
      role: "Training Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      bio: "Salesforce trainer and change management specialist with a passion for user adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20 bg-gradient-to-br from-white to-blue-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-800">Our Team</h1>
            <h2 className="text-xl sm:text-2xl text-blue-600 mb-4 md:mb-6">Meet the Experts Behind Your Success</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-4">
              Our team of certified Salesforce professionals brings together decades of experience in cloud technology, business transformation, and customer success.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md md:shadow-lg overflow-hidden flex flex-col items-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full max-w-[250px] h-64 sm:h-72 object-cover mt-6 rounded-t-lg"
                />
                <div className="p-4 sm:p-6 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-blue-950 text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16 text-center">
          <div className="pt-2 md:pt-5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
              Let our experts help you implement Development & Customization for your business.
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-10 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;