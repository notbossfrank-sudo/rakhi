"use client";

import { useState, useEffect } from "react";

const HeartParticles = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        className="absolute animate-float"
        style={{
          left: `${Math.random() * 100}vw`,
          bottom: `-${Math.random() * 20 + 20}vh`,
          fontSize: `${Math.random() * 1.5 + 0.5}rem`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() * 0.5 + 0.2,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="text-primary/50"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    ));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      {particles}
    </div>
  );
};

export default HeartParticles;
