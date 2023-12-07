import { useState } from "react";
import BoardColumn from "./BoardColumn";
import { Task } from "./Task";

const Board = () => {
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
    <div className="flex w-full justify-between gap-2">
      <BoardColumn title="Pending" tasks={tasks} />
      <BoardColumn title="Running" tasks={tasks} />
      <BoardColumn title="Blocked" tasks={tasks} />
      <BoardColumn title="Completed" tasks={tasks} />
    </div>
  );
};
export default Board;
