import { HistoryOfOrder } from "@nftvillage/marketplace-sdk";
import axios from "axios";

/**
 * Fetch IPFS data
 *
 * @param ipfsUrl IPFS url of the metadata
 * @returns json object of the metadata
 */
export const fetchIpfs = (ipfsUrl: string) =>
  new Promise(async (resolve) => {
    let url = `https://ipfs.io/${ipfsUrl.replace("ipfs://", "")}`;
    let { data } = await axios.get(url);
    if (data?.image?.includes("ipfs://")) {
      data.image = `https://ipfs.io/${data.image.replace("ipfs://", "")}`;
    }
    resolve(data);
  });

/**
 * Calculate price change percentage from last 2 history of order
 *
 * @param history
 * @returns Change in price in percentage
 */
export const calculatePriceChange = (history?: HistoryOfOrder[]) => {
  if (history && history.length > 1) {
    let oldPrice = history[1].price;
    let newPrice = history[0].price;
    let precentageChange = ((newPrice - oldPrice) / oldPrice) * 100;
    return precentageChange.toFixed(2);
  } else {
    return null;
  }
};

export const imagePromise = (src: string) =>
  new Promise<string>(async (resolve, reject) => {
    try {
      if (src.substr(0, 5) === "data:") {
        resolve(src);
      } else {
        let response = await fetch(src);
        let blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);
        resolve(imageObjectURL);
      }
    } catch (error) {
      reject(error);
    }
  });
