import Link from "next/link";
import { solutions } from "../data/solutions";

export default function Home() {

  const days = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="gradient-bg min-h-screen text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        🚀 100 Days of DSA
      </h1>

      <p className="text-gray-300 mb-10">
        Click any day to view GitHub and LeetCode solutions
      </p>

      <div className="grid grid-cols-5 md:grid-cols-10 gap-5">

        {days.map((day) => {

          const completed = solutions[day];

          return (
            <Link key={day} href={`/day/${day}`}>
<div
  className={`
  p-5 text-center rounded-xl cursor-pointer
  backdrop-blur-md bg-white/10 border border-white/20
  transition-all duration-300
  hover:scale-110 hover:bg-white/20
  hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]
  ${completed ? "shadow-[0_0_20px_rgba(34,197,94,0.8)]" : ""}
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