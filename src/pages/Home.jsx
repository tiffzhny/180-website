import React from 'react';
import { Link } from 'react-router-dom'; 
import CompanyLogos from '../components/CompanyLogos/CompanyLogos';

export default function Home() {
    return (
      <>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url('/images/uci.jpg')"
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-3 text-7xl font-bold">180 Degrees Consulting</h1>
      <h2 className="mb-3 text-3xl font-bold">UC Irvine</h2>
      <p className="mb-5">
      We provide extremely affordable high-quality consulting for socially-minded non-profits.
      </p>
      <Link to ="/contact">
      <button className="btn btn-primary">Contact Us</button>
      </Link>
      
    </div>
  </div>
</div>

<main className="pt-10 px-10 bg-white text-gray-900">

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg max-w-6xl mx-auto my-10 p-6 rounded-xl">
<div className="space-y-4 flex flex-col justify-center">
  <h2 className="text-2xl font-bold">What is 180 Degrees</h2>
  <p className="text-base leading-relaxed">
  180 Degrees Consulting is the world’s largest consultancy for non-profits and social enterprises. We meet the need of non-profits for affordable, high-quality strategic and operational advice, by connecting the 
untapped capabilities of top university students, with the unmet needs of socially conscious organizations.
  </p>
  <div className="mt-4">
    <button className="btn btn-primary">Learn More</button>
  </div>
</div>
<div className="flex items-center justify-center">
  <img
    src="/images/180-degrees.png"
    alt="180 Group"
    className="w-full h-auto rounded-xl object-cover max-h-[500px]"
  />
</div>

</div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg max-w-6xl mx-auto my-10 p-6 rounded-xl">

    <div className="flex items-center justify-center">
      <img
        src="/images/180group.jpg"
        alt="180 Group"
        className="w-full h-auto rounded-xl object-cover max-h-[500px]"
      />
    </div>
    
    <div className="space-y-4 flex flex-col justify-center">
      <h2 className="text-2xl font-bold">Who We Are</h2>
      <p className="text-base leading-relaxed">
        Founded in 2017, our award winning branch represents a team of the most diverse,
        high-achieving, creative and socially conscious undergraduate students passionate
        about making a genuine impact on the world around them. We have worked with various
        leading non-profits in Orange County and hold the highest reputation of professionalism
        and delivering advice of the highest quality to our clients.
      </p>
      <div className="mt-4">
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg max-w-6xl mx-auto my-10 p-6 rounded-xl">

  <div className="space-y-4 flex flex-col justify-center">
      <h2 className="text-2xl font-bold">How to Join</h2>
      <p className="text-base leading-relaxed">
      Welcome to 180 Degrees Consulting UC Irvine! We provide affordable, high quality consulting services for non-profits, social enterprises, and socially minded for-profit companies in Orange County.
       Want to learn more about how to join?
      </p>
      <div className="mt-4">
        <button className="btn btn-primary">Join Us</button>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <img
        src="/images/180group.jpg"
        alt="180 Group"
        className="w-full h-auto rounded-xl object-cover max-h-[500px]"
      />
    </div>
  
  </div>
  <CompanyLogos />
  
</main>

      </>
    );
  }
  