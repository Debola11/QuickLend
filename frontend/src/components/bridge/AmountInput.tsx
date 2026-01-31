"use client";

import { cn } from "@/lib/utils";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  maxAmount?: string;
  tokenSymbol: string;
  error?: string;
  disabled?: boolean;
}

export function AmountInput({
  value,
  onChange,
  maxAmount,
  tokenSymbol,
  error,
  disabled,
}: AmountInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow only numbers and one decimal point
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      onChange(val);
    }
  };

  const handleMax = () => {
    if (maxAmount) {
      onChange(maxAmount);
    }
  };

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl bg-surface-light border border-border px-4 py-3",
          "focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary",
          "transition-all duration-200",
          error && "border-error focus-within:ring-error/50"
        )}
      >
       
}
