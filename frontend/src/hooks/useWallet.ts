"use client";

import { useWalletStore } from "@/stores/useWalletStore";
import { useCallback } from "react";

export function useWallet() {
  const store = useWalletStore();

  const connect = useCallback(async () => {
    if (!store.ethConnected) {
      await store.connectEthereum();
    }
    if (!store.stxConnected) {
      await store.connectStacks();
    }
  }, [store]);

  const disconnect = useCallback(() => {
    store.disconnectEthereum();
    store.disconnectStacks();
  }, [store]);

  return {
    ethAddress: store.ethAddress,
    stxAddress: store.stxAddress,
    ethConnected: store.ethConnected,
    stxConnected: store.stxConnected,
    isFullyConnected: store.ethConnected && store.stxConnected,
    ethBalance: store.ethBalance,
    stxBalance: store.stxBalance,
    connect,
    disconnect,
    connectEthereum: store.connectEthereum,
    connectStacks: store.connectStacks,
  };
}
