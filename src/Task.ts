export interface Task {
  title: string;
  description?: string;
  status: "DONE" | "PENDING" | "CANCELED";
}
