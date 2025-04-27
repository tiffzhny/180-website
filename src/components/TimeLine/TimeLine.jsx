import { FaInfoCircle, FaArrowUp, FaHandshake } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { useEffect } from 'react';


const timelineEvents = [
  {
    date: '12/16',
    title: 'Applications Open',
    description: 'Apply at https://tinyurl.com/180dcwinter2025',
    icon: <FaInfoCircle />,
  },
  {
    date: '1/8',
    title: 'Virtual Info Session (time TBD)',
    description: 'Zoom Info: Meeting ID: 444 305 8677 Passcode: 180dcuci',
    icon: <FaInfoCircle />,
  },
  {
    date: '1/14',
    title: 'In-Person Info Session (time TBD)',
    description: 'Room Location TBD',
    icon: <FaInfoCircle />,
  },
  {
    date: '1/15',
    title: 'Applications Due @ 11:59 PM PDT',
    description: '',
    icon: <FaArrowUp />,
  },
  {
    date: '1/18 & 1/19',
    title: 'Interview Rounds 1 & 2 (Invite Only)',
    description: '',
    icon: <FaHandshake />,
  },
];

export default function Timeline() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);
    return (
        <section className="bg-white py-12 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Recruitment Timeline</h2>
            <div className="relative border-l-5 rounded border-green-300 pl-6">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="mb-10 relative">
                        <div className="absolute -left-6 top-1 text-green-600 bg-white rounded-full p-1 shadow">
                            <div className="text-lg">{event.icon}</div>
                        </div>
                        <div key = {index} data-aos ="fade-up" data-aos-delay={index * 100}
                            className="bg-gray-50 rounded-md p-6 shadow">
                            <h3 className="text-lg font-semibold">
                                {event.date} : {event.title}
                            </h3>
                            {event.description && (
                                <p className="text-gray-700 mt-1 text-sm">{event.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
