import React from "react";
import SpofityPlayer from "./SpotifyPlayer";
import PomotoTimer from "./PomotoTimer";

export default function ContentWrapper() {
  return (
    <div>
      <PomotoTimer />
      <SpofityPlayer />
    </div>
  );
}
