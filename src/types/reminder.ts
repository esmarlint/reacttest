export type Reminder = {
  id: number;
  text: string;
  stattus: "COMPLETED" | "PENDING" | "DELETED";
};
