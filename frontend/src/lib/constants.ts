export const STACKS_NETWORK = process.env.NEXT_PUBLIC_STACKS_NETWORK || "testnet";
export const STACKS_API_URL =
  process.env.NEXT_PUBLIC_STACKS_API_URL || "https://api.testnet.hiro.so";
export const ETHEREUM_RPC_URL =
  process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL || "";

export const VAULT_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_VAULT_CONTRACT_ADDRESS || "";
export const VAULT_CONTRACT_NAME =
  process.env.NEXT_PUBLIC_VAULT_CONTRACT_NAME || "Quick-Lend";
export const USDCX_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_USDCX_CONTRACT_ADDRESS || "";
export const USDCX_CONTRACT_NAME =
  process.env.NEXT_PUBLIC_USDCX_CONTRACT_NAME || "usdcx-token";

export const USDC_ADDRESS =
  process.env.NEXT_PUBLIC_USDC_ADDRESS ||
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export const XRESERVE_ADDRESS =
  process.env.NEXT_PUBLIC_XRESERVE_ADDRESS || "";

export const ZEST_API_URL =
  process.env.NEXT_PUBLIC_ZEST_API_URL || "https://api.zestprotocol.com";
export const ZEST_POOL_ID = process.env.NEXT_PUBLIC_ZEST_POOL_ID || "1";

export const DEFAULT_APY = 9.2;

export const ETHEREUM_CHAIN = {
  id: 1,
  name: "Ethereum",
  icon: "/chains/ethereum.svg",
};

export const STACKS_CHAIN = {
  id: 0,
  name: "Stacks",
  icon: "/chains/stacks.svg",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/bridge", label: "Bridge" },
  { href: "/vault", label: "Vault" },
  { href: "/dashboard", label: "Dashboard" },
];
