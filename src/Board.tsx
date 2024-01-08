import BoardColumn from "./BoardColumn";
import { useGetAllTasksQuery } from "./app/taskSlice";
import { statusList } from "./types/Status";

const Board = () => {
  // const tasks = useSelector((state: Store) => state.tasks);
  const { data, error, isLoading } = useGetAllTasksQuery();
  return (
    <div className="flex w-full justify-between gap-3">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          {statusList.map((status) => (
            <BoardColumn
              key={status.id}
              title={status.description}
              tasks={data.filter((task) => task.status.id === status.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default Board;
