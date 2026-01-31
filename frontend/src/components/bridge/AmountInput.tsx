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
        <input
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="flex-1 bg-transparent text-2xl font-semibold text-text-primary placeholder:text-text-muted focus:outline-none disabled:opacity-50"
        />
        <div className="flex items-center gap-2">
          {maxAmount && (
            <button
              onClick={handleMax}
              className="rounded-lg bg-primary/10 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              MAX
            </button>
          )}
          <span className="text-sm font-medium text-text-secondary">
            {tokenSymbol}
          </span>
        </div>
      </div>
      {maxAmount && (
        <p className="mt-1.5 text-xs text-text-muted">
          Balance: {maxAmount} {tokenSymbol}
        </p>
      )}
      {error && <p className="mt-1.5 text-sm text-error">{error}</p>}
    </div>
  );
}
