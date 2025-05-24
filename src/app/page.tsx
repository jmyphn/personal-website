"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HomePage = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(interval);
  }, []);

  const blogs = [
    { date: "2025-05-24", title: "hello, world", href: "./blogs/hello-world"},
  ];

  const socials = [
    { name: "github", url: "https://github.com/jmyphn" },
    { name: "linkedin", url: "https://linkedin.com/in/jmyphn" },
    {
      name: "email",
      emailB64: "anAyNjlAY29ybmVsbC5lZHU=" // Base64 encoded
    },
    { name: "instagram", url: "https://instagram.com/jmyphn" },
    {name: "reading list", url: "/reading_list"},
    {name: "spotify", url: "https://open.spotify.com/user/aer02048?si=44e962dc928c48d5"},
  ];

  const handleEmailClick = (emailB64: string) => {
    try {
      const email = atob(emailB64);
      window.location.href = `mailto:${email}`;
    } catch (error) {
      console.error("Failed to decode email: ", error);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto text-left space-y-6">
      <h1 className="text-4xl font-bold font-mono mb-4">
        <span className="text-blue-600">&gt;</span> cat &ldquo;jimmy_phan&rdquo;
        <span className="" aria-hidden>
          {showCursor ? "_" : "\u00a0"}
        </span>
      </h1>
      <p className="text-md ">
        software engineer and computer science student interested in distributed and performance-sensitive systems.
        i love talking about systems programming, distributed systems, operating systems, performance optimizations, and the plethora of random things in-between.
      </p>
      <p className="text-md">
        i&apos;m currently finishing my b.s. and m.eng. degrees at cornell university, 
        where i am a research assistant on <Link href="https://www.cs.cornell.edu/ken/Cascade-Project/" className="text-blue-600 hover:underline">cascade</Link> and <Link href="https://github.com/Derecho-Project/vortex" className="text-blue-600 hover:underline">vortex</Link>, advised by <Link href="https://www.cs.cornell.edu/ken/" className="text-blue-600 hover:underline">professor ken birman</Link>. 
        i am also a teaching assistant for <Link href="https://www.cs.cornell.edu/courses/cs4414/2025fa/" className="text-blue-600 hover:underline">cs 4414: systems programming</Link>, cross-listed with <Link href="https://www.cs.cornell.edu/courses/cs5416/2025fa/" className="text-blue-600 hover:underline">cs 5416: cloud and ml-systems programming</Link>.
        
      </p>

      <p className="text-md">
        i&apos;m interning at amazon in new york city this summer in the business organization.
      </p>
      <p className="text-md">
        outside of academics, i enjoy weightlifting and rock climbing.
        i also follow the nba and formula 1 a bit too closely.
        i&apos;m exploring new things too, like kitesurfing and photography.
      </p>

      <section>
        <h2 className="text-2xl font-semibold font-mono mb-2"><span className="text-blue-600">&gt;</span> ls blog</h2>
        <ul className="space-y-2">
          {blogs.map(({ date, title, href }) => (
            <li key={href} className="text-gray-800">
              <span className="font-mono text-sm text-gray-500 mr-4">{date}</span>
              <Link href={href} className="text-blue-600 hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold font-mono">
          <span className="text-blue-600">&gt;</span> ls connect</h2>
        <div className="grid grid-cols-2 gap-2 font-mono">
          {socials.map(({ name, url, emailB64 }) =>
            emailB64 ? (
              <button
                key={name}
                onClick={() => handleEmailClick(emailB64)}
                className="text-blue-600 hover:underline text-left"
              >
                {name}
              </button>
            ) : (
              <a
                key={name}
                href={url}
                // target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {name}
              </a>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
