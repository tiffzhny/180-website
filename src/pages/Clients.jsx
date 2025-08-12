import React from 'react';

export default function Clients() {
  return (
    <main className="py-24 px-3 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl text-black font-bold text-center mb-12">Our Clients</h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          Blurb about nonprofits and organizations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Client Cards */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Client A</h2>
            <p>Testimony #1</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Client B</h2>
            <p>Testimony #2</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Client C</h2>
            <p>Testimony #3</p>
          </div>
        </div>
      </div>
    </main>
  );
}
