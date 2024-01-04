import { useDispatch } from "react-redux";
import { Task } from "./Task";
import TaskStatus from "./TaskStatus";
import { move } from "./app/taskSlice";

const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full flex-col rounded-md border border-gray-300 shadow">
      <div className="flex w-full justify-stretch gap-1 rounded-t-md p-2 font-semibold">
        <div className="w-full text-center">{task.title}</div>
        <button
          className="w-8 rounded-md border border-gray-200 p-1 text-sm text-gray-400"
          onClick={() => {
            dispatch(move({ id: task.id, status: "PENDING" }));
          }}
        >
          ◀
        </button>
        <button
          className="w-8 rounded-md border border-gray-200 p-1 text-sm text-gray-400"
          onClick={() => {
            dispatch(move({ id: task.id, status: "BLOCKED" }));
          }}
        >
          ▶
        </button>
      </div>
      <div className="w-full p-2 text-sm">{task.description}</div>
      <div className="flex w-full justify-end rounded-b-md border-t border-t-gray-200 bg-gray-50 p-2">
        <TaskStatus status={task.status} />
      </div>
    </div>
  );
};
export default TaskCard;
