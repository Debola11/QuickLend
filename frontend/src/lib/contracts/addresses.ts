import {
  VAULT_CONTRACT_ADDRESS,
  VAULT_CONTRACT_NAME,
  USDCX_CONTRACT_ADDRESS,
  USDCX_CONTRACT_NAME,
  USDC_ADDRESS,
  XRESERVE_ADDRESS,
} from "../constants";

export const contracts = {
  vault: {
    address: VAULT_CONTRACT_ADDRESS,
    name: VAULT_CONTRACT_NAME,
  },
  usdcx: {
    address: USDCX_CONTRACT_ADDRESS,
    name: USDCX_CONTRACT_NAME,
  },
  usdc: {
    address: USDC_ADDRESS as `0x${string}`,
  },
  xReserve: {
    address: XRESERVE_ADDRESS as `0x${string}`,
  },
};
