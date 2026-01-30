"use client";

import { create } from "zustand";
import type { Toast } from "@/types";

interface UIState {
  depositModalOpen: boolean;
  withdrawModalOpen: boolean;
  toasts: Toast[];

  openDepositModal: () => void;
  closeDepositModal: () => void;
  openWithdrawModal: () => void;
  closeWithdrawModal: () => void;
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  depositModalOpen: false,
  withdrawModalOpen: false,
  toasts: [],

  openDepositModal: () => set({ depositModalOpen: true }),
  closeDepositModal: () => set({ depositModalOpen: false }),
  openWithdrawModal: () => set({ withdrawModalOpen: true }),
  closeWithdrawModal: () => set({ withdrawModalOpen: false }),

  addToast: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        { ...toast, id: crypto.randomUUID() },
      ],
    })),

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
