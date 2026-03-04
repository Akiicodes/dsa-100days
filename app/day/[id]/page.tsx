"use client";

import { useParams } from "next/navigation";
import { solutions } from "../../../data/solutions";

export default function DayPage() {

  const params = useParams();
  const day = params.id as string;

  const data = solutions[day];

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  if (!data) {
    return <h1>No solution uploaded yet</h1>;
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>Day {day}</h1>

      <h2>GitHub Question</h2>

      <pre
        style={{
          background: "#111",
          color: "#00ff9d",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto"
        }}
      >
        {data.github}
      </pre>

      <button onClick={() => copy(data.github)}>
        Copy
      </button>

      <h2>LeetCode Question</h2>

      <pre
        style={{
          background: "#111",
          color: "#00ff9d",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto"
        }}
      >
        {data.leetcode}
      </pre>

      <button onClick={() => copy(data.leetcode)}>
        Copy
      </button>

    </div>
  );
}