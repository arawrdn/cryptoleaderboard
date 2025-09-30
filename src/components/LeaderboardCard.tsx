import React from "react";
import { Score } from "../models/leaderboard";
import { submitScore } from "../services/leaderboardService";

interface Props {
  user: string;
}

export const LeaderboardCard: React.FC<Props> = ({ user }) => {
  const handleSubmit = async () => {
    await submitScore(user, Math.floor(Math.random() * 1000)); // demo score
  };

  return (
    <div>
      <p>User: {user}</p>
      <button onClick={handleSubmit}>Submit Score</button>
    </div>
  );
};
