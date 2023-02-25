import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getOwnedNFTs' : (arg_0: Principal) => Promise<Array<Principal>>,
  'mint' : (arg_0: Array<number>, arg_1: string) => Promise<Principal>,
}
