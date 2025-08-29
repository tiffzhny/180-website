import React from 'react';

export default function PastClients() {
  return (
    <div className="bg-white py-12 px-6 rounded-lg shadow-md max-w-5xl mx-auto">
      <h2 className="text-3xl text-black font-bold text-center mb-6">Past Clients</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {[
          { src: "/clients/mcdonald.png", alt: "Ronald McDonald" },
          { src: "/clients/unitedway.png", alt: "United Way" },
          { src: "/clients/bbbsoc.jpeg", alt: "Big Brothers Big Sisters" },
          { src: "/clients/kidworks.png", alt: "KidWorks" },
        ].map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-40 h-20 bg-white"
          >
            <img
              src={client.src}
              alt={client.alt}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  