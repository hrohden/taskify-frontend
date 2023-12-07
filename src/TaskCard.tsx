import { Task } from "./Task";

type Props = {
  task: Task;
};
const TaskCard = ({ task }: Props) => {
  return (
    <div>
      <div>{task.title}</div>
      <div>{task.description}</div>
      <div>{task.status}</div>
    </div>
  );
};
export default TaskCard;
