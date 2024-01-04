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

export default TaskStatus;
