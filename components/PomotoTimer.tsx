"use client";
import React, { useState, useEffect } from "react";

export default function PomotoTimer() {
  const [preferedTime, setPreferedTime] = useState(25 * 60); // Preferred time in seconds
  const [timeLeft, setTimeLeft] = useState(preferedTime); // Time left in seconds
  const [running, setRunning] = useState(false); // Timer running state

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (running) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(interval); // Stop the timer when it reaches 0
            setRunning(false);
            return 0;
          }
          return prevTimeLeft - 1; // Decrease time left by 1 second
        });
      }, 1000);
    }

    // Clean up interval on unmount or when `running` changes
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => setRunning(true); // Start timer
  const handleStop = () => setRunning(false); // Stop timer
  const handleReset = () => {
    setRunning(false);
    setTimeLeft(preferedTime); // Reset time to preferred time
  };

  // Convert seconds into minutes and seconds for display
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="w-1/2 border-2 min-h-64 flex justify-center items-center rounded-lg">
      <div className=" grid grid-cols-1 items-center">
        <div className="mt-10 mb-20 flex justify-center">
          <h1 className="text-8xl">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </h1>
        </div>
        <div className="min-h-5 justify-center flex">
          <button
            className="m-4 rounded-lg bg-gray-500 text-black p-2"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="m-4 rounded-lg bg-gray-500 text-black p-2"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="m-4 rounded-lg bg-gray-500 text-black p-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
