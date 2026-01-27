"use client";

import { Button } from "@/components/ui/Button";
import { useWalletStore } from "@/stores/useWalletStore";
import { truncateAddress } from "@/lib/formatters";
import { Wallet, ChevronDown } from "lucide-react";

export function ConnectWalletButton() {
  const {
    ethAddress,
    ethConnected,
    stxAddress,
    stxConnected,
    connectEthereum,
    connectStacks,
    disconnectEthereum,
    disconnectStacks,
  } = useWalletStore();

  const isFullyConnected = ethConnected && stxConnected;

  if (isFullyConnected) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-xl bg-surface-light border border-border px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs text-text-secondary">
              {truncateAddress(ethAddress!)}
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs text-text-secondary">
              {truncateAddress(stxAddress!)}
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            disconnectEthereum();
            disconnectStacks();
          }}
        >
          Disconnect
        </Button>
      </div>
    );
  }

  if (ethConnected && !stxConnected) {
    return (
      <Button onClick={connectStacks} size="sm">
        <Wallet className="mr-2 h-4 w-4" />
        Connect Stacks
      </Button>
    );
  }

  return (
    <Button onClick={connectEthereum} size="sm">
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
      <ChevronDown className="ml-1 h-3 w-3" />
    </Button>
  );
}
