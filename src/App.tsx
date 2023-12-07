import { useState } from "react";
import { Task } from "./Task";
import TaskCard from "./TaskCard";

function App() {
  const [tasks] = useState<Task[]>([
    {
      status: "PENDING",
      title: "Create Taskify application",
      description: "Initial code to showcase some features.",
    },
    {
      status: "PENDING",
      title: "Create GitHub repository",
      description: "Create repo and push code to it",
    },
  ]);

  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-4xl">Taskify</h1>
      {tasks.map((t) => (
        <TaskCard task={t} />
      ))}
    </div>
  );
}

export default App;
