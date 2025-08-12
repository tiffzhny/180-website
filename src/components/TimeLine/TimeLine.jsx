import React from "react";
import { timeline } from "../../data/timeline";

export default function RecruitmentTimeline() {
  return (
    <section className="bg-white">      
      <div className="relative max-w-5xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-[120px] top-0 w-0.5 bg-gray-300 h-full"></div>

        {timeline.map((event, index) => (
          <div key={index} className="flex items-start mb-12 relative">
            
            {/* Date */}
            <div className="w-[100px] text-right text-base text-gray-500">
              {event.date}
            </div>

            {/* Event content */}
            <div className="ml-8 p-4 bg-white text-black rounded-md shadow-sm border border-gray-200 flex-1">
              <h3 className="text-lg font-bold">{event.title}</h3>
              
              {event.description && (
                <p className="text-gray-600 mt-2">{event.description}</p>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
