import { Hex, keccak256, toHex } from "viem";

export enum ModalPage {
  NATIVE_MINT,
  NATIVE_MINT_PENDING_CONFIRMATION,
  NATIVE_MINTING_PENDING_TX,
  MINT_SUCCESS,
  BRIDGE,
  BRIDGE_PENDING,
  BRIDGE_SUCCESS,
  INSUFFICIENT_FUNDS,
  CROSS_MINT_FORM,
  CROSS_MINT_PENDING,
  CROSS_MINT_PAYMENT_FAILED,
  MINT_ERROR,
}

export enum MintType {
  ThirdWeb = 'thirdweb',
  Zora = 'zora',
  MintDotFun = 'mint.fun',
  External = 'external'
}

// 0x + first 8 characters / 4 bytes to append to calldata 
export const siteDataSuffix: Hex = keccak256(toHex('onchainsummer.xyz')).slice(0, 10) as Hex;
