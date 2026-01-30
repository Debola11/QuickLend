"use client";

import { useCallback } from "react";
import { useBridgeStore } from "@/stores/useBridgeStore";
import { bridgeService } from "@/services/bridge.service";
import { useUIStore } from "@/stores/useUIStore";

export function useBridge() {
  const store = useBridgeStore();
  const addToast = useUIStore((s) => s.addToast);

  const startBridge = useCallback(async () => {
    if (!store.amount || parseFloat(store.amount) <= 0) {
      store.setError("Please enter a valid amount");
      return;
    }

    store.setStatus("approving");
    store.setStep(0);

    try {
      const result = await bridgeService.simulateBridge(
        store.amount,
        (step) => {
          const statuses = [
            "approving",
            "depositing",
            "attesting",
            "minting",
            "complete",
          ] as const;
          store.setStep(step);
          store.setStatus(statuses[step] || "complete");
        }
      );

      store.setTxHash(result.ethTxHash);
      store.setStacksTxHash(result.stxTxHash);
      store.setStatus("complete");
      store.setStep(5);

      addToast({
        type: "success",
        title: "Bridge Complete",
        description: `Successfully bridged ${store.amount} USDC to USDCx`,
      });
    } catch (error) {
      store.setError(
        error instanceof Error ? error.message : "Bridge failed"
      );
      addToast({
        type: "error",
        title: "Bridge Failed",
        description: "An error occurred during the bridge process",
      });
    }
  }, [store, addToast]);

  return {
    amount: store.amount,
    setAmount: store.setAmount,
    status: store.status,
    currentStep: store.currentStep,
    steps: store.steps,
    txHash: store.txHash,
    error: store.error,
    startBridge,
    resetBridge: store.resetBridge,
  };
}
