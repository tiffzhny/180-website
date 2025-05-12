import React from 'react';

export default function Clients() {
  return (
    <main className="min-h-screen px-10 py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center">Our Clients</h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          We’re proud to have partnered with impactful organizations in healthcare, education, sustainability, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Client Cards */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Client A</h2>
            <p>Healthcare nonprofit serving underrepresented communities.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Client B</h2>
            <p>STEM education initiative providing tutoring programs.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Client C</h2>
            <p>Environmental startup promoting clean energy in local schools.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
