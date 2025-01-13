import React from "react";
import SpofityPlayer from "./SpotifyPlayer";
import PomotoTimer from "./PomotoTimer";

export default function ContentWrapper() {
  return (
    <div className="flex flex-col gap-4 p-4 items-center">
      <PomotoTimer />
      <SpofityPlayer />
    </div>
  );
}
