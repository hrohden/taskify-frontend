import { Task } from "./Task";

const TaskStatus = ({ status }: { status: string }) => {
  return (
    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-700">
      {status}
    </span>
  );
};

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="flex flex-col rounded-md border border-gray-300 shadow">
      <div className="flex justify-center rounded-t-md p-2 font-semibold">
        {task.title}
      </div>
      <div className="p-2 text-sm">{task.description}</div>
      <div className="flex justify-end rounded-b-md border-t border-t-gray-200 bg-gray-50 p-2">
        <TaskStatus status={task.status} />
      </div>
    </div>
  );
};
export default TaskCard;
