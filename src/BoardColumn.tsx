import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import TaskCard from "./TaskCard";
import { Task } from "./types/Task";

const BoardColumn = ({ tasks, title }: { tasks: Task[]; title: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full items-center justify-center gap-3 font-semibold">
          {title}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <FaPlus />
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Hello, World!</h1>
      </Modal>
    </>
  );
};
export default BoardColumn;
