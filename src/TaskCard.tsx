import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import TaskStatus from "./TaskStatus";
import { move } from "./app/taskSlice";
import { statusList } from "./types/Status";
import { Task } from "./types/Task";

const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();
  const minStatusId = statusList[0].id;
  const maxStatusId = statusList[statusList.length - 1].id;
  return (
    <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
      <div className="p-4 md:p-5">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {task.title}
          </h3>
          <div className="inline-flex rounded-full border border-gray-200 p-0.5 dark:border-gray-700">
            {task.status.id > minStatusId && (
              <button
                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => {
                  dispatch(
                    move({
                      id: task.id,
                      status: statusList.find(
                        (s) => s.id === task.status.id - 1,
                      )!,
                    }),
                  );
                }}
              >
                <FaAngleLeft />
              </button>
            )}
            {task.status.id < maxStatusId && (
              <button
                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => {
                  const newStatusId =
                    task.status.id + 1 > maxStatusId
                      ? maxStatusId
                      : task.status.id + 1;
                  dispatch(
                    move({
                      id: task.id,
                      status: statusList.find((s) => s.id === newStatusId)!,
                    }),
                  );
                }}
              >
                <FaAngleRight />
              </button>
            )}
          </div>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {task.description}
        </p>
      </div>
      <div className="flex justify-end rounded-b-xl border-t bg-gray-100 px-4 py-3 dark:border-gray-700 dark:bg-slate-900 md:px-5 md:py-4">
        <TaskStatus status={task.status} />
      </div>
    </div>
  );
};
export default TaskCard;
