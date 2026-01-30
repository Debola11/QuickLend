import { STACKS_API_URL, VAULT_CONTRACT_ADDRESS, VAULT_CONTRACT_NAME } from "@/lib/constants";
import { cvToJSON, hexToCV } from "@stacks/transactions";

async function callReadOnly(
  contractAddress: string,
  contractName: string,
  functionName: string,
  args: string[] = []
) {
  const res = await fetch(
    `${STACKS_API_URL}/v2/contracts/call-read/${contractAddress}/${contractName}/${functionName}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: contractAddress,
        arguments: args,
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Stacks RPC error: ${res.status}`);
  }

  const data = await res.json();
  if (data.okay) {
    return cvToJSON(hexToCV(data.result));
  }
  throw new Error(data.cause || "Contract call failed");
}

export const stacksService = {
  async getTotalDeposits(): Promise<number> {
    try {
      const result = await callReadOnly(
        VAULT_CONTRACT_ADDRESS,
        VAULT_CONTRACT_NAME,
        "get-total-deposits"
      );
      return Number(result.value) / 1_000_000; // Convert from micro-units
    } catch {
      return 0;
    }
  },

  async getUserDeposit(address: string): Promise<number> {
    try {
      const result = await callReadOnly(
        VAULT_CONTRACT_ADDRESS,
        VAULT_CONTRACT_NAME,
        "get-user-deposit",
        [address]
      );
      return Number(result.value) / 1_000_000;
    } catch {
      return 0;
    }
  },
};
