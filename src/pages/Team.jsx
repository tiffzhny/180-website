import React, { useEffect, useMemo, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import CompanyLogos from "../components/CompanyLogos/CompanyLogos";

export default function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const docs_url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQClsy4nUnoM8sL5ujmgcMWazD77YEQWMwzJOkyw7y8GAGDew9j-0nRkrZIDeHIWd6XwM07KdDQMVN/pub?output=csv";

    fetch(docs_url)
      .then((res) => res.text())
      .then((csvText) => {
        const rows = csvText.trim().split(/\r?\n/);
        const headers = rows[0].split(",").map((h) => h.trim());
        const data = rows.slice(1).map((row) => {
          const values = row.split(",").map((v) => v.trim());
          const obj = {};
          headers.forEach((h, i) => (obj[h] = values[i] || ""));
          return obj;
        });
        setMembers(data);
      })
      .catch((err) => console.error("Error fetching Google Sheet:", err));
  }, []);

  const groups = useMemo(() => {
    const norm = (s = "") => s.toLowerCase().trim();

    const leadership = [];
    const ems = [];
    const consultants = [];
    // ACs are intentionally excluded from display

    members.forEach((m) => {
      const role = norm(m.Role);

      const isAssociateConsultant =
        role.includes("associate consultant") || role === "ac" || role.includes("associate");

      const isEngagementManager =
        role.includes("engagement manager") || role === "em" || role.includes("eng. mgr");

      const isConsultant = role.includes("consultant") && !isAssociateConsultant;

      const isLeadership =
        role.includes("president") ||
        role.includes("vp") ||
        role.includes("vice president") ||
        role.includes("director") ||
        // default any non-EM, non-consultant, non-AC to leadership
        (!isEngagementManager && !isConsultant && !isAssociateConsultant);

      if (isAssociateConsultant) {
        // skip (not shown)
        return;
      } else if (isEngagementManager) {
        ems.push(m);
      } else if (isConsultant) {
        consultants.push(m);
      } else if (isLeadership) {
        leadership.push(m);
      }
    });

    // ranking for leadership (lower number = higher rank)
    const rankOf = (roleRaw = "") => {
      const r = norm(roleRaw);
      if (r.includes("executive president")) return 0;
      if (r.includes("executive vice president")) return 1;
      if (r.includes("external vice president")) return 2;
      if (r.includes("vice president of internal affairs")) return 3;
      if (r.includes("vice president of professional development")) return 4;
      if (r.includes("vice president") || /\bvp\b/.test(r)) return 5;
      if (r.includes("director of marketing")) return 6;
      if (r.includes("director of data management")) return 7;
      return 7; // any other leadership titles
    };

    const byName = (a, b) =>
      (a["Last Name"] || "").localeCompare(b["Last Name"] || "") ||
      (a["First Name"] || "").localeCompare(b["First Name"] || "");

    leadership.sort((a, b) => {
      const diff = rankOf(a.Role) - rankOf(b.Role);
      return diff !== 0 ? diff : byName(a, b);
    });
    ems.sort(byName);
    consultants.sort(byName);

    return { leadership, ems, consultants };
  }, [members]);

  const MemberCard = ({ member }) => {
    const first = member["First Name"] || "";
    const last = member["Last Name"] || "";
    const img = `/images/members/${first}_${last}.jpg`;

    const major1 =
      member["Major #1"] || member["Major 1"] || member["Major"] || "";
    const major2 = member["Major #2"] || member["Major 2"] || "";

    const majors = [major1, major2]
      .map((m) => (m || "").trim())
      .filter((m) => m && m !== "-" && m.toLowerCase() !== "n/a")
      .join(" & ");

    return (
      <div className="bg-gray-100 p-4 rounded-md shadow text-center w-full max-w-xs mx-auto">
        <img
          src={img}
          alt={`${first} ${last}`}
          className="w-40 h-56 mx-auto mb-4 rounded-md object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/members/_placeholder.jpg";
          }}
        />
        <h3 className="text-black text-xl font-semibold">
          {first} {last}
        </h3>
        {majors && (
          <p className="text-gray-600 mb-1 text-sm break-words">{majors}</p>
        )}
        {member.Role && <p className="text-gray-600 mb-2">{member.Role}</p>}
        {member.LinkedIn && (
          <a
            href={member.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-400 hover:text-gray-600"
          >
            <FaLinkedin className="w-6 h-6 inline" />
          </a>
        )}
      </div>
    );
  };

  const Grid = ({ list }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 max-w-6xl mx-auto items-stretch">
      {list.map((m, i) => (
        <MemberCard key={`${m["First Name"]}-${m["Last Name"]}-${i}`} member={m} />
      ))}
    </div>
  );

  const Section = ({ title, list }) =>
    list.length ? (
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <Grid list={list} />
      </section>
    ) : null;

  return (
    <section className="bg-white">
      {/* Hero */}
      <div
        className="hero min-h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/team_hero.png')" }}
      >
        <div className="hero-content text-center p-8">
          <div className="text-white">
            <h1 className="text-5xl font-bold">Our Team</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-3 bg-white">
        <Section title="Leadership" list={groups.leadership} />
        <Section title="Engagement Managers" list={groups.ems} />
        <Section title="Consultants" list={groups.consultants} />

        <section className="py-20 px-3 bg-white">
          <CompanyLogos />
        </section>
      </div>
    </section>
  );
}
