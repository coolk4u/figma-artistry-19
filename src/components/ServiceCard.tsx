
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  checkIcon: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  checkIcon
}) => {
  return (
    <div className="group relative bg-card border border-border/50 rounded-lg p-6 h-full hover-lift hover:border-primary/20 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-primary/10 rounded-md">
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="space-y-3 mt-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs">
              <div className="w-4 h-4 mr-3 flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-full">
                <img src={checkIcon} alt="✓" className="w-2.5 h-2.5" />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
