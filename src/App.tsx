import Board from "./Board";

function App() {
  return (
    <div className="flex w-full flex-col items-center gap-8 p-12">
      <h1 className="text-6xl font-bold">Taskify</h1>
      <Board />
    </div>
  );
}

export default App;
