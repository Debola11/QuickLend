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

}
