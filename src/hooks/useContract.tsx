import { useContract } from "@react-dapp/utils";
import { RANDOM_PRESALE_ADDRESS } from "../config/config";
import RANDOM_PRESALE_ABI from "../assets/abi/random_presale_abi.json";

export const useNFTRandomSale = () => {
  return useContract(RANDOM_PRESALE_ABI, RANDOM_PRESALE_ADDRESS);
};
