import React from "react";
import SpofityPlayer from "./SpotifyPlayer";
import PomotoTimer from "./PomotoTimer";
import TodoList from "./TodoList";

export default function ContentWrapper() {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center my-10">
        <PomotoTimer />
        <div className="flex flex-row m-6 p-6 ">
          <SpofityPlayer />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
