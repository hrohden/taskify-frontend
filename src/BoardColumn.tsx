import { FaPlus } from "react-icons/fa";
import TaskCard from "./TaskCard";
import { Task } from "./types/Task";

const BoardColumn = ({ tasks, title }: { tasks: Task[]; title: string }) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full justify-center font-semibold">{title}</div>
      <div className="">
        <button className="flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
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
