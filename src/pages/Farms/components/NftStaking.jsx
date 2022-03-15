import { usePools } from "@nftvillage/farms-sdk";
import { useInventoryERC1155 } from "@nftvillage/marketplace-sdk";
import { CARD_HANDLER_ADDRESS, POOL_CARD_ADDRESS } from "../../../config/config";
import useStyles from "../Style";
import StakingCard from "./cards/StakingCard";

const NftStaking = () => {
  const classes = useStyles();
  const { loading } = usePools();
  const userNfts = useInventoryERC1155(POOL_CARD_ADDRESS, 18);
  const poolNfts = useInventoryERC1155(POOL_CARD_ADDRESS, 18, undefined, CARD_HANDLER_ADDRESS);

  return (
    <div className={classes.card_Container}>
      {poolNfts.results.length > 0 && (
        <>
          <StakingCard
            rewardPerBlock={3000}
            loading={loading || userNfts.loading || poolNfts.loading}
            key={0}
            staticApy="720"
            rarity={1}
            nftPrice={"0.25"}
            nftList={userNfts.results?.filter((e) => e.rarity === 1)}
            poolNftList={poolNfts.results}
            poolId={0}
          />
          <StakingCard
            rewardPerBlock={3000}
            key={1}
            staticApy="960"
            rarity={2}
            nftPrice={"0.4"}
            nftList={userNfts.results?.filter((e) => e.rarity === 2 && e.tokenId !== 15)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={1}
          />
          <StakingCard
            rewardPerBlock={4000}
            key={2}
            staticApy="1200"
            rarity={3}
            nftPrice={"0.6"}
            nftList={userNfts.results?.filter((e) => e.rarity === 3 && e.tokenId !== 16 && e.tokenId !== 17)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={2}
          />
          <StakingCard
            rewardPerBlock={10000}
            key={3}
            staticApy="1440"
            rarity={4}
            nftPrice={"1.2"}
            nftList={userNfts.results?.filter((e) => e.rarity === 4)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={3}
          />
          <StakingCard
            rewardPerBlock={10000}
            key={4}
            staticApy="3000"
            rarity={5}
            nftPrice={"4"}
            nftList={userNfts.results?.filter((e) => e.rarity === 5)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={4}
          />
          <StakingCard
            rewardPerBlock={3000}
            key={5}
            special
            staticApy="1000"
            rarity={2}
            nftPrice={"0.4"}
            nftList={userNfts.results?.filter((e) => e.tokenId === 15)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={5}
          />
          <StakingCard
            rewardPerBlock={4000}
            key={6}
            special
            staticApy="1300"
            rarity={3}
            nftPrice={"0.6"}
            nftList={userNfts.results?.filter((e) => e.tokenId === 16 || e.tokenId === 17)}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={6}
          />
        </>
      )}
    </div>
  );
};

export default NftStaking;
