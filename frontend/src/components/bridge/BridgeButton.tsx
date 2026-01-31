"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRightLeft, Check, X } from "lucide-react";

interface BridgeButtonProps {
  onClick: () => void;
  state: "idle" | "approving" | "bridging" | "waiting" | "success" | "error";
  disabled?: boolean;
  amount?: string;
}
