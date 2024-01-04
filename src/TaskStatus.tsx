import { Status } from "./types/Status";

const TaskStatus = ({ status }: { status: Status }) => {
  const styles = [
    {
      id: 1,
      styles: { text: "text-slate-700", background: "bg-slate-200" },
    },
    {
      id: 2,
      styles: { text: "text-green-700", background: "bg-green-200" },
    },
    {
      id: 3,
      styles: { text: "text-red-700", background: "bg-red-200" },
    },
    {
      id: 4,
      styles: { text: "text-purple-700", background: "bg-purple-200" },
    },
  ];
  const selectedStyle = styles.find((s) => s.id === status.id)!.styles;
  return (
    <span
      className={`rounded-full ${selectedStyle.background} px-3 py-1 text-xs font-semibold ${selectedStyle.text}`}
    >
      {status.description}
    </span>
  );
};

export default TaskStatus;
