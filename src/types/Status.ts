export interface Status {
  id: number;
  description: string;
}

export const statusList: Status[] = [
  { id: 1, description: "Pending" },
  { id: 2, description: "Running" },
  { id: 3, description: "Blocked" },
  { id: 4, description: "Completed" },
];
