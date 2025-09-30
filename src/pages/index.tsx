import React from "react";
import { WalletConnectButton } from "../components/WalletConnectButton";
import { LeaderboardCard } from "../components/LeaderboardCard";

const users = ["0xUser1", "0xUser2", "0xUser3"];

export const HomePage = () => {
  return (
    <div>
      <h1>CryptoLeaderboard</h1>
      <WalletConnectButton />
      {users.map((user) => (
        <LeaderboardCard key={user} user={user} />
      ))}
    </div>
  );
};
