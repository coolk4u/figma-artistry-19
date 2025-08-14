import React from 'react';

interface CaseStudyModalProps {
  caseStudy: {
    title: string;
    img: string;
    overview: {
      description: string;
      keyHighlights: string[];
    };
    detailedStudy: {
      clientBackground: string;
      challenges: string[];
      solution: string[];
      outcomes: string[];
      technologiesUsed: string[];
    };
  };
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Image Header */}
        <img 
          src={caseStudy.img} 
          alt={caseStudy.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          {/* Header with close button */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{caseStudy.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Overview</h3>
            <p className="text-gray-700 mb-4">{caseStudy.overview.description}</p>
            
            <h4 className="text-lg font-semibold mb-2">Key Highlights</h4>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              {caseStudy.overview.keyHighlights.map((highlight, index) => (
                <li key={index} className="text-gray-700">{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Client Background Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Client Background</h3>
            <p className="text-gray-700">{caseStudy.detailedStudy.clientBackground}</p>
          </div>

          {/* Challenges Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Challenges</h3>
            <ul className="list-disc pl-5 space-y-1">
              {caseStudy.detailedStudy.challenges.map((challenge, index) => (
                <li key={index} className="text-gray-700">{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Solution Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Solution</h3>
            <ul className="list-disc pl-5 space-y-1">
              {caseStudy.detailedStudy.solution.map((solution, index) => (
                <li key={index} className="text-gray-700">{solution}</li>
              ))}
            </ul>
          </div>

          {/* Outcomes Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Outcomes</h3>
            <ul className="list-disc pl-5 space-y-1">
              {caseStudy.detailedStudy.outcomes.map((outcome, index) => (
                <li key={index} className="text-gray-700">{outcome}</li>
              ))}
            </ul>
          </div>

          {/* Technologies Used Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.detailedStudy.technologiesUsed.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer with Close Button */}
          <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};