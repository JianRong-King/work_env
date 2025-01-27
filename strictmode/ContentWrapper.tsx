import React from "react";
import SpotifyPlayer from "../components/SpotifyPlayer";
import PomodoroTimer from "../components/PomotoTimer";

import TodoList from "../components/TodoList";

export default function ContentWrapper() {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center my-10">
        <PomodoroTimer />
        <div className="flex flex-row m-6 p-6 ">
          <TodoList />
        </div>
      </div>
    </div>
  );
}
