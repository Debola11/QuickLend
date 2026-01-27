"use client";

import { create } from "zustand";

interface WalletState {
  // Ethereum
  ethAddress: string | null;
  ethConnected: boolean;
  ethBalance: string;

  // Stacks
  stxAddress: string | null;
  stxConnected: boolean;
  stxBalance: string;

  // Actions
  connectEthereum: () => Promise<void>;
  disconnectEthereum: () => void;
  connectStacks: () => Promise<void>;
  disconnectStacks: () => void;
  setEthBalance: (balance: string) => void;
  setStxBalance: (balance: string) => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  ethAddress: null,
  ethConnected: false,
  ethBalance: "0",
  stxAddress: null,
  stxConnected: false,
  stxBalance: "0",

  connectEthereum: async () => {
    try {
      if (typeof window === "undefined" || !window.ethereum) {
        alert("Please install MetaMask to connect your Ethereum wallet.");
        return;
      }
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];
      if (accounts.length > 0) {
        set({ ethAddress: accounts[0], ethConnected: true });
      }
    } catch (error) {
      console.error("Failed to connect Ethereum wallet:", error);
    }
  },

  disconnectEthereum: () => {
    set({ ethAddress: null, ethConnected: false, ethBalance: "0" });
  },

  connectStacks: async () => {
    try {
      const { showConnect } = await import("@stacks/connect");
      showConnect({
        appDetails: {
          name: "QuickLend",
          icon: "/logo.svg",
        },
        onFinish: (data) => {
          const address = data.userSession.loadUserData().profile.stxAddress;
          set({
            stxAddress: address?.mainnet || address?.testnet || null,
            stxConnected: true,
          });
        },
        onCancel: () => {
          console.log("Stacks connection cancelled");
        },
      });
    } catch (error) {
      console.error("Failed to connect Stacks wallet:", error);
    }
  },

  disconnectStacks: () => {
    set({ stxAddress: null, stxConnected: false, stxBalance: "0" });
  },

  setEthBalance: (balance: string) => set({ ethBalance: balance }),
  setStxBalance: (balance: string) => set({ stxBalance: balance }),
}));
