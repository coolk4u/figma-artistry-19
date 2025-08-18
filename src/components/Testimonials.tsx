import React from "react";
import clients from "./Assets/Press Releases.jpg";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      type: "primary",
      date: "Jan 9, 2025",
      content:
        "4CE Cloud Labs continue to be an excellent partner to Wiley from the initial scoping and design discussions through to the implementation and support of our latest project. We couldn't have asked for a better team to undertake some of our key roadmap initiatives.",
    },
    {
      type: "secondary",
      date: "Jan 3, 2024",
      content:
        "4CE Cloud Labs have excelled in our dealings with them and provided us with a great team, which augments our own internal SFDC team members, and has made it a very strong team delivering quality solutions and ensuring our org runs smoothly as possible.",
    },
    {
      type: "secondary",
      date: "May 10, 2024",
      content:
        "4CE Cloud Labs have been a truly collaborative partner and have delivered some great solutions and in turn benefits for our organization.",
    },
  ];

  return (
    <section className="w-full bg-[#FEFEFF] py-12 px-4 sm:px-8 lg:px-20">
      {/* Centered Header Section */}
      <div className="w-full max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-[#424950] text-4xl sm:text-5xl font-bold mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-[#828B94] text-base max-w-2xl mx-auto leading-6">
          We collaborate closely with clients to solve complex Salesforce
          challenges. Their success stories reflect our commitment to quality
          and partnership.
        </p>
      </div>

      {/* Image and Testimonials Container - Equal Height */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side - Image (50% width) */}
        <div className="lg:w-1/2">
          <img
            src={clients}
            alt="Client logos"
            className="w-full h-full max-h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Testimonials (50% width) */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Primary Testimonial */}
          <article className="shadow-[0_4px_32px_16px_rgba(20,135,187,0.20)] bg-[#1487BB] text-[#FEFEFF] p-6 rounded-lg">
            <div className="flex items-center gap-2 text-xl font-semibold mb-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2ce24b766170ca02b6a042409db924d75342b9a2?placeholderIfAbsent=true"
                alt="Salesforce verified"
                className="w-6"
              />
              <div className="flex items-center gap-1">
                <span>Salesforce Verified</span>
                <div className="flex items-center gap-4">
                  <div className="w-0 h-6 border-l-2 border-[#FEFEFF]" />
                  <span>{testimonials[0].date}</span>
                </div>
              </div>
            </div>
            <p className="text-base font-medium leading-6">
              {testimonials[0].content}
            </p>
          </article>

          {/* Secondary Testimonials */}
          <div className="flex flex-col gap-4">
            {testimonials.slice(1).map((testimonial, index) => (
              <article key={index} className="bg-[#F7FBFF] p-4 rounded-lg">
                <div className="flex items-center gap-2 text-xl text-[#003B55] font-semibold mb-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d93563c3e5c6c3972d0b83ef3dba9fc6b1422abe?placeholderIfAbsent=true"
                    alt="Salesforce verified"
                    className="w-6"
                  />
                  <div className="flex items-center gap-4">
                    <span>Salesforce Verified</span>
                    <div className="flex items-center gap-4">
                      <div className="w-0 h-6 border-l-2 border-[#003B55]" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#6C757D] text-base font-medium leading-6">
                  {testimonial.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
