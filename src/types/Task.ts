import { Status } from "./Status";

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: Status;
}
