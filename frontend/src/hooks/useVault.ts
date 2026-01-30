"use client";

import { useEffect, useCallback } from "react";
import { useVaultStore } from "@/stores/useVaultStore";
import { useWalletStore } from "@/stores/useWalletStore";
import { useUIStore } from "@/stores/useUIStore";

export function useVault() {
  const store = useVaultStore();
  const stxAddress = useWalletStore((s) => s.stxAddress);
  const addToast = useUIStore((s) => s.addToast);

  useEffect(() => {
    store.fetchVaultStats();
  }, []);

  useEffect(() => {
    if (stxAddress) {
      store.fetchUserPosition(stxAddress);
    }
  }, [stxAddress]);

  const deposit = useCallback(
    async (amount: string) => {
      try {
        addToast({
          type: "info",
          title: "Depositing",
          description: `Depositing ${amount} USDCx to vault...`,
        });

        // In production, this would call the Stacks contract
        // For hackathon, simulate success
        await new Promise((r) => setTimeout(r, 2000));

        addToast({
          type: "success",
          title: "Deposit Successful",
          description: `${amount} USDCx deposited to vault`,
        });

        // Refresh data
        store.fetchVaultStats();
        if (stxAddress) store.fetchUserPosition(stxAddress);
      } catch (error) {

}
