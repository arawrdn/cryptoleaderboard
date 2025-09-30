import { appkit } from "./appkit";
import { Score } from "../models/leaderboard";

export async function submitScore(userAddress: string, score: number): Promise<Score> {
  try {
    const tx = await appkit.sendTransaction({
      to: "0xLeaderboardContractHere",
      value: 0, // optional ETH as proof-of-score
      token: "ETH"
    });

    return { user: userAddress, score, txHash: tx.hash, status: "pending" };
  } catch {
    return { user: userAddress, score, status: "failed" };
  }
}
