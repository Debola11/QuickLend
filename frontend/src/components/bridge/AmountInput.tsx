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


}
