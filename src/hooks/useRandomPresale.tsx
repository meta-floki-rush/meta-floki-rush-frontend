import { awaitTransaction, toBigNumber, toLowerUnit, useEthers, useReload } from "@react-dapp/utils";
import { useNFTRandomSale } from "./useContract";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import useNotify from "./useNotify";

const useBuyPack = () => {
  const randomSale = useNFTRandomSale();
  const { account } = useEthers();
  const [txPending, setTxPending] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const { reload, reloadable } = useReload();
  const { notifyError } = useNotify();
  const [price, setPrice] = useState("...");

  useEffect(() => {
    const init = async () => {
      try {
        if (!randomSale || !account) return;
        setEnabled(await randomSale.enabled());
        setPrice(toLowerUnit(toBigNumber(await randomSale.price()).toString()).toString());
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [randomSale, account, reloadable]);

  const buyPack = async () => {
    try {
      if (!randomSale) {
        console.log("Unable to find presale contract");
        return;
      }
      setTxPending(true);
      const txResponse = await awaitTransaction(
        randomSale.buyPack({
          value: ethers.utils.parseEther(price),
        }),
      );
      reload();
      setTxPending(false);
      console.log(txResponse.error);
      if (!txResponse.status) notifyError(txResponse.error);
      return txResponse;
    } catch (error) {
      console.log("error", error);
    }
  };
  return { buyPack, enabled, txPending, price };
};

export default useBuyPack;
