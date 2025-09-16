"use client";
import React, { useState, useEffect } from "react";

const Section6 = () => {
  const [stats, setStats] = useState({
    visits: 0,
    downloads: 0,
    members: 0,
    satisfaction: 0,
  });

  const finalStats = {
    visits: 29,          // e.g., 29k website visits
    downloads:100,       // e.g., 16 clients onboarded recently
    members: 50,      // 80k active medical practices
    satisfaction: 100,   // 100% satisfaction
  };

  const animationDuration = 2000;
  const fps = 60;

  useEffect(() => {
    const stepsCount = (animationDuration / 1000) * fps;
    const incrementSteps = {
      visits: finalStats.visits / stepsCount,
      downloads: finalStats.downloads / stepsCount,
      members: finalStats.members / stepsCount,
      satisfaction: finalStats.satisfaction / stepsCount,
    };

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      if (frame <= stepsCount) {
        setStats({
          visits: Math.min(Math.ceil(incrementSteps.visits * frame), finalStats.visits),
          downloads: Math.min(Math.ceil(incrementSteps.downloads * frame), finalStats.downloads),
          members: Math.min(Math.ceil(incrementSteps.members * frame), finalStats.members),
          satisfaction: Math.min(Math.ceil(incrementSteps.satisfaction * frame), finalStats.satisfaction),
        });
      } else {
        setStats(finalStats);
        clearInterval(interval);
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}k`;
    }
    return num.toString();
  };

  return (
    <section
      className="flex items-center justify-center relative pt-12 py-10 rounded-4xl px-10 overflow-hidden"
      style={{
        backgroundImage: "url('/counterShape1_1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "20px",
        borderRadius: "55px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="md:mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-white">
          {/* Website Visitors */}
          <div className="text-center">
            <h3 className="text-6xl font-bold mb-4">{stats.visits}+</h3>
            <p className="text-xl">Happy clients</p>
          </div>

          {/* Clients Onboarded */}
          <div className="text-center">
            <h3 className="text-6xl font-bold mb-4">{stats.downloads}+</h3>
            <p className="text-xl">Completed Projects</p>
          </div>

          {/* Active Members */}
          <div className="text-center">
            <h3 className="text-6xl font-bold mb-4">{formatNumber(stats.members)}+</h3>
            <p className="text-xl">Active Projects</p>
          </div>

          {/* Customer Satisfaction */}
          <div className="text-center">
            <h3 className="text-6xl font-bold mb-4">{stats.satisfaction}%</h3>
            <p className="text-xl">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
