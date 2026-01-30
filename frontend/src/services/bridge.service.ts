import type { BridgeStatus } from "@/types";

export const bridgeService = {
  async getStatus(txHash: string): Promise<BridgeStatus> {
    try {
      const res = await fetch(`/api/bridge/status/${txHash}`);
      if (res.ok) {
        return await res.json();
      }
      throw new Error("Failed to fetch bridge status");
    } catch {
      return {
        status: "pending",
        ethereumTx: txHash,
        stacksTx: null,
        amount: "0",
        completedAt: null,
      };
    }
  },

  // Simulates bridge flow for hackathon demo
  async simulateBridge(
    amount: string,
    onStep: (step: number) => void
  ): Promise<{ ethTxHash: string; stxTxHash: string }> {
    const mockEthTx = `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`;
    const mockStxTx = `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`;

    // Step 0: Approve USDC
    onStep(0);
    await new Promise((r) => setTimeout(r, 2000));

    // Step 1: Deposit to xReserve
    onStep(1);
    await new Promise((r) => setTimeout(r, 2500));

    // Step 2: Attestation
    onStep(2);
    await new Promise((r) => setTimeout(r, 3000));

    // Step 3: Mint USDCx
    onStep(3);
    await new Promise((r) => setTimeout(r, 2000));

    // Step 4: Deploy to Vault
    onStep(4);
    await new Promise((r) => setTimeout(r, 1500));

    return { ethTxHash: mockEthTx, stxTxHash: mockStxTx };
  },
};
