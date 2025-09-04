import TimeLine from '../components/TimeLine/TimeLine';
import React from 'react';
import FAQs from '../components/FAQs/FAQs';

export default function Students() {
    return (
        <>
      <div
  className="relative hero min-h-[400px] bg-no-repeat bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/hero/students_hero.png')" }}>
  <div className="relative hero-content text-center p-8">
            <div className=" text-white">
              <h1 className="text-5xl font-bold">Students</h1>
            </div>
          </div>
        </div>
        <main className="max-w-5xl mx-auto pl-10 pr-10 bg-white">
        <h2 className="text-3xl text-black font-bold text-center mb-6 mt-20">Recruitment Timeline</h2>
        <h5 className="flex text-xl text-black font-bold mb-4">How we recruit</h5>
        <p className="text-black mb-4 flex">180 Degrees Consulting works effectively by recruiting from a diverse range of backgrounds and bringing together a broad range of skills this provides. If you are a student brimming with bright ideas and have a desire to make a real difference with your skill-set, then we encourage you to apply so that we can help you realize your potential.</p>
        <h5 className="flex text-xl text-black font-bold mb-4">Life as a consultant</h5>
        <p className="text-black mb-10 flex">As a 180 Degrees consultant, you will work with leading OC-based non-profits and tackle their toughest problems as an organization. You will be supported by our network of Engagement Managers, Executive Board members, and mentors from professional management consulting firms. A variety of training sessions, social events, and networking opportunities are also held throughout the quarter to further complement the consultant experience.</p>
         
            <TimeLine />
            <h2 className="text-3xl text-black font-bold text-center mb-12">Frequently Asked Questions</h2>

            <FAQs />

        </main>
        </>
    );
}