import React from "react";
import { project_timeline } from "../../data/project_timeline";

export default function ProjectTimeline() {
  return (
    <section className="bg-white">      
      <div className="relative max-w-5xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-[20px] top-0 w-0.5 bg-green-600 h-full"></div>

        {project_timeline.map((event, index) => (
          <div key={index} className="flex items-start mb-12 relative">

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
