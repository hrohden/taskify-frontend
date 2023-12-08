import { Task } from "./Task";

const TaskStatus = ({ status }: { status: string }) => {
  const styles = [
    {
      status: "PENDING",
      styles: { text: "text-slate-700", background: "bg-slate-200" },
    },
    {
      status: "RUNNING",
      styles: { text: "text-green-700", background: "bg-green-200" },
    },
    {
      status: "BLOCKED",
      styles: { text: "text-red-700", background: "bg-red-200" },
    },
    {
      status: "COMPLETED",
      styles: { text: "text-purple-700", background: "bg-purple-200" },
    },
  ];
  const selectedStyle = styles.find((s) => s.status === status)!.styles;
  return (
    <span
      className={`rounded-full ${selectedStyle.background} px-3 py-1 text-xs font-semibold ${selectedStyle.text}`}
    >
      {status}
    </span>
  );
};

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="flex w-full flex-col rounded-md border border-gray-300 shadow">
      <div className="flex w-full justify-stretch gap-1 rounded-t-md p-2 font-semibold">
        <div className="w-full text-center">{task.title}</div>
        <button className="w-8 rounded-md border border-gray-200 p-1 text-sm text-gray-400">
          ◀
        </button>
        <button className="w-8 rounded-md border border-gray-200 p-1 text-sm text-gray-400">
          ▶
        </button>
      </div>
      <div className="w-full p-2 text-sm">{task.description}</div>
      <div className="flex w-full justify-end rounded-b-md border-t border-t-gray-200 bg-gray-50 p-2">
        <TaskStatus status={task.status} />
      </div>
    </div>
  );
};
export default TaskCard;
