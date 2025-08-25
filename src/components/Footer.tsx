import React from "react";
import { Link } from "react-router-dom";
import youtube from "./Assets/Youtube logo.svg";
import linkedin from "./Assets/Linkedin logo.svg";
import gmail from "./Assets/Gmail logo.svg";

export const Footer: React.FC = () => {
  const locations = [
    {
      title: "India - Bengaluru",
      address:
        "3rd Floor, RJ Complex, 55/3,Varthur-Sarjapura RdBengaluru - 562125, Karnataka.\nPhone: +91 9916440917",
    },
    {
      title: "United States of America",
      address:
        "1200 route, 22 east\nsuite 2000 Bridgewater\nNew Jersey 08807.\nPhone: +1 (919) 633-1324",
    },
    {
      title: "United States of America",
      address:
        "5000 Centre Green Way\nSuite 500,Cary\nNorth Carolina,27513\nPhone: +1 (919) 633-1324",
    },
  ];

  const quickLinks = [
    // {
    //   text: "Services",
    //   icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true",
    //   address: "/services",
    // },
    {
      text: "Accelerators",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true",
      address: "/accelerators",
    },
    {
      text: "Case studies",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true",
      address: "/resources/case-studies",
    },
    {
      text: "Blogs",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/decaf54c1a6bdc1542a29d8c66c6e2ae36108731?placeholderIfAbsent=true",
      address: "/resources/blog",
    },
  ];

  const socialIcons = [
    {
      iconimg: linkedin,
      iconlink: "https://www.linkedin.com/company/4cecloud-labs/posts/?feedView=all",
    },
    {
      iconimg: gmail,
      iconlink: "https://mail.google.com/mail/?view=cm&fs=1&to=consulting@forcecloudlabs.com",
    },
    {
      iconimg: youtube,
      iconlink: "https://www.youtube.com/@4CECloudLabs",
    },
  ];

  return (
    <footer className="bg-[rgba(42,50,132,1)] w-full overflow-hidden py-9 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ec04a159b9b6d80af3b88ba7dc27df8a838dafac?placeholderIfAbsent=true"
              alt="4CECloud Labs Logo"
              className="w-40 sm:w-48 md:w-52 h-auto"
            />

          </Link>
            {/* <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=consulting@forcecloudlabs.com" target="_blank" className="text-white text-lg">Email: consulting@forcecloudlabs.com</a></div> */}

          <div className="flex gap-4 sm:gap-6">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.iconlink}
                target="_blank"
                className="hover:opacity-80 transition-opacity duration-300"
                aria-label={icon.iconimg}
              >
                <img
                  src={icon.iconimg}
                  alt={icon.iconimg}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(247,251,255,1)] w-full my-6"></div>

        {/* Bottom Section - Locations and Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Locations */}
          {locations.map((location, index) => (
            <address key={index} className="not-italic">
              <h3 className="text-[#F7FBFF] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {location.title}
              </h3>
              <p className="text-[#F7FBFF] text-sm sm:text-base font-normal leading-5 sm:leading-6 whitespace-pre-line">
                {location.address}
              </p>
            </address>
          ))}

          {/* Quick Links */}
          <nav>
            <h3 className="text-[#F7FBFF] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.address}
                    className="flex items-center gap-2 text-[#F7FBFF] text-sm sm:text-base hover:underline transition-all duration-300"
                  >
                    <img
                      src={link.icon}
                      alt=""
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
