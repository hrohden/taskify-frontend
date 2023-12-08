import { useSelector } from "react-redux";
import BoardColumn from "./BoardColumn";
import { Store } from "./types/store";

const Board = () => {
  const tasks = useSelector((state: Store) => state.tasks);
  return (
    <div className="flex w-full justify-between gap-3">
      <BoardColumn title="Pending" tasks={[]} />
      <BoardColumn title="Running" tasks={tasks} />
      <BoardColumn title="Blocked" tasks={[]} />
      <BoardColumn title="Completed" tasks={[]} />
    </div>
  );
};
export default Board;
