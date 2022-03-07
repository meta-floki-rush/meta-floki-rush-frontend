import axios from "axios";

const api = axios.create({
  baseURL: "https://metafloki-whitelist-api.herokuapp.com/api/",
  // timeout: 10000,
});

const privateSaleApi = axios.create({
  baseURL: "https://metafloki-api.herokuapp.com/",
});

const secondGiftClaimApi = axios.create({
  baseURL: "https://metafloki-whitelist-v2.herokuapp.com/api/",
});

export const getTopHolders = async () => {
  try {
    const result = await privateSaleApi.get("top-holders");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserRewards = async (account) => {
  try {
    const result = await privateSaleApi.get(`top-holders-user-rewards/${account}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserNftRewards = async (account) => {
  try {
    const result = await api.get(`/signature/${account}`);

    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getNFTSecondGiftClaimData = async (account, tokenId) => {
  try {
    const result = await secondGiftClaimApi.get(`/signature/${tokenId}/${account}`);

    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPrivateSaleRewards = async (account) => {
  try {
    const result = await privateSaleApi.get(`private-sale/${account}`);

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
