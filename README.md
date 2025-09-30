# CryptoLeaderboard

**CryptoLeaderboard** – A leaderboard for tracking crypto-based game scores or trading performance. Users submit scores via crypto transactions to authenticate, and top performers are displayed.

---

## Features

- Connect wallet via WalletConnect
- Submit game or trading scores using crypto
- Track score submissions with transaction hash and status
- Minimal and clean React + TypeScript setup

---

## Tech Stack

- **React** – Frontend UI  
- **TypeScript** – Type safety  
- **AppKit (`@reown/appkit`)** – Wallet connection & blockchain interaction  
- **AppKit Adapter Ethers5 (`@reown/appkit-adapter-ethers5`)** – Ethers.js v5 integration  
- **WalletConnect** – Connect any compatible wallet  

---

## Setup & Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/cryptoleaderboard.git
cd cryptoleaderboard

# Install dependencies
npm install

# Start the development server
npm start

# Open in browser
# http://localhost:3000

1. Click "Connect Wallet" to connect your wallet via WalletConnect.
2. Click "Submit Score" to submit your score using crypto as proof.
3. Scores will be tracked on the leaderboard with transaction status (pending, confirmed, failed).
4. Top scores can be displayed and optionally rewarded with crypto.

- Replace 0xLeaderboardContractHere in leaderboardService.ts with the actual smart contract address.
- Currently, demo scores are randomly generated; you can replace with actual game or trading scores.
- ETH is used as optional proof-of-score; you can expand to support other tokens.
