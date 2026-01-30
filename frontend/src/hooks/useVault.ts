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

}
