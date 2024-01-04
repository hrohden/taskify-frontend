import { useSelector } from "react-redux";
import BoardColumn from "./BoardColumn";
import { statusList } from "./types/Status";
import { Store } from "./types/Store";

const Board = () => {
  const tasks = useSelector((state: Store) => state.tasks);
  return (
    <div className="flex w-full justify-between gap-3">
      {statusList.map((status) => (
        <BoardColumn
          key={status.id}
          title={status.description}
          tasks={tasks.filter((task) => task.status.id === status.id)}
        />
      ))}
    </div>
  );
};
export default Board;
