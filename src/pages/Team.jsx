import { useEffect, useState } from "react";
import { FaLinkedin } from 'react-icons/fa';

export default function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('https://api.sheetbest.com/sheets/63789089-e805-4dd5-abb7-f1ccd6e1d3da') // <-- your actual URL
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  return (
    <section className="py-16 px-3">
      <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <div key={index} className="w-64 bg-gray-100 p-6 rounded-md shadow text-center">
            <img
              src={member.Photo}
              alt={member.Name}
              className="w-48 h-60 mx-auto mb-4 rounded-md object-cover"
            />
            <h3 className="text-xl font-semibold">{member.Name}</h3>
            <p className="text-gray-600 mb-2">{member.Role}</p>
            <a
              href={member.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-400 hover:text-gray-500"
            >
              <FaLinkedin className="w-6 h-6 inline" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
