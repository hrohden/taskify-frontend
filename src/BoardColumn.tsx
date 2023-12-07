import { Task } from "./Task";
import TaskCard from "./TaskCard";

const BoardColumn = ({ tasks, title }: { tasks: Task[]; title: string }) => {
  return (
    <div className="flex flex-col rounded border border-gray-300">
      <div className="flex w-full justify-center rounded-t-md bg-gray-100 p-3 font-semibold">
        {title}
      </div>
      <div className="flex flex-col justify-stretch gap-3 rounded-md p-3">
        {tasks.map((t) => (
          <TaskCard task={t} />
        ))}
      </div>
    </div>
  );
};
export default BoardColumn;
