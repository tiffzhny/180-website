import React from "react";

export default function Testimonials() {
    return (
    <div className="flex justify-center py-10 bg-white"> 
      <div className=" text-black carousel w-full max-w-6xl mx-auto rounded-xl shadow-lg">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full flex flex-col items-center justify-center h-[400px] p-12 text-center space-y-5">
          <img src="/clients/bbbsoc.jpeg" alt="BBBSOC Logo" className="h-16 mb-4" />
          <p className="text-lg mx-auto italic break-words pl-36 pr-36">
            “The most valuable part about this project was that the team at 180 Degrees demonstrated an "out-of-the-box" thinking regarding solutions to our problem. The team was cognizant of our budget at all times and provided robust recommendations accordingly. This will ensure the implementation of their recommendations from our side and we definitely would love to pursue another project with them.”
          </p>
          <h4 className="mt-4 font-semibold">Big Brothers Big Sisters of Orange County (BBBS-OC)</h4>
  
          {/* Buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-30 right-30 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
  
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full flex flex-col items-center justify-center p-16 text-center space-y-4">
          <img src="/images/logos/shoreline-logo.png" alt="Shoreline Youth Services logo" className="h-12 mb-4" />
          <p className="text-xl italic leading-relaxed">
            “Professional, data-driven, and empathetic. The team felt like an extension of our org.”
          </p>
          <h4 className="mt-4 font-semibold">Marcus Lee</h4>
          <p className="text-gray-500">Executive Director, Shoreline Youth Services</p>
  
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
  
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full flex flex-col items-center justify-center p-16 text-center space-y-4">
          <img src="/images/logos/greenbridge-logo.png" alt="GreenBridge logo" className="h-12 mb-4" />
          <p className="text-xl italic leading-relaxed">
            “Great UX thinking and fast iteration. The final deliverable exceeded expectations.”
          </p>
          <h4 className="mt-4 font-semibold">Priya N.</h4>
          <p className="text-gray-500">Program Manager, GreenBridge</p>
  
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
      </div>
    );
  }
  