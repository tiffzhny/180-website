import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
      <>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url('/images/uci.jpeg')"
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


        <main className="pt-20 px-6">
          <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Real Projects</h3>
              <p className="text-gray-600">
                Collaborate with nonprofits & startups to solve meaningful challenges.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Professional Growth</h3>
              <p className="text-gray-600">
                Gain consulting, teamwork, and leadership experience.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Global Network</h3>
              <p className="text-gray-600">
                Be part of the world’s largest university-based consultancy.
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
  