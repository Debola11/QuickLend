"use client";

import { useCallback, useEffect, useState } from "react";
import { DEFAULT_APY } from "@/lib/constants";
import { zestService } from "@/services/zest.service";

export function useYield() {
  const [currentAPY, setCurrentAPY] = useState(DEFAULT_APY);

  useEffect(() => {
    zestService.getCurrentAPY().then(setCurrentAPY);
  }, []);

  const calculateYield = useCallback(
    (principal: number, daysActive: number, apy?: number) => {
      const rate = apy ?? currentAPY;
      return (principal * (rate / 100) / 365) * daysActive;
    },
    [currentAPY]
  );

  const simulateDeposit = useCallback(
    async (amount: string, duration: number) => {
      try {
        const res = await fetch("/api/vault/simulate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, duration }),
        });
        if (res.ok) {
          return await res.json();
        }
        return null;
      } catch {
       
      }
    },
    []
  );

  return {
    currentAPY,
    calculateYield,
    simulateDeposit,
  };
}
