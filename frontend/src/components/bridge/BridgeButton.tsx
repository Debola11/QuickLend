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
