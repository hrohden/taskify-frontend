import { useState } from "react";
import BoardColumn from "./BoardColumn";
import { Task } from "./Task";

const Board = () => {
  const [tasks] = useState<Task[]>([
    {
      id: "1",
      status: "RUNNING",
      title: "Create Taskify application",
      description: "Initial code to showcase some features.",
    },
    {
      id: "2",
      status: "RUNNING",
      title: "Create GitHub repository",
      description: "Create repo and push code to it",
    },
  ]);
  return (
    <div className="flex w-full justify-between gap-3">
      <BoardColumn title="Pending" tasks={[]} />
      <BoardColumn title="Running" tasks={tasks} />
      <BoardColumn title="Blocked" tasks={[]} />
      <BoardColumn title="Completed" tasks={[]} />
    </div>
  );
};
export default Board;
