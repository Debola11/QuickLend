"use client";

import { create } from "zustand";
import type { BridgeStep } from "@/types";

type BridgeStatus =
  | "idle"
  | "approving"
  | "depositing"
  | "attesting"
  | "minting"
  | "complete"
  | "error";

interface BridgeState {
  amount: string;
  currentStep: number;
  txHash: string | null;
  stacksTxHash: string | null;
  status: BridgeStatus;
  error: string | null;
  steps: BridgeStep[];

  setAmount: (amount: string) => void;
  setStatus: (status: BridgeStatus) => void;
  setStep: (step: number) => void;
  setTxHash: (hash: string) => void;
  setStacksTxHash: (hash: string) => void;
  setError: (error: string) => void;
  resetBridge: () => void;
}

const defaultSteps: BridgeStep[] = [
  { label: "Approve USDC", status: "pending" },
  { label: "Deposit to xReserve", status: "pending" },
  { label: "Attestation", status: "pending" },
  { label: "Mint USDCx", status: "pending" },
  { label: "Deploy to Vault", status: "pending" },
];

export const useBridgeStore = create<BridgeState>((set) => ({
  amount: "",
  currentStep: 0,
  txHash: null,
  stacksTxHash: null,
  status: "idle",
  error: null,
  steps: defaultSteps.map((s) => ({ ...s })),

  setAmount: (amount) => set({ amount }),

  setStatus: (status) => set({ status }),

  setStep: (step) =>
    set((state) => {
      const steps = state.steps.map((s, i) => ({
        ...s,
        status:
          i < step
            ? ("complete" as const)
            : i === step
              ? ("active" as const)
              : ("pending" as const),
      }));
      return { currentStep: step, steps };
    }),

  setTxHash: (hash) => set({ txHash: hash }),
  setStacksTxHash: (hash) => set({ stacksTxHash: hash }),
  setError: (error) =>
    set((state) => {
      const steps = state.steps.map((s, i) =>
        i === state.currentStep ? { ...s, status: "error" as const } : s
      );
      return { error, status: "error", steps };
    }),

  resetBridge: () =>
    set({
      amount: "",
      currentStep: 0,
      txHash: null,
      stacksTxHash: null,
      status: "idle",
      error: null,
      steps: defaultSteps.map((s) => ({ ...s })),
    }),
}));
