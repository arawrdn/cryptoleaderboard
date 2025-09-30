export interface Score {
  user: string;
  score: number;
  txHash?: string;
  status: "pending" | "confirmed" | "failed";
}
