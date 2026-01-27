export interface VaultStats {
  totalDeposits: string;
  currentAPY: number;
  totalUsers: number;
  totalYieldGenerated: string;
}

export interface UserPosition {
  address: string;
  deposited: string;
  currentValue: string;
  earned: string;
  apy: number;
  depositedAt: number;
  daysActive: number;
}

export interface BridgeStatus {
  status: "pending" | "attesting" | "minting" | "completed" | "failed";
  ethereumTx: string;
  stacksTx: string | null;
  amount: string;
  completedAt: number | null;
}

export interface SimulationRequest {
  amount: string;
  duration: number;
}

export interface SimulationResult {
  principalAmount: string;
  projectedYield: string;
  finalValue: string;
  apy: number;
}

export interface Transaction {
  type: "deposit" | "withdraw" | "bridge" | "yield";
  amount: string;
  timestamp: number;
  txHash: string;
  status: "pending" | "confirmed" | "failed";
}

export interface Chain {
  id: number;
  name: string;
  icon: string;
}

export interface BridgeStep {
  label: string;
  status: "pending" | "active" | "complete" | "error";
  txHash?: string;
}

export interface Toast {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  description?: string;
}
