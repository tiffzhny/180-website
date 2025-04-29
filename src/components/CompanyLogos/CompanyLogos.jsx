import React from 'react';

export default function CompanyLogos() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Where We've Gone</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          <img
            src="/logos/mckinsey.png"
            alt="McKinsey & Company"
            className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/logos/bain.png"
            alt="Bain & Company"
            className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/logos/jpm.png"
            alt="JP Morgan"
            className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/logos/deloitte.png"
            alt="Deloitte"
            className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
      </div>
    );
  }
  