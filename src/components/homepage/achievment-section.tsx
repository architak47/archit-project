"use client";
import Image from "next/image";
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";

export default function AchievementSection() {
  const achievements = [
    {
      icon: "/Images/icon-1.png",
      number: 2245341,
      title: "Members",
    },
    {
      icon: "/Images/icon-2.png",
      number: 828867,
      title: "Event Bookings",
    },
    {
      icon: "/Images/icon-3.png",
      number: 46328,
      title: "Clubs",
    },
    {
      icon: "/Images/icon-4.png",
      number: 1926436,
      title: "Payments",
    },
  ];

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("achievement-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on initial render to check visibility
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="achievement-section" className="flex py-12 px-[5%] bg-[#F5F7FA]">
      <div className="flex max-w-[72rem] mx-auto w-full">
        <div className="flex max-md:flex-wrap w-full gap-12 justify-between items-center">
          <div className="flex flex-col w-[100%] max-w-[33.75rem]">
            <h2 className="text-4xl font-semibold leading-[2.75rem] text-[#4D4D4D]">
              Helping a local{" "}
              <span className="text-[#4CAF4F] text-nowrap">
                business reinvent itself
              </span>
            </h2>
            <p className="space-y-2 text-[#717171]">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 w-[100%] gap-y-10">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex w-[100%] gap-4 items-center">
                <Image
                  src={achievement.icon}
                  alt="Illustration"
                  width={48}
                  height={48}
                />
                <div>
                  <h2 className="text-3xl font-bold text-[#4D4D4D]">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={achievement.number}
                        duration={2}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                  </h2>
                  <p>{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
