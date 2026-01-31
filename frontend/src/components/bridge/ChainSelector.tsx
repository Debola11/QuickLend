"use client";

import { cn } from "@/lib/utils";
import type { Chain } from "@/types";

interface ChainSelectorProps {
  direction: "source" | "destination";
  selectedChain: Chain;
  disabled?: boolean;
}

export function ChainSelector({
  direction,
  selectedChain,
  disabled,
}: ChainSelectorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl bg-surface-light border border-border px-4 py-3",
        disabled && "opacity-50"
      )}
    >
      
  );
}
