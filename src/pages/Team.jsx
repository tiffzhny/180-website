import { useEffect, useState } from "react";
import { FaLinkedin } from 'react-icons/fa';
import React from 'react';
import CompanyLogos from '../components/CompanyLogos/CompanyLogos';


export default function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const docs_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQClsy4nUnoM8sL5ujmgcMWazD77YEQWMwzJOkyw7y8GAGDew9j-0nRkrZIDeHIWd6XwM07KdDQMVN/pub?output=csv";

    fetch(docs_url)
      .then(res => res.text())
      .then(csvText => {
        // Split into rows (handle both \r\n and \n)
        const rows = csvText.trim().split(/\r?\n/);

        // Extract headers
        const headers = rows[0].split(",").map(h => h.trim());

        // Map each row to an object
        const data = rows.slice(1).map(row => {
          const values = row.split(",").map(v => v.trim());
          let obj = {};
          headers.forEach((header, i) => {
            obj[header] = values[i] || "";
          });
          return obj;
        });

        setMembers(data);
      })
      .catch(err => console.error("Error fetching Google Sheet:", err));
  }, []);

  return (
    <section className="py-24 px-3 bg-white">
      <h2 className="text-3xl text-gray-900 font-bold text-center mb-10">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 max-w-6xl mx-auto">
        {members.map((member, i) => {
          // Handle spaces in file names
          const safeFirstName = member["First Name"];
          const safeLastName = member["Last Name"];

          // Public folder image paths
          const jpgPath = `/images/members/${safeFirstName}_${safeLastName}.jpg`;

          return (
            <div key={i} className="bg-gray-100 p-4 rounded-md shadow text-center w-full max-w-xs mx-auto">
              <img
                src={jpgPath}
                alt={`${member["First Name"]} ${member["Last Name"]}`}
                className="w-40 h-56 mx-auto mb-4 rounded-md object-cover"
              />
              <h3 className="text-black text-xl font-semibold">
                {member["First Name"]} {member["Last Name"]}
              </h3>
              <p className="text-gray-600 mb-2 text-sm">{member.Major}</p>
              <p className="text-gray-600 mb-2">{member.Role}</p>
              {member.LinkedIn && (
                <a
                  href={member.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400 hover:text-gray-500"
                >
                  <FaLinkedin className="w-6 h-6 inline" />
                </a>
              )}
            </div>
          );
        })}
      </div>
      <section className="py-20 px-3 bg-white">
      <CompanyLogos />
      </section>
    </section>
    
  );
}
