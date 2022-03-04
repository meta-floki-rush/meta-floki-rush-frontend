import { useState, useEffect } from "react";
import { awaitTransaction, toBigNumber, useReload, useContract, useEthers, toLowerUnit } from "@react-dapp/utils";
import tokenAbi from "../assets/abi/token_abi.json";
import rewardClaimAbi from "../assets/abi/reward_claim_abi.json";
import { TOKEN_ADDRESS, REWARD_CLAIM_ADDRESS } from "../assets/constant";
import notificationError from "../assets/images/notificationError.png";
import notificationSuccess from "../assets/images/notificationSuccess.png";
import { useNotifications } from "reapop";
import { NotificationComponent } from "../components/Notification/Notification";
import { ethers } from "ethers";
import useNotify from "./useNotify";

export const useNormalRewardClaim = () => {
  const contract = useContract(tokenAbi, TOKEN_ADDRESS);
  const { notify, dismissNotifications } = useNotifications();
  const [rewardClaim, setRewardClaim] = useState("0");
  const [txPending, setTxPending] = useState(false);
  const { account } = useEthers();
  const { reload, reloadable } = useReload();

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!contract || !account) {
          console.log("Unable to find reward claim contract and account");
          return;
        }
        setRewardClaim(toLowerUnit(toBigNumber(await contract.calculateReward(account)).toString(), 8).toFormat(0));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [contract, account, reloadable]);

  const claim = async () => {
    setTxPending(true);

    try {
      if (!contract) return console.log("Unable to find reward claim contract");
      const response = await awaitTransaction(contract.claimReward());
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

      if (reload) reload();
    } catch (e) {
      console.log(e);
    }
    setTxPending(false);
  };

  return { claim, rewardClaim, txPending };
};

export const useTopHolderRewardClaim = () => {
  const contract = useContract(rewardClaimAbi, REWARD_CLAIM_ADDRESS);
  const { notify, dismissNotifications } = useNotifications();
  const { account } = useEthers();
  const [txPending, setTxPending] = useState(false);
  const { notifyError, notifySuccess } = useNotify();
  const { reload, reloadable } = useReload();

  const claim = async (rewards: string, deadline: number, signature: any) => {
    setTxPending(true);
    try {
      if (!contract) return console.log("Unable to find reward claim contract");
      const { v, r, s } = ethers.utils.splitSignature(signature);

      const response = await awaitTransaction(contract.claimRewards(account, rewards, deadline, v, r, s));
      console.log("respone", response);

      dismissNotifications();
      if (response.status) {
        reload();
        notifySuccess("Reward Claim successful");
      } else {
        notifyError(`${response.error}`);
      }

      if (reload) reload();
    } catch (e) {
      console.log(e);
    }
    setTxPending(false);
  };

  return { claim, txPending };
};
