import Link from "next/link";
import { solutions } from "../data/solutions";

export default function Home() {

  const days = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>100 Days of DSA</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10,1fr)",
          gap: "15px",
          marginTop: "20px"
        }}
      >

        {days.map((day) => {

          const completed = solutions[day];

          return (
            <Link key={day} href={`/day/${day}`}>
              <button
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  background: completed ? "#22c55e" : "#374151",
                  color: "white"
                }}
              >
                Day {day}
              </button>
            </Link>
          );
        })}

      </div>

    </div>
  );
}