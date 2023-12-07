import { Task } from "./Task";
import TaskCard from "./TaskCard";

type Props = {
  tasks: Task[];
};
const Board = ({ tasks }: Props) => {
  return (
    <div className="flex w-full gap-2">
      {tasks.map((t) => (
        <TaskCard task={t} />
      ))}
    </div>
  );
};
export default Board;
