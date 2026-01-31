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

}
