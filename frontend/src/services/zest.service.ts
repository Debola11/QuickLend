import { DEFAULT_APY } from "@/lib/constants";

export const zestService = {
  async getCurrentAPY(): Promise<number> {
    // For hackathon MVP: return mock APY
    // In production, this would call the Zest Protocol API
    return DEFAULT_APY;
  },

  async getUserPosition(
    _address: string
  ): Promise<{ deposited: number; earned: number } | null> {
    // For hackathon MVP: return null (position tracked via vault contract)
    // In production, this would query Zest Protocol for yield data
    return null;
  },
};
