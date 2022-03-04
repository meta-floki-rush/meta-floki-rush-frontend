import { useState, useEffect } from "react";
import { awaitTransaction, useReload, useContract, useEthers, toBigNumber, toLowerUnit } from "@react-dapp/utils";
import PrivateSaleAbi from "../assets/abi/private_sale_abi.json";
import { PRIVATE_SALE_ADDRESS } from "../assets/constant";
import notificationError from "../assets/images/notificationError.png";
import notificationSuccess from "../assets/images/notificationSuccess.png";
import { useNotifications } from "reapop";
import { NotificationComponent } from "../components/Notification/Notification";
import { getPrivateSaleRewards } from "../api/rewardInfo";
import { ethers } from "ethers";
import useNotify from "./useNotify";

export const usePrivateSaleClaim = () => {
  const contract = useContract(PrivateSaleAbi, PRIVATE_SALE_ADDRESS);
  const { notify, dismissNotifications } = useNotifications();
  const [txPending, setTxPending] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState();
  const [enabled, setEnabled] = useState(true);
  const [privateSaleClaimData, setPrivateSaleClaimData] = useState<any>(undefined);
  const { account } = useEthers();
  const { reload, reloadable } = useReload();

  useEffect(() => {
    const fetch = async () => {
      try {
        if (contract && account) {
          setEnabled(await contract.claimEnabled());
          setAlreadyClaimed(await contract.userClaim(account));
          const _claimData = await getPrivateSaleRewards(account);
          console.log(_claimData);
          setPrivateSaleClaimData(_claimData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [contract, account, reloadable, enabled, alreadyClaimed]);

  const claim = async () => {
    if (!contract || !privateSaleClaimData)
      return console.log("Unable to find private claim contract or private calim data");

    setTxPending(true);
    try {
      const { v, r, s } = ethers.utils.splitSignature(privateSaleClaimData.signature);
      const response = await awaitTransaction(
        contract.claim(privateSaleClaimData.deadline, privateSaleClaimData.amount, v, r, s),
      );
      console.log("response", response);

      dismissNotifications();
      if (response.status) {
        reload();
        notify({
          // @ts-ignore
          message: (
            <NotificationComponent
              title="Congratulations!"
              message="Reward Claim successful."
              image={notificationSuccess}
            />
          ),
        });
      } else {
        notify({
          // @ts-ignore
          message: (
            <NotificationComponent
              title={"Error: Something went wrong!"}
              message={`${response.error}`}
              image={notificationError}
            />
          ),
        });
      }
    } catch (e) {
      console.log(e);
    }
    setTxPending(false);
  };

  return {
    claim,
    amount: toLowerUnit(toBigNumber(privateSaleClaimData?.amount ?? "0").toString(), 9).toFormat(),
    contribution: privateSaleClaimData?.contribution,
    canClaim: Boolean(privateSaleClaimData?.signature),
    alreadyClaimed,
    enabled,
    txPending,
  };
};
