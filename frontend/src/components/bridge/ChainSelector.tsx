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
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          selectedChain.name === "Ethereum"
            ? "bg-secondary/20 text-secondary"
            : "bg-primary/20 text-primary"
        )}
      >
        <span className="text-lg font-bold">
          {selectedChain.name === "Ethereum" ? "E" : "S"}
        </span>
      </div>
     
  );
}
