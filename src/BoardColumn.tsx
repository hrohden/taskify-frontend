import { FaPlus } from "react-icons/fa";
import TaskCard from "./TaskCard";
import { Task } from "./types/Task";

const BoardColumn = ({ tasks, title }: { tasks: Task[]; title: string }) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full justify-center font-semibold">{title}</div>
      <div className="">
        <button className="flex w-full items-center justify-center gap-1 rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-semibold">
          <FaPlus /> Add
        </button>
      </div>
      {tasks.length > 0 ? (
        <div className="flex w-full flex-col justify-stretch gap-3">
          {tasks.map((t) => (
            <TaskCard task={t} key={t.id} />
          ))}
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-sm text-gray-400">
          None
        </div>
      )}
    </div>
  );
};
export default BoardColumn;
