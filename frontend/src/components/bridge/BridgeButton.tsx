"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRightLeft, Check, X } from "lucide-react";

interface BridgeButtonProps {
  onClick: () => void;
  state: "idle" | "approving" | "bridging" | "waiting" | "success" | "error";
  disabled?: boolean;
  amount?: string;
}

const stateLabels: Record<BridgeButtonProps["state"], string> = {
  idle: "Bridge & Earn",
  approving: "Approving USDC...",
  bridging: "Bridging...",
  waiting: "Waiting for attestation...",
  success: "Bridge Complete!",
  error: "Bridge Failed",
};

export function BridgeButton({
  onClick,
  state,
  disabled,
  amount,
}: BridgeButtonProps) {
  const isLoading = ["approving", "bridging", "waiting"].includes(state);
  const isSuccess = state === "success";
  const isError = state === "error";

  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      size="lg"
      variant={isError ? "secondary" : "primary"}
      className={`w-full ${isSuccess ? "bg-success hover:bg-success/90" : ""} ${isLoading ? "animate-pulse-glow" : ""}`}
    >
      {!isLoading && (
        <>
          {isSuccess && <Check className="mr-2 h-5 w-5" />}
          {isError && <X className="mr-2 h-5 w-5" />}
          {state === "idle" && <ArrowRightLeft className="mr-2 h-5 w-5" />}
        </>
      )}
      {stateLabels[state]}
      {state === "idle" && amount && parseFloat(amount) > 0 && (
        <span className="ml-1 opacity-75">({amount} USDC)</span>
      )}
    </Button>
  );
}
