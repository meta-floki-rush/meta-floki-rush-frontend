import { useState, useEffect } from "react";
import tokenAbi from "../assets/abi/token_abi.json";
import rewardClaimAbi from "../assets/abi/reward_claim_abi.json";
import { TOKEN_ADDRESS, REWARD_CLAIM_ADDRESS, ADA_ADDRESS } from "../assets/constant";
import { Multicall } from "ethereum-multicall";
import BigNumber from "bignumber.js";
import { getUserRewards, getTopHolders } from "../api/rewardInfo";
import { getUserNftRewards } from "../api/rewardInfo";
import { useEthers, useContract, toBigNumber } from "@react-dapp/utils";
import { Contract } from "ethers";

const useReload = () => {
  const [value, setValue] = useState(0);

  const reload = () => {
    setValue((e) => e + 1);
  };

  return { reload, reloadable: value };
};

const useTokenInfo = () => {
  const { reload, reloadable } = useReload();
  const { ethers, account } = useEthers();
  const rewardContract = useContract(rewardClaimAbi, REWARD_CLAIM_ADDRESS);
  const [rewardTokenBalance, setRewardTokenBalance] = useState<string>("0");
  const [tokenBalance, setTokenBalance] = useState<string>("0");
  const [reward, setReward] = useState<string>("0");
  const [claimTimeLeft, setClaimTimeLeft] = useState<number>(0);
  const [totalRewards, setTotalRewards] = useState<string>("0");
  const [topHolderTotalRewards, setTopHolderTotalRewards] = useState<string>("0");
  const [totalUserTopReward, setTotalUserTopReward] = useState<string>("0");
  const [userRewardInfo, setUserRewardInfo] = useState<string>("0");
  const [userNftReward, setUserNftReward] = useState<string>("0");
  const [top50Club, setTop50Club] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      try {
        const multicall = new Multicall({
          ethersProvider: ethers,
          tryAggregate: true,
        });

        const call = [
          {
            reference: "tokenBalance",
            contractAddress: TOKEN_ADDRESS,
            abi: tokenAbi,
            calls: [
              {
                reference: "tokenBalance",
                methodName: "balanceOf",
                methodParameters: [account],
              },
            ],
          },
          {
            reference: "rewardTokenBalance",
            contractAddress: ADA_ADDRESS,
            abi: tokenAbi,
            calls: [
              {
                reference: "rewardTokenBalance",
                methodName: "balanceOf",
                methodParameters: [account],
              },
            ],
          },
          {
            reference: "calculateReward",
            contractAddress: TOKEN_ADDRESS,
            abi: tokenAbi,
            calls: [
              {
                reference: "calculateReward",
                methodName: "calculateReward",
                methodParameters: [account],
              },
            ],
          },
          {
            reference: "nextAvailableClaimDate",
            contractAddress: TOKEN_ADDRESS,
            abi: tokenAbi,
            calls: [
              {
                reference: "nextAvailableClaimDate",
                methodName: "nextAvailableClaimDate",
                methodParameters: [account],
              },
            ],
          },
          {
            reference: "totalRewards",
            contractAddress: ADA_ADDRESS,
            abi: tokenAbi,
            calls: [
              {
                reference: "totalRewards",
                methodName: "balanceOf",
                methodParameters: [TOKEN_ADDRESS],
              },
            ],
          },
          {
            reference: "currentRewardCycle",
            contractAddress: REWARD_CLAIM_ADDRESS,
            abi: rewardClaimAbi,
            calls: [
              {
                reference: "currentRewardCycle",
                methodName: "currentRewardCycle",
                methodParameters: [],
              },
            ],
          },
          {
            reference: "currentNonce",
            contractAddress: REWARD_CLAIM_ADDRESS,
            abi: rewardClaimAbi,
            calls: [
              {
                reference: "currentNonce",
                methodName: "nonces",
                methodParameters: [account],
              },
            ],
          },
          {
            reference: "totalUserRewards",
            contractAddress: REWARD_CLAIM_ADDRESS,
            abi: rewardClaimAbi,
            calls: [
              {
                reference: "totalUserRewards",
                methodName: "userClaimedRewards",
                methodParameters: [account],
              },
            ],
          },
        ];
        const result = (await multicall.call(call as any)).results;
        setTokenBalance(
          new BigNumber(result.tokenBalance.callsReturnContext[0].returnValues[0].hex)
            .div(new BigNumber(10).exponentiatedBy(9))
            .toFixed(2),
        );
        setRewardTokenBalance(
          new BigNumber(result.rewardTokenBalance.callsReturnContext[0].returnValues[0].hex)
            .div(new BigNumber(10).exponentiatedBy(18))
            .toFixed(2),
        );
        setReward(
          new BigNumber(result.calculateReward.callsReturnContext[0].returnValues[0].hex)
            .div(new BigNumber(10).exponentiatedBy(18))
            .toFixed(2),
        );
        setClaimTimeLeft(
          new BigNumber(result.nextAvailableClaimDate.callsReturnContext[0].returnValues[0].hex).toNumber(),
        );
        setTotalRewards(
          new BigNumber(result.totalRewards.callsReturnContext[0].returnValues[0].hex)
            .div(new BigNumber(10).exponentiatedBy(18))
            .toFormat(0),
        );
        setTotalUserTopReward(
          new BigNumber(result.totalUserRewards.callsReturnContext[0].returnValues[0].hex)
            .div(new BigNumber(10).exponentiatedBy(18))
            .toFormat(0),
        );

        const userInfo = await getUserRewards(account);
        setUserRewardInfo(userInfo);

        const userNft = await getUserNftRewards(account);
        setUserNftReward(userNft.data);

        const topHolders = await getTopHolders();
        for (let index = 0; index < topHolders.length; index++) {
          if (topHolders[index].account === account) {
            setTop50Club(++index);
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (account && ethers && rewardContract) fetch();
  }, [ethers, account, rewardContract, reloadable]);

  return {
    totalUserTopReward,
    tokenBalance,
    rewardTokenBalance,
    reward,
    claimTimeLeft,
    totalRewards,
    topHolderTotalRewards,
    userRewardInfo,
    userNftReward,
    top50Club,
    reload,
  };
};

export default useTokenInfo;
