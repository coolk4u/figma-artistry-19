import React from 'react';
import { Navigation } from '@/components/Navigation';
import pic1 from './Lifeat4CECloud/image1.jpeg'

const LifeAt4CE = () => {
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

    const benefits = [
        {
            icon: "💼",
            title: "Professional Growth",
            description: "Continuous learning opportunities with Salesforce certifications and training programs."
        },
        {
            icon: "🏠",
            title: "Work-Life Balance",
            description: "Flexible work arrangements and remote work options to support your lifestyle."
        },
        {
            icon: "🎯",
            title: "Challenging Projects",
            description: "Work on cutting-edge Salesforce implementations with industry-leading clients."
        },
        {
            icon: "🤝",
            title: "Collaborative Culture",
            description: "Join a team of passionate professionals who support each other's success."
        },
        {
            icon: "🌟",
            title: "Innovation Focus",
            description: "Be part of a company that embraces innovation and emerging technologies."
        },
        {
            icon: "🎉",
            title: "Recognition & Rewards",
            description: "Competitive compensation and recognition programs for outstanding performance."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            
            <div className="pt-16">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20 bg-gradient-to-br from-white to-blue-200">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">Life at 4CE Cloud Labs</h1>
                        <h2 className="text-xl sm:text-2xl text-[rgba(42,50,132,1)] mb-6">Where Careers Flourish</h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                            Join a dynamic team of Salesforce experts who are passionate about technology, innovation, and making a difference. Discover a workplace where your growth and success are our priorities.
                        </p>
                    </div>
                </div>

                {/* Culture Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-2xl sm:text-3xl font-bold text-[rgba(42,50,132,1)] mb-4 md:mb-6">Our Culture</h3>
                            <p className="text-gray-600 leading-relaxed mb-4 md:mb-6">
                                At 4CE Cloud Labs, we believe that great work comes from great people. Our culture is built on collaboration, innovation, and mutual respect. We foster an environment where everyone can contribute their unique perspectives and expertise.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We're not just colleagues; we're a family of professionals who support each other's growth and celebrate each other's successes. Join us and be part of something bigger than yourself.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img
                                src={pic1}
                                alt="Team working together"
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="mb-12 md:mb-16">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[rgba(42,50,132,1)] mb-6 md:mb-8 text-center">Why Join Us?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
                                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">{benefit.icon}</div>
                                    <h4 className="text-lg md:text-xl font-bold text-[rgba(42,50,132,1)] mb-2 md:mb-3">{benefit.title}</h4>
                                    <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-[rgba(42,50,132,1)] text-white w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
                        <div className="pt-3 md:pt-5">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Get Started?</h2>
                            <p className="text-base md:text-lg mb-4 md:mb-6">
                                Let our experts help you implement Development & Customization for
                                your business.
                            </p>
                            <button className="bg-white text-blue-600 px-6 py-2 md:px-10 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-lg">
                                Contact Us Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeAt4CE;