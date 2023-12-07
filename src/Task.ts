export interface Task {
  title: string;
  description?: string;
  status: "DONE" | "RUNNING" | "CANCELED";
}
