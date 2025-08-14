
import React from 'react';
import { Navigation } from '@/components/Navigation';
import pic1 from './aboutprofileimage/Kumar photo.jpeg';
import pic2 from './aboutprofileimage/Kuldeep Photo.jpeg';

const OurTeam = () => {

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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Our Team</h1>
            <h2 className="text-2xl text-blue-600 mb-6">Meet the Experts Behind Your Success</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our team of certified Salesforce professionals brings together decades of experience in cloud technology, business transformation, and customer success.
            </p>
          </div>
        </div>

        {/* Team Grid */}
<div className="container mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamMembers.map((member, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"> {/* Added flex styles here */}
        <img
          src={member.image}
          alt={member.name}
          className="w-[250px] h-72 object-cover mt-6" /* Added mt-6 for top margin */
        />
        <div className="p-6 w-full"> {/* Added w-full to ensure full width */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-3">{member.role}</p>
          <p className="text-gray-600">{member.bio}</p>
        </div>
      </div>
    ))}
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

export default OurTeam;
