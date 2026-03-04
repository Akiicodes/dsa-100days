"use client";

import Link from "next/link";
import { solutions } from "../data/solutions";

export default function Home() {

  const days = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="gradient-bg min-h-screen text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        🚀 100 Days of DSA
      </h1>

      <p className="text-gray-300 mb-10">
        Click any day to view GitHub and LeetCode solutions
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-5">

        {days.map((day) => {

          const completed = solutions[day];

          return (
            <Link key={day} href={`/day/${day}`}>

              <div
                className={`
                backdrop-blur-md
                border border-white/20
                rounded-xl
                p-5
                text-center
                cursor-pointer
                transition-all duration-300
                hover:scale-110
                hover:bg-white/20

                ${completed
                  ? "bg-green-500/20 shadow-[0_0_25px_rgba(34,197,94,0.9)]"
                  : "bg-white/10"}
                `}
              >

                Day {day}

              </div>

            </Link>
          );
        })}

      </div>

    </div>
  );
}