import React from 'react';
import PastClients from '../components/PastClients/PastClients';
import ProjectScopes from '../components/ProjectScopes/ProjectScopes';
import ProjectTimeline from '../components/ProjectTimeline/ProjectTimeline';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Clients() {
  return (
    <>
      <div
  className="relative hero min-h-[400px] bg-no-repeat bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/hero/client_hero.png')" }}>
  <div className="relative hero-content text-center p-8">
            <div className=" text-white">
              <h1 className="text-5xl font-bold">Our Clients</h1>
            </div>
          </div>
        </div>
      <main className="py-24 px-3 bg-white"> 
        <div className= "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <div className='flex flex-col justify-center'>
          <h2 className='text-3xl font-bold mb-4 text-black'>What We Offer</h2>
          <p className="text-lg mb-6 text-gray-500">
                180 Degrees Consulting offers high-quality consulting services without the premium price tag. tag. Our team comprises of carefully selected top-tier university students who volunteer their time because they share our vision and values.
                We partner with Orange County non-profits and social enterprises to provide innovative, practical, and sustainable solutions to the challenges they face.
                </p>
          </div>

          <div>
            <ProjectScopes />
          </div>
        </div>
        
        <h2 className="text-3xl text-black font-bold text-center mb-12">Project Timeline</h2>
        <ProjectTimeline />
        <section className="py-20 bg-white">
  <h2 className="text-5xl md:text-4xl font-bold text-center text-black">
    Client Testimonials
  </h2>
  <div className="max-w-5xl mx-auto space-y-10 text-gray-500 text-center">
    <div className="bg-white p-8 rounded-xl shadow-sm justify-center text-center">
      <img src="/clients/bbbsoc.jpeg" alt="BBBS-OC" className="h-24 mb-4 mx-auto object-contain" />
      <p className="text-lg mb-4 text-black">Big Brothers Big Sisters of Orange County (BBBS OC) partnered with 180DC-UC Irvine to address a shortage of volunteer mentors (Bigs) for the youth in their program (Littles). Our team conducted a market analysis of BBBS OC's recruitment strategy and developed a tailored framework to optimize outreach and resource use. This strategy led to the successful recruitment of 375 new Bigs, enabling BBBS OC to better serve the youth in their program.</p>
      <p className="italic text-lg mb-4 text-black">
        “The most valuable part about this project was that the team at 180 Degrees demonstrated an "out-of-the-box" thinking regarding solutions to our problem. The team was cognizant of our budget at all times and provided robust recommendations accordingly. This will ensure the implementation of their recommendations from our side and we definitely would love to pursue another project with them.”
      </p>
      <p className="font-semibold">
        Big Brothers Big Sisters of Orange County (BBBS-OC)
      </p>
    </div>
    </div>
    </section>
        <PastClients />
    </main>
    </>
  );
}
