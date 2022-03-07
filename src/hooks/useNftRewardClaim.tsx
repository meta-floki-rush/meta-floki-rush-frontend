import { useEffect, useState } from "react";
import { awaitTransaction, useContract, useEthers, useReload } from "@react-dapp/utils";
import nftRewardClaim from "../assets/abi/nft_reward_claim_abi.json";
import nftSecondGift from "../assets/abi/nft_second_gift_claim.json";
import { NFT_REWARD_CLAIM_ADDRESS, NFT_SECOND_GIFT_CLAIM_ADDRESS } from "../assets/constant";
import notificationError from "../assets/images/notificationError.png";
import notificationSuccess from "../assets/images/notificationSuccess.png";
import { useNotifications } from "reapop";
import { NotificationComponent } from "../components/Notification/Notification";
import { ethers } from "ethers";
import { getNFTSecondGiftClaimData, getUserNftRewards } from "../api/rewardInfo";

export const useNFTRewardClaim = () => {
  const { account } = useEthers();
  const contract = useContract(nftRewardClaim, NFT_REWARD_CLAIM_ADDRESS);
  const { notify, dismissNotifications } = useNotifications();
  const [txPending, setTxPending] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [rewardClaimData, setRewardClaimData] = useState<any>(undefined);
  const { reload, reloadable } = useReload();

  useEffect(() => {
    const fetch = async () => {
      try {
        if (contract && account) {
          setEnabled(await contract.claimEnabled());
          setAlreadyClaimed(await contract.userClaim(account));
          setRewardClaimData(await getUserNftRewards(account));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [contract, account, reloadable]);

  const claim = async () => {
    if (!rewardClaimData || !contract) return;

    setTxPending(true);
    try {
      const { v, r, s } = ethers.utils.splitSignature(rewardClaimData.signature);
      const response = await awaitTransaction(contract.claim(rewardClaimData.deadline, v, r, s));

      dismissNotifications();
      if (response.status) {
        reload();
        notify({
          // @ts-ignore
          message: (
            <NotificationComponent
              title="CONGRATULATIONS!"
              message="YOU'VE MINT YOUR FIRST METAFLOKIRUSH NFT"
              image={notificationSuccess}
            />
          ),
        });

        setTxPending(false);
        return response;
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

  return { claim, canClaim: Boolean(rewardClaimData), alreadyClaimed, enabled, txPending };
};

export const useNFTSecondGiftClaim = (tokenId: number) => {
  const { account } = useEthers();
  const contract = useContract(nftSecondGift, NFT_SECOND_GIFT_CLAIM_ADDRESS);
  const { notify, dismissNotifications } = useNotifications();
  const [txPending, setTxPending] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [rewardClaimData, setRewardClaimData] = useState<any>(undefined);
  const { reload, reloadable } = useReload();

  useEffect(() => {
    const fetch = async () => {
      try {
        if (contract && account) {
          setEnabled(await contract.claimEnabled());
          setAlreadyClaimed(await contract.userClaim(account, tokenId));
          setRewardClaimData(await getNFTSecondGiftClaimData(account, tokenId));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [contract, account, reloadable]);

  const claim = async () => {
    if (!rewardClaimData || !contract) return;

    setTxPending(true);
    try {
      const { v, r, s } = ethers.utils.splitSignature(rewardClaimData.signature);
      const response = await awaitTransaction(
        contract.claim(rewardClaimData.tokenId, rewardClaimData.deadline, v, r, s),
      );

      dismissNotifications();
      if (response.status) {
        reload();
        notify({
          // @ts-ignore
          message: (
            <NotificationComponent
              title="CONGRATULATIONS!"
              message={`YOU'VE MINT YOUR ${tokenId === 16 ? "POSEIDON  FLOKI" : "HADES FLOKI"} NFT`}
              image={notificationSuccess}
            />
          ),
        });

        setTxPending(false);
        return response;
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

  return { claim, canClaim: Boolean(rewardClaimData), alreadyClaimed, enabled, txPending };
};
