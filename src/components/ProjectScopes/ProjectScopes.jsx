import React from "react";

export default function ProjectScopes() {
    return (
        <div className="max-w-xl mx-auto space-y-2 text-black">
  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
      Market Research
    </div>
    <div className="collapse-content">
      <p><ul>
            <li>Industry Trends</li>
            <li>Target Audience</li>
            <li>Competitive Analysis</li>
        </ul></p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
      Finance
    </div>
    <div className="collapse-content">
    <p><ul>
            <li>Cost Management</li>
            <li>Investment Feasibility</li>
            <li>Staff Expansion and Hiring</li>
        </ul></p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
    Marketing and Fundraising
    </div>
    <div className="collapse-content">
    <p><ul>
            <li>Organization Branding</li>
            <li>Fundraising Strategies</li>
            <li>Event Logistics</li>
        </ul></p>
    </div>
  </div>
  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
    Operations and Technology
    </div>
    <div className="collapse-content">
    <p><ul>
            <li>Data Management </li>
            <li>Systems and Operations</li>
            <li>PR and Communications</li>
            <li>CRM Selection & Integration</li>
        </ul></p>
    </div>
  </div>
  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
    Strategy
    </div>
    <div className="collapse-content">
    <p><ul>
            <li>Business Strategy </li>
            <li>Project Feasibility</li>
            <li>Fee-based Modeling</li>
        </ul></p>
    </div>
  </div>
  <div tabIndex={0} className="collapse collapse-plus border rounded-md">
    <div className="collapse-title text-lg font-semibold">
    Organization 
    </div>
    <div className="collapse-content">
    <p><ul>
            <li>Human Capital</li>
            <li>Corporate Pipelines</li>
            <li>Volunteer Management</li>
            <li>Organizational Structure</li>
        </ul></p>
    </div>
  </div>
</div>

        
    )
}