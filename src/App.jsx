import { useState } from "react";
import "./App.css";
import TaskBoard from "./components/TaskBoard";
import { tasksList } from "./utils/constants";

function App() {
  return (
    <>
      <TaskBoard />
    </>
  );
}

export default App;
