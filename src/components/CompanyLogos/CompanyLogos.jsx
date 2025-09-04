import React from 'react';

export default function CompanyLogos() {
  return (
    <div className="bg-white py-12 px-6 rounded-lg shadow-md max-w-5xl mx-auto">
      <h2 className="text-3xl text-black font-bold text-center mb-6">Where We've Gone</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {[
          { src: "/logos/mckinsey.png", alt: "McKinsey & Company" },
          { src: "/logos/bain.png", alt: "Bain & Company" },
          { src: "/logos/jpm.png", alt: "JP Morgan" },
          { src: "/logos/deloitte.png", alt: "Deloitte" },
          { src: "/logos/capital-one.png", alt: "Capital One" },
          { src: "/logos/amazon.png", alt: "Amazon" },
          { src: "/logos/nasa.png", alt: "Nasa" },
          { src: "/logos/microsoft.png", alt: "Microsoft" },
          { src: "/logos/apple.png", alt: "Apple" },
          { src: "/logos/goldman-sachs.png", alt: "Goldman Sachs" },
          { src: "/logos/disney.png", alt: "Disney" },
          { src: "/logos/ey.png", alt: "EY" },
        ].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-40 h-20 bg-white"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  