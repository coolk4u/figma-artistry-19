import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedItem(null);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleItem = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#',
      hasDropdown: true,
      sections: [
        {
          title: 'Salesforce Services',
          items: [
            { name: 'Consulting', href: '/services/consulting' },
            { name: 'Implementation', href: '/services/implementation' },
            { name: 'Salesforce Integration', href: '/services/salesforce-integration' },
            { name: 'Dev. & Customization', href: '/services/development-customization' },
            { name: 'Staffing', href: '/services/staffing' },
            { name: 'Support & Maintenance', href: '/services/support-maintenance' }
          ]
        }
      ]
    },
    { 
      name: 'Expertise', 
      href: '#',
      hasDropdown: true,
      sections: [
        {
          title: 'Salesforce Expertise',
          items: [
            { name: 'Agentforce', href: '/services/agentforce' },
            { name: 'Service Cloud', href: '/services/service-cloud' },
            { name: 'Sales Cloud', href: '/services/sales-cloud' },
            { name: 'Marketing Cloud', href: '/services/marketing-cloud' },
            { name: 'Data Cloud', href: '/services/data-cloud' },
            { name: 'Revenue Cloud', href: '/services/revenue-cloud' },
            { name: 'Generative AI', href: '/services/generative-ai' },
            { name: 'DevOps', href: '/services/devops' },
            { name: 'Enablement and Training', href: '/services/enablement-training' },
            { name: 'Experience Cloud', href: '/services/experience-cloud' },
            { name: 'Financial Services Cloud', href: '/services/financial-services-cloud' }
          ]
        },
        {
          title: 'Industries',
          items: [
            { name: 'Manufacturing', href: '/industries/manufacturing' },
            { name: 'Financial Services', href: '/industries/financial-services' },
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Education', href: '/industries/education' },
            { name: 'High Tech', href: '/industries/high-tech' }
          ]
        }
      ]
    },
    { name: 'Accelerators', href: '/accelerators' },
    { 
      name: 'Resources', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Blog', href: '/resources/blog' },
        { name: 'Videos', href: '/resources/videos' }
      ]
    },
    { 
      name: 'About Us', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Our Team', href: '/about-us/our-team' },
        { name: 'Our Customers', href: '/about-us/our-customers' },
        { name: 'Life at 4CECloud Labs', href: '/about-us/life-at-4ce' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50 h-[75px] transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ec04a159b9b6d80af3b88ba7dc27df8a838dafac?placeholderIfAbsent=true"
                alt="4CE Cloud Labs"
                className="h-14 w-auto pt-3"
              />
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-foreground focus:outline-none"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation - Updated with consistent dimensions */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name} className="flex">
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className="text-foreground/100 hover:text-foreground font-normal text-sm bg-transparent hover:bg-accent/50 px-4 py-3 rounded-md transition-all duration-200 h-10 flex items-center justify-center min-w-[120px]">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-background/95 backdrop-blur-xl shadow-2xl rounded-lg p-4 min-w-[800px] z-50 border border-border/50">
                          {item.sections ? (
                            <div className="grid grid-cols-2 gap-6">
                              {item.sections.map((section) => (
                                <div key={section.title}>
                                  <h3 className="font-semibold text-primary mb-2 text-xs uppercase tracking-wider">
                                    {section.title}
                                  </h3>
                                  <ul className="space-y-1">
                                    {section.items.map((subItem) => (
                                      <li key={subItem.name}>
                                        <NavigationMenuLink asChild>
                                          <Link
                                            to={subItem.href}
                                            className="block text-sm text-foreground/70 hover:text-foreground hover:bg-accent/30 px-3 py-1.5 rounded-md transition-all duration-200 hover-lift"
                                          >
                                            {subItem.name}
                                          </Link>
                                        </NavigationMenuLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="min-w-[200px]">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <NavigationMenuLink key={dropdownItem.name} asChild>
                                  <Link
                                    to={dropdownItem.href}
                                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent/30 rounded-md transition-all duration-200"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-foreground/100 hover:text-foreground font-normal text-sm px-4 py-3 rounded-md transition-all duration-200 h-10 flex items-center justify-center min-w-[120px] ${
                          location.pathname === item.href ? 'bg-accent text-foreground' : 'hover:bg-accent/50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-xl border-t border-border/50 max-h-[calc(100vh-90px)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="px-2">
              {item.hasDropdown ? (
                <div className="mb-2">
                  <button
                    onClick={() => toggleItem(item.name)}
                    className={`w-full text-left text-foreground/80 hover:text-foreground font-normal text-sm px-4 py-3 rounded-md transition-all duration-200 flex justify-between items-center h-10 ${
                      location.pathname === item.href ? 'bg-accent text-foreground' : 'hover:bg-accent/50'
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                        expandedItem === item.name ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedItem === item.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.sections ? (
                        item.sections.map((section) => (
                          <div key={section.title} className="mb-3">
                            <h3 className="font-semibold text-primary mb-2 text-xs uppercase tracking-wider">
                              {section.title}
                            </h3>
                            <ul className="space-y-1">
                              {section.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.href}
                                    className="block text-sm text-foreground/70 hover:text-foreground hover:bg-accent/30 px-3 py-1.5 rounded-md transition-all duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block text-sm text-foreground/70 hover:text-foreground hover:bg-accent/30 px-3 py-1.5 rounded-md transition-all duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`block text-foreground/80 hover:text-foreground font-normal text-sm px-4 py-3 rounded-md transition-all duration-200 h-10 ${
                    location.pathname === item.href ? 'bg-accent text-foreground' : 'hover:bg-accent/50'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};