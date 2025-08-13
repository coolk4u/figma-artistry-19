import React from 'react';
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
            { name: 'Lightning Migration', href: '/services/lightning-migration' },
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
            { name: 'AWS', href: '/services/aws' },
            { name: 'Experience Cloud', href: '/services/experience-cloud' },
            { name: 'Einstein Analytics', href: '/services/einstein-analytics' },
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
        { name: 'Press Releases', href: '/resources/press-releases' },
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
        { name: 'Life at 4CE Cloud Labs', href: '/about-us/life-at-4ce' }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ec04a159b9b6d80af3b88ba7dc27df8a838dafac?placeholderIfAbsent=true"
              alt="4CE Cloud Labs"
              className="h-10 w-auto"
            />
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex space-x-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground font-normal text-sm bg-transparent hover:bg-accent/50 px-3 py-2 rounded-md transition-all duration-200">
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
                      className={`text-foreground/80 hover:text-foreground font-normal text-sm px-3 py-2 rounded-md transition-all duration-200 ${
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
    </nav>
  );
};
