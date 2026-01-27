"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md gradient-primary">
              <span className="text-xs font-bold text-white">Q</span>
            </div>
            <span className="text-sm font-semibold text-text-primary">
              Quick<span className="text-primary">Lend</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/bridge"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Bridge
            </Link>
            <Link
              href="/vault"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Vault
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Dashboard
            </Link>
          </div>
          <p className="text-xs text-text-muted">
            Built for Bitcoin DeFi on Stacks
          </p>
        </div>
      </div>
    </footer>
  );
}
