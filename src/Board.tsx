import BoardColumn from "./BoardColumn";
import { useGetAllStatusQuery } from "./app/taskSlice";

const Board = () => {
  const status = useGetAllStatusQuery();
  return status.error ? (
    <>Oh no, there was an error</>
  ) : status.isLoading ? (
    <>Loading...</>
  ) : status.data ? (
    <div className="flex w-full justify-between gap-3">
      {status.data.map((status) => (
        <BoardColumn key={status.id} title={status.description} tasks={[]} />
      ))}
    </div>
  ) : null;
};
export default Board;
