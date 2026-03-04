"use client";

import { useParams } from "next/navigation";
import { solutions } from "../../../data/solutions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DayPage() {

  const params = useParams();
  const day = params.id as string;

  const data = solutions[day];

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  if (!data) {
    return (
      <div className="gradient-bg min-h-screen flex items-center justify-center text-white">

        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-2xl text-center shadow-xl">

          <h1 className="text-3xl mb-4">
            🚧 Solution Not Uploaded
          </h1>

          <p className="text-gray-300 mb-6">
            The solution for this day hasn't been added yet.
          </p>

          <a
            href="/"
            className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Go Back
          </a>

        </div>

      </div>
    );
  }

  return (
    <div className="gradient-bg min-h-screen text-white p-10">

      <h1 className="text-3xl font-bold mb-10">
        Day {day}
      </h1>

      {/* GitHub Solution */}

      <div className="mb-10">

        <h2 className="text-xl font-semibold mb-4">
          GitHub Question
        </h2>

        <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient">

          <div className="bg-gray-900 rounded-xl p-4">

            <SyntaxHighlighter
              language="cpp"
              style={vscDarkPlus}
              customStyle={{ borderRadius: "10px" }}
            >
              {data.github}
            </SyntaxHighlighter>

          </div>

        </div>

        <button
          onClick={() => copy(data.github)}
          className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Copy Code
        </button>

      </div>

      {/* LeetCode Solution */}

      <div>

        <h2 className="text-xl font-semibold mb-4">
          LeetCode Question
        </h2>

        <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient">

          <div className="bg-gray-900 rounded-xl p-4">

            <SyntaxHighlighter
              language="cpp"
              style={vscDarkPlus}
              customStyle={{ borderRadius: "10px" }}
            >
              {data.leetcode}
            </SyntaxHighlighter>

          </div>

        </div>

        <button
          onClick={() => copy(data.leetcode)}
          className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Copy Code
        </button>

      </div>

    </div>
  );
}