import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      status: "PENDING",
      title: "Create Taskify application",
      description: "Initial code to showcase some features.",
    },
  ]);

  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-4xl">Taskify</h1>
      <ul>
        {tasks.map((t) => (
          <li>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
