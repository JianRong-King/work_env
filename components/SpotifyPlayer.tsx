"use client";
import React, { useState, useEffect } from "react";

export default function SpotifyPlayer() {
  //   const [data, setData] = useState(null); // State to hold API data
  //   const [error, setError] = useState<string | null>(null); // State to handle errors
  //   const [loading, setLoading] = useState(true); // State to indicate loading

  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const response = await fetch(
  //           "https://open.spotify.com/playlist/6zCID88oNjNv9zx6puDHKj?si=eJdj1seJSeyMyti4lolzQA"
  //         );

  //         if (!response.ok) {
  //           throw new Error("Failed to fetch data");
  //         }

  //         const responseJson = await response.json();
  //         setData(responseJson);
  //       } catch (err) {
  //         if (err instanceof Error) {
  //           setError(err.message);
  //         } else {
  //           setError("An unknown error occurred");
  //         }
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     getData();
  //   }, []);

  return (
    <div className="flex flex-cols-2">
      <div className="flex justify-center items-center rounded-lg mx-4">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYoYGBbGKurt?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex justify-center items-center rounded-lg mx-4">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX786ROcOIz84?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
