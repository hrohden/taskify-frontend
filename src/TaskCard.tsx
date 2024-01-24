import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCheck,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import TaskStatus from "./TaskStatus";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
} from "./app/taskSlice";
import { statusList } from "./types/Status";
import { Task } from "./types/Task";

const TaskCardEditForm = ({
  task,
  handleClick,
}: {
  task: Task;
  handleClick: () => void;
}) => {
  const form = useForm<Task>({
    defaultValues: {
      title: task.title,
      description: task.description,
    },
  });
  const [updateTask] = useUpdateTaskMutation();
  return (
    <div className="p-2">
      <form
        className="flex flex-col gap-2"
        id={`task_${task.id}`}
        onSubmit={form.handleSubmit((data) => {
          // @ts-expect-error id is required
          updateTask({ id: task.id, ...data });
          handleClick();
        })}
      >
        <input
          type="text"
          {...form.register("title")}
          className="block w-full rounded-lg border border-gray-200 p-2 text-lg font-bold text-gray-800 dark:text-white"
        />
        <input
          type="text"
          {...form.register("description")}
          className="block w-full rounded-lg border border-gray-200 p-2 text-gray-500 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
        />
        <div className="flex gap-2">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-blue-600 px-2 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            type="submit"
          >
            <FaCheck /> Save changes
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-lg border border-transparent bg-red-600 px-2 py-2 text-xs font-semibold text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={handleClick}
          >
            <MdClose /> Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const TaskCardContent = ({ task }: { task: Task }) => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h3 className="border border-white p-2 text-lg font-bold text-gray-800 dark:text-white">
          {task.title}
        </h3>
      </div>
      <p className="mt-2 border border-white p-2 text-gray-500 dark:text-gray-400">
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
        <TaskCardEditForm
          task={task}
          handleClick={() => setEditMode((prevEditMode) => !prevEditMode)}
        />
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
          }}
          disabled={editMode}
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
