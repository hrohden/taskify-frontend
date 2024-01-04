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
    <div className="flex w-full flex-col rounded-md border border-gray-300 shadow">
      <div className="flex w-full justify-stretch gap-1 rounded-t-md p-2 font-semibold">
        <div className="w-full text-center">{task.title}</div>
        {task.status.id > minStatusId && (
          <button
            className="w-8 rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-semibold"
            onClick={() => {
              dispatch(
                move({
                  id: task.id,
                  status: statusList.find((s) => s.id === task.status.id - 1)!,
                }),
              );
            }}
          >
            <FaAngleLeft />
          </button>
        )}
        {task.status.id < maxStatusId && (
          <button
            className="w-8 rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-semibold"
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
      <div className="w-full p-2 text-sm">{task.description}</div>
      <div className="flex w-full justify-end rounded-b-md border-t border-t-gray-200 bg-gray-50 p-2">
        <TaskStatus status={task.status} />
      </div>
    </div>
  );
};
export default TaskCard;
