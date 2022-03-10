import { usePools } from "@nftvillage/farms-sdk";
import { useInventoryERC1155 } from "@nftvillage/marketplace-sdk";
import { useERC1155Balance } from "@react-dapp/utils";
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
      {loading || userNfts.loading || poolNfts.loading || !userNfts.results || !poolNfts.results ? (
        <div>Loading...</div>
      ) : (
        <>
          <StakingCard
            key={0}
            staticApy="720"
            rarity={1}
            nftPrice={"20000000000000000000000"}
            nftList={userNfts.results}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={0}
          />
          <StakingCard
            key={1}
            staticApy="960"
            rarity={2}
            nftPrice={"7000000000000000000000000"}
            nftList={userNfts.results}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={1}
          />
          <StakingCard
            key={2}
            staticApy="1200"
            rarity={3}
            nftPrice={"0.4"}
            nftList={userNfts.results}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={2}
          />
          <StakingCard
            key={3}
            staticApy="1440"
            rarity={4}
            nftPrice={"0.4"}
            nftList={userNfts.results}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={3}
          />
          <StakingCard
            key={4}
            staticApy="3000"
            rarity={5}
            nftPrice={"0.4"}
            nftList={userNfts.results}
            poolNftList={poolNfts.results}
            loading={loading}
            poolId={4}
          />
        </>
      )}
    </div>
  );
};

export default NftStaking;
