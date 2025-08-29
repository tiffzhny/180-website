import React from 'react';
import ContactUs from '../components/ContactUs/ContactUs';

export default function Contact() {
    return (
        <>
      <div
  className="relative hero min-h-[400px] bg-no-repeat bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/hero/client_hero.png')" }}>
  <div className="relative hero-content text-center p-8">
            <div className=" text-white">
              <h1 className="text-5xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
        <main className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column (email / info) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Get in Touch</h2>
            <p className="text-lg mb-6 text-gray-500">
              Have questions or want to work with us? Send us a message using the form, 
              or reach out directly via email.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <a href="mailto:uci@180dc.org" className="text-green-600 font-bold underline">
                uci@180dc.org
                </a>
              </p>
            </div>
          </div>

          {/* Right column (form) */}
          <div>
            <ContactUs />
          </div>
        </div>
      </main>

      </>
    )
}