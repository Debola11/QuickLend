import { createPublicClient, http } from "viem";
import { mainnet, sepolia } from "viem/chains";
import { ETHEREUM_RPC_URL, STACKS_NETWORK } from "@/lib/constants";

const chain = STACKS_NETWORK === "mainnet" ? mainnet : sepolia;

export const publicClient = createPublicClient({
  chain,
  transport: http(ETHEREUM_RPC_URL || undefined),
});
