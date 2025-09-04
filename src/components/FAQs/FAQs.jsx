import React from "react";

export default function FAQs() {
    return (
        
        <div className="max-w-5xl mx-auto space-y-2 text-black">
  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
    What is 180 Degrees Consulting?
    </div>
    <div className="collapse-content">
      <p>180 Degrees Consulting is a global organization with 150+ branches worldwide. By connecting highly qualified university students to social impact organizations, 180 Degrees Consulting provides non-profits and social enterprises extremely affordable access to high-quality management consulting.</p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
    What does the recruiting process look like?
    </div>
    <div className="collapse-content">
    <p>During our recruiting cycle in Fall and Winter quarters, we usually have a few networking events for us to get to know one another. If you decide you'd like to join our team, make sure to fill out an application in addition to attending the networking events. If you're invited and successfully complete our interview process, you will be offered a spot on our team as an extern!</p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
    What is the expected time commitment for a consultant on our team?

    </div>
    <div className="collapse-content">
    <p>It definitely depends on the individual project you're assigned to, but you can expect around 3-8 hours a week.</p>
    </div>
  </div>
</div>

        
    )
}