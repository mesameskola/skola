import React from "react";

export default function Header() {
  return (
    <div>
      <div className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
        <ul className="text-white underline flex gap-4 justify-center mt-2">
          <li>
            <a
              href="https://www.nba.com"
              target="_blank"
              className="text-black"
            >
              NBA
            </a>
          </li>
          <li>
            <a
              href="https://www.nba.com"
              target="_blank"
              className="text-black"
            >
              NBA
            </a>
          </li>
          <li>
            <a
              href="https://www.nba.com"
              target="_blank"
              className="text-black"
            >
              NBA
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
