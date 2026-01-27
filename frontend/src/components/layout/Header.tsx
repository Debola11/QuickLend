"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ConnectWalletButton } from "@/components/shared/ConnectWalletButton";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <span className="text-sm font-bold text-white">Q</span>
          </div>
          <span className="text-lg font-bold text-text-primary">
            Quick<span className="text-primary">Lend</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Wallet + Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ConnectWalletButton />
          </div>
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border">
              <ConnectWalletButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
