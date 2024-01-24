import BoardColumn from "./BoardColumn";
import { useGetAllStatusQuery, useGetAllTasksQuery } from "./app/taskSlice";

const Board = () => {
  const status = useGetAllStatusQuery();
  const tasks = useGetAllTasksQuery();
  return status.error ? (
    <>Oh no, there was an error</>
  ) : status.isLoading ? (
    <>Loading...</>
  ) : status.data ? (
    <div className="flex w-full justify-between gap-3">
      {status.data.map((status) => (
        <BoardColumn
          key={status.id}
          status={status}
          tasks={
            tasks.data?.filter((task) => task.status.id === status.id) || []
          }
        />
      ))}
    </div>
  ) : null;
};
export default Board;
