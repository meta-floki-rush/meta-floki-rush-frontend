// require('dotenv').config()

export const FARM_ADDRESS = process.env.REACT_APP_FARM_ADDRESS as string;
export const CARD_HANDLER_ADDRESS = process.env.REACT_APP_CARD_HANDLER as string;
export const POOL_CARD_ADDRESS = process.env.REACT_APP_POOL_CARDS_ADDRESS as string;
export const BASE_RELAYER_URL = process.env.REACT_APP_BASE_RELAYER_URL as string;
export const RANDOM_PRESALE_ADDRESS = process.env.REACT_APP_RANDOM_PRESALE_ADDRESS as string;

export const MAX_AVAILABLE_PACKS = [35, 35, 35, 40, 27, 27, 27, 29, 12, 12, 11, 4, 4, 5, 11];

export const TOKEN_STAKING_POOL_IDS = [7];
export const NFT_STAKING_POOL_IDS = [0, 1, 2, 3, 4, 5, 6];
