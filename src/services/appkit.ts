import { AppKit } from "@reown/appkit";
import { AppKitAdapterEthers5 } from "@reown/appkit-adapter-ethers5";

export const appkit = new AppKit({
  adapter: new AppKitAdapterEthers5(),
  network: "mainnet",
});

export async function connectWallet() {
  const wallet = await appkit.connect();
  return wallet;
}
