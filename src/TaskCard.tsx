import { Task } from "./Task";

type Props = {
  task: Task;
};
const TaskCard = ({ task }: Props) => {
  return (
    <div className="flex flex-col rounded-md border border-gray-300 shadow">
      <div className="flex justify-center rounded-t-md p-2 font-semibold">
        {task.title}
      </div>
      <div className="p-2 text-sm">{task.description}</div>
      <div className="flex justify-end rounded-b-md bg-gray-100 p-2">
        {task.status}
      </div>
    </div>
  );
};
export default TaskCard;
