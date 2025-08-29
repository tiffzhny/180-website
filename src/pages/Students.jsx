import TimeLine from '../components/TimeLine/TimeLine';
import React from 'react';


export default function Students() {
    return (
        <>
      <div
  className="relative hero min-h-[400px] bg-no-repeat bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/hero/students_hero.png')" }}>
  <div className="relative hero-content text-center p-8">
            <div className=" text-white">
              <h1 className="text-5xl font-bold">Recruitment</h1>
            </div>
          </div>
        </div>
        <main className="py-24 px-3 bg-white">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Recruitment Timeline</h2>
            <TimeLine />
        </main>
        </>
    );
}