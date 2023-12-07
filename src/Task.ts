export interface Task {
  title: string;
  description?: string;
  status: "PENDING" | "RUNNING" | "BLOCKED" | "COMPLETED";
}
