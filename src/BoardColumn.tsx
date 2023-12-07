import { Task } from "./Task";
import TaskCard from "./TaskCard";

const BoardColumn = ({ tasks, title }: { tasks: Task[]; title: string }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-center p-3 font-semibold">
        {title}
      </div>
      <div className="flex w-full flex-col justify-stretch gap-3 p-3">
        {tasks.map((t) => (
          <TaskCard task={t} />
        ))}
      </div>
    </div>
  );
};
export default BoardColumn;
