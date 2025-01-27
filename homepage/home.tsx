"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center bg-white p-10 rounded-lg shadow-2xl max-w-md">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          Welcome to Study With King
        </h1>
        <p className="text-gray-700 mb-8 text-lg">
          Your journey to knowledge starts here.
        </p>
        <Link href="/workpage">
          <h2 className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg font-semibold">
            Start Working
          </h2>
        </Link>
      </div>
    </div>
  );
}
