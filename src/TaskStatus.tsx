import { Status } from "./types/Status";

const TaskStatus = ({ status }: { status: Status }) => {
  const styles = [
    {
      id: 1,
      className:
        "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white",
    },
    {
      id: 2,
      className:
        "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500",
    },
    {
      id: 3,
      className:
        "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500",
    },
    {
      id: 4,
      className:
        "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500",
    },
  ];
  const selectedStyle = styles.find((s) => s.id === status.id)!.className;
  return <span className={selectedStyle}>{status.description}</span>;
};

export default TaskStatus;
