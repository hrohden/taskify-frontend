import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";
import TaskStatus from "./TaskStatus";
import {
  useDeleteTaskMutation,
  useUpdateTaskStatusMutation,
} from "./app/taskSlice";
import { statusList } from "./types/Status";
import { Task } from "./types/Task";

const TaskCardEditForm = ({ task }: { task: Task }) => {
  return <div>edit form...</div>;
};

const TaskCardContent = ({ task }: { task: Task }) => {
  return (
    <div className="p-4 md:p-5">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {task.title}
        </h3>
      </div>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        {task.description}
      </p>
    </div>
  );
};

const TaskCard = ({ task }: { task: Task }) => {
  const [updateTaskStatus] = useUpdateTaskStatusMutation();
  const [deleteTaskMutation] = useDeleteTaskMutation();
  const [editMode, setEditMode] = useState(false);
  const minStatusId = statusList[0].id;
  const maxStatusId = statusList[statusList.length - 1].id;
  return (
    <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
      {editMode ? (
        <TaskCardEditForm task={task} />
      ) : (
        <TaskCardContent task={task} />
      )}
      <div className="flex justify-end gap-2 rounded-b-xl border-t bg-gray-100 px-3 py-3 dark:border-gray-700 dark:bg-slate-900 md:px-2 md:py-2">
        <div className="flex w-full items-center">
          <TaskStatus status={task.status} />
        </div>
        <button
          className="dark:text-red inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          onClick={() => {
            setEditMode((prevEditMode) => !prevEditMode);
            console.log("change");
          }}
        >
          <FaRegEdit />
        </button>
        <button
          className="dark:text-red inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-red-600 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          onClick={() => {
            deleteTaskMutation(task.id);
          }}
        >
          <FaRegTrashAlt />
        </button>
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-0.5 dark:border-gray-700">
          {task.status.id > minStatusId && (
            <button
              className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => {
                updateTaskStatus({
                  id: task.id,
                  statusId: task.status.id - 1,
                });
              }}
            >
              <FaAngleLeft />
            </button>
          )}
          {task.status.id < maxStatusId && (
            <button
              className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => {
                updateTaskStatus({
                  id: task.id,
                  statusId: task.status.id + 1,
                });
              }}
            >
              <FaAngleRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
