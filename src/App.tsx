import { useState } from "react";
import Board from "./Board";
import { Task } from "./Task";

function App() {
  const [tasks] = useState<Task[]>([
    {
      status: "RUNNING",
      title: "Create Taskify application",
      description: "Initial code to showcase some features.",
    },
    {
      status: "RUNNING",
      title: "Create GitHub repository",
      description: "Create repo and push code to it",
    },
  ]);

  return (
    <div className="flex w-full flex-col items-center gap-8 p-12">
      <h1 className="text-6xl font-bold">Taskify</h1>
      <Board tasks={tasks} />
    </div>
  );
}

export default App;
